/*
  Warnings:

  - You are about to drop the column `clientId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `clients` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_clientId_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "clientId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "clients";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "profilePicture" TEXT,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_email_key" ON "users"("login", "email");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
