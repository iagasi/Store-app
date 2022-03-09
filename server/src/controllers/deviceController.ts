import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { createWriteStream } from "fs";
import path from "path/posix";
import { allowedAndpoints } from "../middleware/auth.hook";
import { Any } from "typeorm";
import { Device } from "../entities/device";
import imageController from "./imageController";
import { pathToFileURL } from "url";
  const pathOfPhoto=(photoName:string):string=>{
           return path.resolve(__dirname, "..", "public",photoName)
        }
class DeviceController {

    async create(req: FastifyRequest, reply: FastifyReply) {



        

        const dirtiFile: any = await req.body
        const img = await dirtiFile.img._buf
        
        


        const photoName = Math.random().toString() + ".jpg"
      
        const writer = createWriteStream(pathOfPhoto(photoName))
        writer.write(img)

        const { price, name, typeId, brandId }: any = req.body
      
        

        const device = Device.create({ name: name.value, price: price.value, img: photoName, typeId: typeId.value, brandId: brandId.value })
        await device.save()
        reply.send(device)


        }
     
    


      async getAll(req: FastifyRequest, reply: FastifyReply) {
      
       const {brandId,typeId}=req.params as {brandId:string,typeId:string}
       let devices
  if(!brandId && !typeId){devices=await Device.find()}
  if(brandId && !typeId){devices=await Device.find({brandId:brandId})}
  if(!brandId && typeId){devices=await Device.find(({typeId:typeId}))}



  reply.send(devices)

  
    }


    async getById(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string }
        const found = await Device.findOne(id,{relations:["device_info"]})
        if (!found) { return reply.code(404).send("the device not found") }
        reply.send(found)
    }

    async getImage(req: FastifyRequest, reply: FastifyReply) {
        const { name } = req.params as { name: string }
        reply.sendFile(name)
    }




    async delete(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as {id: string }

       
       try{
           const device=await Device.findOneOrFail(id)
            imageController.deleteImage(device.img)
           await Device.delete(id)
           reply.send()
       }

       catch(error){
reply.code(404).send("Not found such device")
       }
    }
}

export default new DeviceController()