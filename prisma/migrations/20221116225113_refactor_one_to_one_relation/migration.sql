/*
  Warnings:

  - You are about to drop the column `users_id` on the `Accounts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" REAL NOT NULL DEFAULT 0.00
);
INSERT INTO "new_Accounts" ("balance", "id") SELECT "balance", "id" FROM "Accounts";
DROP TABLE "Accounts";
ALTER TABLE "new_Accounts" RENAME TO "Accounts";
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accounts_id" TEXT,
    CONSTRAINT "Users_accounts_id_fkey" FOREIGN KEY ("accounts_id") REFERENCES "Accounts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Users" ("id", "password", "username") SELECT "id", "password", "username" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
CREATE UNIQUE INDEX "Users_accounts_id_key" ON "Users"("accounts_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
