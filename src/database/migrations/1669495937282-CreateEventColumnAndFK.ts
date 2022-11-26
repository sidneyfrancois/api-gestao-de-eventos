import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class CreateEventColumnAndFK1669495937282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "events",
      new TableColumn({
        name: "hostevent_id",
        type: "uuid",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
