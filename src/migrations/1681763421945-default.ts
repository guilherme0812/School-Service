import { MigrationInterface, QueryRunner } from "typeorm";

export class default1681763421945 implements MigrationInterface {
    name = 'default1681763421945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."studant_status_enum" AS ENUM('active', 'inactive', 'pending')`);
        await queryRunner.query(`CREATE TABLE "studant" ("cpf" character varying NOT NULL, "name" character varying NOT NULL, "birthDate" date NOT NULL, "couse" character varying NOT NULL, "status" "public"."studant_status_enum" NOT NULL DEFAULT 'inactive', "enrollment" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, "classId" uuid, CONSTRAINT "PK_b462ccddb6f4e5ba15139f3a2bf" PRIMARY KEY ("cpf"))`);
        await queryRunner.query(`CREATE TABLE "class" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "delete_at" TIMESTAMP, CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "studant" ADD CONSTRAINT "FK_fc76391006fe7a3bcb0d012ae4f" FOREIGN KEY ("classId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "studant" DROP CONSTRAINT "FK_fc76391006fe7a3bcb0d012ae4f"`);
        await queryRunner.query(`DROP TABLE "class"`);
        await queryRunner.query(`DROP TABLE "studant"`);
        await queryRunner.query(`DROP TYPE "public"."studant_status_enum"`);
    }

}
