import { FastifyReply ,FastifyRequest} from "fastify"
import fastifyPlugin from "fastify-plugin"





export default  fastifyPlugin(async(fastify)=>{

    fastify.decorate("jwtAuth",async(req:any,res:FastifyReply)=>{

try{


    await req.jwtVerify()

}
catch(e){
res.code(401).send(e)
}
    })
})


// try{
//     const token=req.headers.authorization
//    const PlainToken=token?.split(" ")[1]
// const verified= jwt.verify(PlainToken||"","9") 
// }
// catch(e){
// res.send("new auth middleware errer")
// }