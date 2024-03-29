"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1678751254490 = void 0;
class default1678751254490 {
    constructor() {
        this.name = 'default1678751254490';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "videos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "url" character varying NOT NULL, "room_id" uuid, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_rooms_room" ("subjectsId" uuid NOT NULL, "roomId" uuid NOT NULL, CONSTRAINT "PK_b52b3ab9332c96a774702ed89df" PRIMARY KEY ("subjectsId", "roomId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d096a423afd68d4c576ce737ec" ON "subjects_rooms_room" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_feef23018a24e84c0658e0bc9a" ON "subjects_rooms_room" ("roomId") `);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_64bb2d8544299bbde670698ac37" FOREIGN KEY ("room_id") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_room" ADD CONSTRAINT "FK_d096a423afd68d4c576ce737ec2" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_room" ADD CONSTRAINT "FK_feef23018a24e84c0658e0bc9a3" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "subjects_rooms_room" DROP CONSTRAINT "FK_feef23018a24e84c0658e0bc9a3"`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_room" DROP CONSTRAINT "FK_d096a423afd68d4c576ce737ec2"`);
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_64bb2d8544299bbde670698ac37"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_feef23018a24e84c0658e0bc9a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d096a423afd68d4c576ce737ec"`);
        await queryRunner.query(`DROP TABLE "subjects_rooms_room"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "videos"`);
    }
}
exports.default1678751254490 = default1678751254490;
