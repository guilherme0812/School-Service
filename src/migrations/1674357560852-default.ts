import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674357560852 implements MigrationInterface {
    name = 'default1674357560852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" DROP CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5"`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" ADD CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5" FOREIGN KEY ("roomsId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" DROP CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5"`);
        await queryRunner.query(`ALTER TABLE "subjects_rooms_rooms" ADD CONSTRAINT "FK_672157ba3fa4d6f4899e41d3ff5" FOREIGN KEY ("roomsId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
