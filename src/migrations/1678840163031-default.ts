import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678840163031 implements MigrationInterface {
    name = 'default1678840163031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "update_at"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "delete_at"`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "deleteAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "subject" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "delete_at" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subject" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
