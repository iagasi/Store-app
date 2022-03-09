import  { FastifyInstance, FastifyReply, FastifyRequest,} from "fastify";
import ImageContloller from "../controllers/imageController"


export const imageRouter=async (fastify:FastifyInstance)=>{
fastify.get("/:name",(req: FastifyRequest, reply: FastifyReply)=>{ImageContloller.getImage(req,reply)})
}