import { TRAINING_DATA, SYSTEM_PROMPT } from './chat-data';

export async function getContext() {
  return { training: TRAINING_DATA, system: SYSTEM_PROMPT };
}

export const OPENAI_MODEL = 'gpt-4o-mini';
