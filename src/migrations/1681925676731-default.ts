import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681925676731 implements MigrationInterface {
    name = 'default1681925676731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "leason_subjects_subject" ("leasonId" uuid NOT NULL, "subjectId" uuid NOT NULL, CONSTRAINT "PK_5c57f5dded1ac467fc531021f8a" PRIMARY KEY ("leasonId", "subjectId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9d6ad227e28296f50c8a022c20" ON "leason_subjects_subject" ("leasonId") `);
        await queryRunner.query(`CREATE INDEX "IDX_967cc52c50a0d7f0422a699d75" ON "leason_subjects_subject" ("subjectId") `);
        await queryRunner.query(`ALTER TABLE "leason_subjects_subject" ADD CONSTRAINT "FK_9d6ad227e28296f50c8a022c20c" FOREIGN KEY ("leasonId") REFERENCES "leason"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "leason_subjects_subject" ADD CONSTRAINT "FK_967cc52c50a0d7f0422a699d753" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "leason_subjects_subject" DROP CONSTRAINT "FK_967cc52c50a0d7f0422a699d753"`);
        await queryRunner.query(`ALTER TABLE "leason_subjects_subject" DROP CONSTRAINT "FK_9d6ad227e28296f50c8a022c20c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_967cc52c50a0d7f0422a699d75"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9d6ad227e28296f50c8a022c20"`);
        await queryRunner.query(`DROP TABLE "leason_subjects_subject"`);
    }

}
