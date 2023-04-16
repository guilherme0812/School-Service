import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681610500861 implements MigrationInterface {
    name = 'default1681610500861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "videos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "url" character varying NOT NULL, "room_id" uuid, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "leason" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_3efb0e6673b2ca605294011fdab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "deleteAt" TIMESTAMP, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "filename" character varying NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject_rooms_leason" ("subjectId" uuid NOT NULL, "leasonId" uuid NOT NULL, CONSTRAINT "PK_a6cf8df6743741aaacb385736bc" PRIMARY KEY ("subjectId", "leasonId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d26d50bbcbaa711889cd60a23d" ON "subject_rooms_leason" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fbca0e2a7099c38b9d2592299b" ON "subject_rooms_leason" ("leasonId") `);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_64bb2d8544299bbde670698ac37" FOREIGN KEY ("room_id") REFERENCES "leason"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_leason" ADD CONSTRAINT "FK_d26d50bbcbaa711889cd60a23da" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_leason" ADD CONSTRAINT "FK_fbca0e2a7099c38b9d2592299b1" FOREIGN KEY ("leasonId") REFERENCES "leason"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_rooms_leason" DROP CONSTRAINT "FK_fbca0e2a7099c38b9d2592299b1"`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_leason" DROP CONSTRAINT "FK_d26d50bbcbaa711889cd60a23da"`);
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_64bb2d8544299bbde670698ac37"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fbca0e2a7099c38b9d2592299b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d26d50bbcbaa711889cd60a23d"`);
        await queryRunner.query(`DROP TABLE "subject_rooms_leason"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "leason"`);
        await queryRunner.query(`DROP TABLE "videos"`);
    }

}
