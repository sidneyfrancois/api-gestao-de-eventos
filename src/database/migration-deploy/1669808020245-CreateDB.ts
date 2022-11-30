import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateDB1669808020245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "hostsevent",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "events",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "hostevent_id",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "events",
      new TableForeignKey({
        columnNames: ["hostevent_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "hostsevent",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "tickets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "available",
            type: "boolean",
            isNullable: false,
          },
          {
            name: "event_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "tickets",
      new TableForeignKey({
        columnNames: ["event_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "events",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
