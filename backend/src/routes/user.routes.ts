import { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { UserSchema } from "../schemas/user.schema";

export default async function authRoutes(app: FastifyInstance) {
  app.post("/signup", async (req, reply) => {
    const { email, password } = req.body as z.infer<typeof UserSchema>;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await app.prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return reply.send({ token: app.jwt.sign({ id: user.id }) });
  });

  app.post("/login", async (req, reply) => {
    const { email, password } = req.body as z.infer<typeof UserSchema>;
    const user = await app.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ error: "Invalid credentials" });
    }

    return reply.send({ token: app.jwt.sign({ id: user.id }) });
  });
}
