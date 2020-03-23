import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration implements MigrationInterface {
  name = 'UserMigration1584948912283';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL NOT NULL, "username" character varying NOT NULL, 
        "password" character varying NOT NULL, 
        "isDeleted" boolean NOT NULL DEFAULT false, 
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
