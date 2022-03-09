import { FastifyInstance } from "fastify"
import jwt from "jsonwebtoken"


export const allowedAndpoints = (fastify: FastifyInstance) => {
        fastify.addHook('onRequest', async (req:any, reply) => {
                const { body, url, query } = req as { body: object, url: string, query: object }
            
            


              //  if (url !== "/user/registracion"&&url!=="/user/login"&&url!=="/types") {
                    const token = req.headers.authorization
                  console.log(token);
                  
                   
                   
                        let verified
                        if (!token) {
                                //reply.code(401).send("unauthorized")
                                console.log("to token present unauthorized");
                                
                                return false
                        }

                        if (token) {
                            const PlainToken=token.split(" ")[1]
                            try{
                                 verified= jwt.verify(PlainToken,"9")
                            }
                             catch(e){
                                verified=false
                                console.log("auth hook token not verified");
                                
                             }
                              
                                }

                                if (!verified) {
                                  return 
                                //  reply.code(401).send("Token not valid")
                                }
                                req.logged = true
                             
                                



                     //   }





                
          

        })
}