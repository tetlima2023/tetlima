/*
  Warnings:

  - You are about to alter the column `id` on the `redirect` table. The data in that column will be cast from `Int` to `BigInt`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_redirect" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "nome" STRING NOT NULL,
    "url" STRING NOT NULL,

    CONSTRAINT "redirect_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_redirect" ("id","nome","url") SELECT "id","nome","url" FROM "redirect";
DROP TABLE "redirect" CASCADE;
ALTER TABLE "_prisma_new_redirect" RENAME TO "redirect";
