import fs from 'fs';
import path from 'path';

export async function getContext() {
  const trainingPath = path.join(process.cwd(), 'components', 'Rivian_Collision_chatbot_training_v1.md');
  const systemPath = path.join(process.cwd(), 'components', 'rivian_chatbot_system_prompt_v1.md');
  
  const training = fs.readFileSync(trainingPath, 'utf8');
  const system = fs.readFileSync(systemPath, 'utf8');

  return { training, system };
}

export const OPENAI_MODEL = 'gpt-4o-mini';
