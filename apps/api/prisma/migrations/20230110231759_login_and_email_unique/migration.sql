/*
  Warnings:

  - A unique constraint covering the columns `[login,email]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "clients_email_key";

-- DropIndex
DROP INDEX "clients_login_key";

-- CreateIndex
CREATE UNIQUE INDEX "clients_login_email_key" ON "clients"("login", "email");
