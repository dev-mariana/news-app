-- CreateTable
CREATE TABLE "journalist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "journalist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "new" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "journalist_id" TEXT NOT NULL,
    "kind_new_id" TEXT NOT NULL,

    CONSTRAINT "new_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kind_new" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "journalist_id" TEXT NOT NULL,

    CONSTRAINT "kind_new_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "journalist_email_key" ON "journalist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "new_content_key" ON "new"("content");

-- AddForeignKey
ALTER TABLE "new" ADD CONSTRAINT "new_journalist_id_fkey" FOREIGN KEY ("journalist_id") REFERENCES "journalist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "new" ADD CONSTRAINT "new_kind_new_id_fkey" FOREIGN KEY ("kind_new_id") REFERENCES "kind_new"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kind_new" ADD CONSTRAINT "kind_new_journalist_id_fkey" FOREIGN KEY ("journalist_id") REFERENCES "journalist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
