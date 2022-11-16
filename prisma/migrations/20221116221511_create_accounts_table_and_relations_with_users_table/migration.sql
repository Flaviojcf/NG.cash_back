-- CreateTable
CREATE TABLE "Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balace" REAL NOT NULL DEFAULT 0.00,
    "users_id" TEXT,
    CONSTRAINT "Accounts_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "Users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
