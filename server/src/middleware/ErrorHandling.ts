import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { REPL_MODE_SLOPPY } from "repl"
import ApiError from "../errors/ApiError"



export  function CustomErrorHandler(fastify:FastifyInstance){

    fastify.setErrorHandler( (error, request, reply)=> {

     if(error instanceof ApiError){
         
        reply.code(error.statusCode||500).send(error.message)
    }

     reply.code(500).send(error)
      return
   

      })
  

  process.on('uncaughtException',async (err:ApiError, origin) => { 
        
     
      
   console.log(err.message,err.statusCode);
   return
  })

}




