import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
    broadcast: (event: string, data: any) => void; // New WebSocket Broadcast Method
  }
}
