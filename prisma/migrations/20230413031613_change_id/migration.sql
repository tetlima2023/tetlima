-- CreateTable
CREATE TABLE "redirectDB" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "nome" STRING NOT NULL,
    "url" STRING NOT NULL,

    CONSTRAINT "redirectDB_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "redirectDB_id_key" ON "redirectDB"("id");
