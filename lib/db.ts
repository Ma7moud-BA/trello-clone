import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// because there is a hot reload feature in NextJs a new PrismaClient will be generated every reload and that will create a warning so in this code, we generate a global prisma client to use in development
