import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import TypeController from "../controllers/TypeController";



export const TypeRouter = async (fastify: FastifyInstance) => {

    fastify.post("/create", (req: FastifyRequest, reply: FastifyReply) => { TypeController.create(req,reply)})
     fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {TypeController.getAll(req,reply)})
     fastify.delete("/:id", (req: FastifyRequest, reply: FastifyReply) => {TypeController.delete(req,reply) })

}