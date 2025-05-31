import { Database } from 'src/database/models/types';
import SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';

const dialect = new SqliteDialect({
  database: SQLite('data.db'),
});

export const db = new Kysely<Database>({ dialect });
