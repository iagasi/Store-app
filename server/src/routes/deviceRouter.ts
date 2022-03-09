import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import deviceController from "../controllers/deviceController";



     
  
    
  




export const deviceRouter= async (fastify:FastifyInstance|any) => {

    fastify.post("/", (req: FastifyRequest, reply: FastifyReply) => {deviceController.create(req,reply) })
    fastify.get("/", (req: FastifyRequest, reply: FastifyReply) => {deviceController.getAll(req,reply) })
    fastify.get("/:id", (req: FastifyRequest, reply: FastifyReply) => { deviceController.getById(req,reply)})
//fastify.get("/",(req: FastifyRequest, reply: FastifyReply) => { deviceController.getAll(req,reply)})
    fastify.get("/image/:name", (req: FastifyRequest, reply: FastifyReply) => { deviceController.getImage(req,reply)})
    fastify.delete("/:id", (req: FastifyRequest, reply: FastifyReply) => { deviceController.delete(req,reply)})
//{preValidation:[fastify.jwtAuth]},


}