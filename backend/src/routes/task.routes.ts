import { UserSchema } from "./../schemas/user.schema";
import { FastifyInstance } from "fastify";
import { verifyAuth } from "../middlewares/verifyAuth";
import { TaskSchema } from "../schemas/task.schema";

export default async function taskRoutes(app: FastifyInstance) {
  app.get("/", { preHandler: verifyAuth }, async (req) => {
    const user = req.user as { id: string };
    return app.prisma.task.findMany({
      where: { userId: user.id },
    });
  });

  app.post("/", { preHandler: verifyAuth }, async (req, reply) => {
    const { title, completed } = TaskSchema.parse(req.body);
    const user = req.user as { id: string };

    const task = await app.prisma.task.create({
      data: { title, completed, userId: user.id },
    });

    app.broadcast("task:created", task);
    return reply.send(task);
  });

  app.put("/:id", { preHandler: verifyAuth }, async (req, reply) => {
    const { id } = req.params as { id: string };
    const { title, completed } = TaskSchema.parse(req.body);

    const task = await app.prisma.task.update({
      where: { id },
      data: { title, completed },
    });

    app.broadcast("task:updated", task);
    return reply.send(task);
  });

  app.delete("/:id", { preHandler: verifyAuth }, async (req, reply) => {
    const { id } = req.params as { id: string };
    await app.prisma.task.delete({ where: { id } });

    app.broadcast("task:deleted", { id });
    return reply.send({ message: "Task deleted" });
  });
}
