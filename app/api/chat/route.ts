import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { getContext, OPENAI_MODEL } from '@/lib/chat';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not defined');
    }

    const { message, sessionId } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json({ error: 'Missing message or sessionId' }, { status: 400 });
    }

    // 1. Ensure Session Exists
    const sessionCheck = await sql`SELECT id FROM chat_sessions WHERE id = ${sessionId}`;
    if (sessionCheck.length === 0) {
      await sql`INSERT INTO chat_sessions (id) VALUES (${sessionId})`;
    }

    // 2. Save User Message
    await sql`
      INSERT INTO chat_messages (session_id, role, content) 
      VALUES (${sessionId}, 'user', ${message})
    `;

    // 3. Get Context & History
    const context = await getContext();
    const history = await sql`
      SELECT role, content FROM chat_messages 
      WHERE session_id = ${sessionId} 
      ORDER BY created_at ASC 
      LIMIT 20
    `;

    // 4. Construct Prompt
    const messages = [
      { role: 'system', content: context.system },
      { role: 'system', content: `\n\nTRAINING DATA:\n${context.training}` },
      ...history.map((msg: any) => ({ role: msg.role as 'user' | 'assistant', content: msg.content })),
    ];

    // 5. Call OpenAI
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: messages as any,
      temperature: 0.7,
    });

    const botResponse = completion.choices[0].message.content || "I'm sorry, I couldn't generate a response.";

    // 6. Save Assistant Message
    await sql`
      INSERT INTO chat_messages (session_id, role, content) 
      VALUES (${sessionId}, 'assistant', ${botResponse})
    `;

    return NextResponse.json({ response: botResponse, sessionId });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
