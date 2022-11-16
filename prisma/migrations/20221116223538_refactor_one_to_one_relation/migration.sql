/*
  Warnings:

  - Made the column `users_id` on table `Accounts` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" REAL NOT NULL DEFAULT 0.00,
    "users_id" TEXT NOT NULL,
    CONSTRAINT "Accounts_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "Users" ("username") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Accounts" ("balance", "id", "users_id") SELECT "balance", "id", "users_id" FROM "Accounts";
DROP TABLE "Accounts";
ALTER TABLE "new_Accounts" RENAME TO "Accounts";
CREATE UNIQUE INDEX "Accounts_users_id_key" ON "Accounts"("users_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
