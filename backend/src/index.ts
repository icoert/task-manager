import Fastify from "fastify";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({ logger: true });

const io = new Server(fastify.server);

io.on("connection", (socket) => {
  console.log("Client connected", socket.id);
});

fastify.get("/", async () => {
  return { message: "Fastify + TypeScript server is running!" };
});

const start = async () => {
  try {
    await fastify.listen({
      port: Number(process.env.PORT) || 3000,
      host: "0.0.0.0",
    });
    console.log("🚀 Server ready on port 3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
