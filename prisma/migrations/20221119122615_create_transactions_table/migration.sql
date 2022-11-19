-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "debitedAccountId" TEXT NOT NULL,
    "creditedAccountId" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountsId" TEXT,
    CONSTRAINT "Transactions_creditedAccountId_fkey" FOREIGN KEY ("creditedAccountId") REFERENCES "Accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transactions_debitedAccountId_fkey" FOREIGN KEY ("debitedAccountId") REFERENCES "Accounts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" REAL NOT NULL
);
INSERT INTO "new_Accounts" ("balance", "id") SELECT "balance", "id" FROM "Accounts";
DROP TABLE "Accounts";
ALTER TABLE "new_Accounts" RENAME TO "Accounts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
