-- CreateTable
CREATE TABLE "Journalist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Journalist_pkey" PRIMARY KEY ("id")
);
