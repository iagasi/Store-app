import { FastifyReply, FastifyRequest } from "fastify";

import { Brand } from "../entities/brand";



class BrandController {
    /**
     * 
     * @param req
     * @param reply 
     *
     * @returns new created brand
     */
    async create(req: FastifyRequest, reply: FastifyReply) {
        const { name } = req.body as { name: string }
        const newBrand = Brand.create({ name })
        await newBrand.save()
        reply.send(newBrand)
    }


    async getAll(_: FastifyRequest, reply: FastifyReply) {
        const allBrands = await Brand.find()
        reply.send(allBrands)
    }


    async getById(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string }



        const foundBrand = await Brand.findOne(id)
        if (!foundBrand) { reply.send("not found such brand") }
        reply.send(foundBrand)

    }


    async deleteBrand(req: FastifyRequest, reply: FastifyReply) {
        const { id } = req.params as { id: string }
        try {
            await Brand.findOneOrFail(id)
            await Brand.delete(id)
            reply.code(200).send("deleted")
        }
        catch (error) {
            reply.code(404).send("cannot delete")
        }
    }

}

export default new BrandController()