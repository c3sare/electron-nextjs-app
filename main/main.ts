import { db } from "../db";
import { ipcMain } from "electron";
import * as s from "@/db/schema";

ipcMain.handle("get-users", async () => {
  return await db.query.users.findMany({});
});

type User = {
  name: string;
  email: string;
  age: number;
};

ipcMain.handle("add-user", async (_, { name, email, age }: User) => {
  return await db
    .insert(s.users)
    .values({
      name,
      email,
      age,
    })
    .returning();
});
