-- CreateTable
CREATE TABLE "New" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "writer" TEXT NOT NULL,

    CONSTRAINT "New_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "New_title_key" ON "New"("title");
