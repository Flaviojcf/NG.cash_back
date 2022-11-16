/*
  Warnings:

  - You are about to drop the column `balace` on the `Accounts` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" REAL NOT NULL DEFAULT 0.00,
    "users_id" TEXT,
    CONSTRAINT "Accounts_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Accounts" ("id", "users_id") SELECT "id", "users_id" FROM "Accounts";
DROP TABLE "Accounts";
ALTER TABLE "new_Accounts" RENAME TO "Accounts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
