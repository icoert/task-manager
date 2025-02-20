import Fastify from "fastify";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import dotenv from "dotenv";
import fastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";
import taskRoutes from "./routes/task.routes";
import authRoutes from "./routes/user.routes";
import websocket from "@fastify/websocket";

dotenv.config();

const app = Fastify({ logger: true });

const cors = require("@fastify/cors");

// Enable CORS & Security
app.register(cors, { origin: "*" });
app.register(helmet);

// Register JWT Authentication
app.register(jwt, { secret: process.env.JWT_SECRET! });

// Register WebSocket Plugin
app.register(websocket);

const clients: Set<any> = new Set();

// WebSocket Route
app.get("/ws", { websocket: true }, (connection) => {
  clients.add(connection.socket);
  console.log(`🔌 Client connected (Total: ${clients.size})`);

  connection.socket.on("close", () => {
    clients.delete(connection.socket);
    console.log(`❌ Client disconnected (Total: ${clients.size})`);
  });
});

// Prisma Database Client
const prisma = new PrismaClient();

// Register Prisma Plugin
app.register(
  fastifyPlugin(async (fastify) => {
    fastify.decorate("prisma", prisma);
    fastify.decorate("broadcast", (event: string, data: any) => {
      clients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(JSON.stringify({ event, data }));
        }
      });
    });
  })
);

app.register(authRoutes, { prefix: "/api/auth" });
app.register(taskRoutes, { prefix: "/api/tasks" });

export { app };
