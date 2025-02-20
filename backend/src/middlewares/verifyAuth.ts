import { FastifyRequest, FastifyReply } from "fastify";

export async function verifyAuth(req: FastifyRequest, reply: FastifyReply) {
  try {
    const decoded = await req.jwtVerify<{ id: string }>(); // Explicitly define the expected type

    if (!decoded || typeof decoded !== "object" || !decoded.id) {
      return reply.status(401).send({ error: "Invalid token format" });
    }

    req.user = decoded as { id: string }; // Ensures req.user is properly set
  } catch (err) {
    reply.status(401).send({ error: "Unauthorized" });
  }
}
