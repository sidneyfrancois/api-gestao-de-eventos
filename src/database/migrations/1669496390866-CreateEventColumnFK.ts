import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateEventColumnFK1669496390866 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "events",
      new TableForeignKey({
        columnNames: ["hostevent_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "hostsevent",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
