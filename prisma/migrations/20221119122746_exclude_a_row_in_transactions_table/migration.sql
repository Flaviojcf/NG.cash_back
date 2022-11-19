/*
  Warnings:

  - You are about to drop the column `accountsId` on the `Transactions` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "debitedAccountId" TEXT NOT NULL,
    "creditedAccountId" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Transactions_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transactions_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "Accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transactions" ("createdAt", "creditedAccountId", "debitedAccountId", "id", "value") SELECT "createdAt", "creditedAccountId", "debitedAccountId", "id", "value" FROM "Transactions";
DROP TABLE "Transactions";
ALTER TABLE "new_Transactions" RENAME TO "Transactions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
