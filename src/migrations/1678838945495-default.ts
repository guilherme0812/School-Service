import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678838945495 implements MigrationInterface {
    name = 'default1678838945495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "videos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "url" character varying NOT NULL, "room_id" uuid, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_12eee115462e38d62e5455fc054" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "filename" character varying NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subject_rooms_room" ("subjectId" uuid NOT NULL, "roomId" uuid NOT NULL, CONSTRAINT "PK_2c89e7664e37d260c66b7d1bddc" PRIMARY KEY ("subjectId", "roomId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_33c3ead1ae0efe252b9b665983" ON "subject_rooms_room" ("subjectId") `);
        await queryRunner.query(`CREATE INDEX "IDX_220688e1b2c7f84b45775200a1" ON "subject_rooms_room" ("roomId") `);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_64bb2d8544299bbde670698ac37" FOREIGN KEY ("room_id") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" ADD CONSTRAINT "FK_33c3ead1ae0efe252b9b6659830" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" ADD CONSTRAINT "FK_220688e1b2c7f84b45775200a19" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" DROP CONSTRAINT "FK_220688e1b2c7f84b45775200a19"`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" DROP CONSTRAINT "FK_33c3ead1ae0efe252b9b6659830"`);
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_64bb2d8544299bbde670698ac37"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_220688e1b2c7f84b45775200a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_33c3ead1ae0efe252b9b665983"`);
        await queryRunner.query(`DROP TABLE "subject_rooms_room"`);
        await queryRunner.query(`DROP TABLE "photo"`);
        await queryRunner.query(`DROP TABLE "subject"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "videos"`);
    }

}
