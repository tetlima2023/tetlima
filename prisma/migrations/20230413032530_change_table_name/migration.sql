/*
  Warnings:

  - You are about to drop the `redirectDB` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "redirectDB";

-- CreateTable
CREATE TABLE "redirect" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "nome" STRING NOT NULL,
    "url" STRING NOT NULL,

    CONSTRAINT "redirect_pkey" PRIMARY KEY ("id")
);
