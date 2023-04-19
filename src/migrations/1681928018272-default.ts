import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681928018272 implements MigrationInterface {
    name = 'default1681928018272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "class_subjects_subject" ("classId" uuid NOT NULL, "subjectId" uuid NOT NULL, CONSTRAINT "PK_d266459b6be03f067380966d113" PRIMARY KEY ("classId", "subjectId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e7671b36675969b6b169d9ef4b" ON "class_subjects_subject" ("classId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1dcd296a909d0bcc15d86bec5f" ON "class_subjects_subject" ("subjectId") `);
        await queryRunner.query(`ALTER TABLE "class_subjects_subject" ADD CONSTRAINT "FK_e7671b36675969b6b169d9ef4b5" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "class_subjects_subject" ADD CONSTRAINT "FK_1dcd296a909d0bcc15d86bec5fa" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class_subjects_subject" DROP CONSTRAINT "FK_1dcd296a909d0bcc15d86bec5fa"`);
        await queryRunner.query(`ALTER TABLE "class_subjects_subject" DROP CONSTRAINT "FK_e7671b36675969b6b169d9ef4b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1dcd296a909d0bcc15d86bec5f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e7671b36675969b6b169d9ef4b"`);
        await queryRunner.query(`DROP TABLE "class_subjects_subject"`);
    }

}
