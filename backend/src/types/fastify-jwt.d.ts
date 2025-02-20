import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: string };
    user: {
      id: string;
    }; // user type is return type of `request.user` object
  }
}
