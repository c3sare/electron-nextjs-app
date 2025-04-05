import { drizzle } from "drizzle-orm/pglite";
import * as schema from "./schema";

export const db = drizzle({ connection: { dataDir: "local.db" }, schema });
