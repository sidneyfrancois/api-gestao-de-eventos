import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateTicketColumnAndFK1669496677688
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "tickets",
      new TableColumn({
        name: "event_id",
        type: "uuid",
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
