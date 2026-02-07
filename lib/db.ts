import { neon } from '@neondatabase/serverless';

const getConnectionString = () => {
  if (!process.env.DATABASE_URL) return undefined;
  let url = process.env.DATABASE_URL.trim();
  // Handle "psql '...'" format copy-paste error
  if (url.startsWith('psql')) {
    url = url.replace(/^psql\s+/, '');
  }
  // Handle potential surrounding quotes
  if (url.startsWith("'") && url.endsWith("'")) {
    url = url.slice(1, -1);
  }
  return url;
};

const connectionString = getConnectionString();

const sql = connectionString 
  ? neon(connectionString) 
  : ((...args: any[]) => { throw new Error('DATABASE_URL is not defined'); });

export default sql as any;
