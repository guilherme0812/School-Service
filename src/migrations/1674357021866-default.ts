import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674357021866 implements MigrationInterface {
    name = 'default1674357021866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects_rooms_rooms" ("subjectsId" uuid NOT NULL, "roomsId" uuid NOT NULL, CONSTRAINT "PK_f9a73aafcb3762935cb8127f115" PRIMARY KEY ("subjectsId", "roomsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c3fc35fb9f326f49511d5edb2f" ON "subjects_rooms_rooms" ("subjectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_672157ba3fa4d6f4899e41d3ff" ON "subjects_rooms_rooms" ("roomsId") `);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "delete_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" ADD CONSTRAINT "FK_c3fc35fb9f326f49511d5edb2f8" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" ADD CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5" FOREIGN KEY ("roomsId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" DROP CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5"`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" DROP CONSTRAINT "FK_c3fc35fb9f326f49511d5edb2f8"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "delete_at"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "create_at"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_672157ba3fa4d6f4899e41d3ff"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c3fc35fb9f326f49511d5edb2f"`);
        await queryRunner.query(`DROP TABLE "subjects_rooms_rooms"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
