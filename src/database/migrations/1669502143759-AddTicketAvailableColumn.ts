import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTicketAvailableColumn1669502143759
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "tickets",
      new TableColumn({
        name: "available",
        type: "boolean",
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
