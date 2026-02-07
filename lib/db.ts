import { neon } from '@neondatabase/serverless';

const sql = process.env.DATABASE_URL 
  ? neon(process.env.DATABASE_URL) 
  : ((...args: any[]) => { throw new Error('DATABASE_URL is not defined'); });

export default sql as any;
