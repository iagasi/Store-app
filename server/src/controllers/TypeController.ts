import { FastifyReply, FastifyRequest } from "fastify";
import { type } from "os";
import { Type } from "../entities/type";

class TypeController {

    async create(req: FastifyRequest, reply: FastifyReply) {
        const { name } = req.body as { name: string }
        if (!name) {
            return reply.send("name not provided")
        }

        const checkExistence=await Type.findOne({name:name})
        if(checkExistence){
            return reply.code(400).send("This type already exists in database")
        }
        
        const type = Type.create({ name })
        await type.save()
        reply.send(type)
    }


    async getAll(req: FastifyRequest, reply: FastifyReply) {
        const types= await Type.find()
         reply.send(types)
      
    }
    async delete (req: FastifyRequest, reply: FastifyReply) {
        const {id}=req.params as{id:string}
        try{
            const types= await Type.findOneOrFail(id)
            await Type.delete(id)
         reply.send(types)
        }
        
      catch(error){
          reply.code(404).send("Not found type")
      }
    }



}

export default new TypeController()