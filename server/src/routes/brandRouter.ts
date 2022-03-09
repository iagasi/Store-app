import  { FastifyInstance, FastifyReply, FastifyRequest,} from "fastify";
import brandController from "../controllers/brandController";

export const brandRouter=async(fastify:FastifyInstance)=>{

    fastify.post("/create",(req:FastifyRequest,reply:FastifyReply)=>{brandController.create(req,reply)})
    fastify.get("/",(req:FastifyRequest,reply:FastifyReply)=>{brandController.getAll(req,reply)})
    fastify.get("/:id",(req:FastifyRequest,reply:FastifyReply)=>{brandController.getById(req,reply)})
    fastify.delete("/:id",(req:FastifyRequest,reply:FastifyReply)=>{brandController.deleteBrand(req,reply)})


}



