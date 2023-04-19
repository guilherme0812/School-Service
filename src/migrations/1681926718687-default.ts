import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681926718687 implements MigrationInterface {
    name = 'default1681926718687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subject_leasons_leason" ("subjectId" uuid NOT NULL, "leasonId" uuid NOT NULL, CONSTRAINT "PK_859627d8702f29ccd297aa42a78" PRIMARY KEY ("subjectId", "leasonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_81b1ffe210709bbfaf3142bb86" ON "subject_leasons_leason" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6fec489f4bb02082ea2c087da9" ON "subject_leasons_leason" ("leasonId") `);
        await queryRunner.query(`ALTER TABLE "subject" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subject_leasons_leason" ADD CONSTRAINT "FK_81b1ffe210709bbfaf3142bb867" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subject_leasons_leason" ADD CONSTRAINT "FK_6fec489f4bb02082ea2c087da9a" FOREIGN KEY ("leasonId") REFERENCES "leason"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_leasons_leason" DROP CONSTRAINT "FK_6fec489f4bb02082ea2c087da9a"`);
        await queryRunner.query(`ALTER TABLE "subject_leasons_leason" DROP CONSTRAINT "FK_81b1ffe210709bbfaf3142bb867"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "description"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6fec489f4bb02082ea2c087da9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_81b1ffe210709bbfaf3142bb86"`);
        await queryRunner.query(`DROP TABLE "subject_leasons_leason"`);
    }

}
