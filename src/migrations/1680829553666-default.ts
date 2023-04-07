import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680829553666 implements MigrationInterface {
    name = 'default1680829553666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" DROP CONSTRAINT "FK_220688e1b2c7f84b45775200a19"`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" ADD CONSTRAINT "FK_220688e1b2c7f84b45775200a19" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" DROP CONSTRAINT "FK_220688e1b2c7f84b45775200a19"`);
        await queryRunner.query(`ALTER TABLE "subject_rooms_room" ADD CONSTRAINT "FK_220688e1b2c7f84b45775200a19" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
