import { ColumnBuilderCallback, Generated } from 'kysely';
import { db } from 'src/database/database';
import { TableNames } from 'src/database/repos/types';
import { DataTypeExpression } from 'kysely/dist/esm/parser/data-type-parser';

export interface BaseTable {
  id: Generated<number>;
}

export interface Column {
  name: string;
  type: DataTypeExpression;
  extras?: ColumnBuilderCallback;
}

export abstract class BaseRepo<NewType, UpdateType> {
  protected abstract readonly tableName: TableNames;
  protected abstract readonly columns: Column[];

  public async bootstrap(logger: { debug: (message: string) => void }) {
    try {
      logger.debug(`Creating table ${this.tableName}`);
      let expression = db.schema.createTable(this.tableName);
      this.columns.forEach((column) =>
        (expression = expression.addColumn(column.name, column.type, column.extras)));

      await expression.execute();
      logger.debug(`Created table ${this.tableName}`);
    } catch (SqliteError) {
      logger.debug(`Table ${this.tableName} already exists`);
    }
  }

  public async create(data: NewType): Promise<{ id: number }> {
    return await db
      .insertInto(this.tableName)
      .values(data)
      .returning("id")
      .executeTakeFirst();
  }

  public async update(id: number, data: UpdateType): Promise<void> {
    await db
      .updateTable(this.tableName)
      // @ts-ignore I assume it's because it doesn't know which table will be returned from updateTable, but it should be fine.
      .set(data)
      .where("id", "=", id)
      .executeTakeFirst();
  }
}
