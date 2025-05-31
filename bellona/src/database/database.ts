import { Database } from 'src/database/repos/types';
const SQLite = require("better-sqlite3");
import { Kysely, SqliteDialect } from 'kysely';

const dialect = new SqliteDialect({
  database: new SQLite('data.db'),
});

export const db = new Kysely<Database>({ dialect });
