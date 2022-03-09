import path from "path/posix";
import { FastifyReply, FastifyRequest } from "fastify";
import * as fs from "fs";



class ImageController{
   async getImage(req: FastifyRequest, reply: FastifyReply){
        const {name}=req.params as {name:string}
        console.log(req.params);

          const imagePath= path.resolve(__dirname, "..", "public",name)
       
    
        reply.send(fs.createReadStream(imagePath))
    }

    async deleteImage(id:string){
      const patho=path.resolve(__dirname, "..", "public",id)
 fs.unlink(patho,(err)=>{if(err){console.log(err)} else{console.log("sucess deleteion");
 }
 })
    }
}













export default new ImageController()