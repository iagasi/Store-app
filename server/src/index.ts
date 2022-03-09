import Fastify from "fastify"
import dotenv from 'dotenv'

import { createConnection } from "typeorm"
import { User } from "./entities/user";
import { Basket } from "./entities/basket";


import staticFiles from "fastify-static"
import { registerRoutes } from "./routes";
import { CustomErrorHandler } from "./middleware/ErrorHandling";
import path from "path/posix";
import { allowedAndpoints } from "./middleware/auth.hook";
import bcrypt from "bcrypt"



dotenv.config()
const Port = process.env.PORT || 5001

export const fastify = Fastify({ logger: true });
fastify.register(require("./middleware/newAuthMiddlevare"))
fastify.register(require("fastify-cors"))
//allowedAndpoints(fastify)
fastify.register(require('fastify-multipart'),{ attachFieldsToBody: true })
CustomErrorHandler(fastify)
registerRoutes(fastify)

fastify.register(require("fastify-jwt"),{secret:"9"})
fastify.register(staticFiles, {
  root: path.join(__dirname, 'public'),
})

const start = async () => {
  try {


    const connection = await createConnection()


    await connection.runMigrations().then(() => { console.log("Connected To db"); })

    fastify.listen(Port,  "0.0.0.0",async (error, adress) => {


      if (error) {
        console.log("Error with database connection ");
        console.log(error);
      }
      else { console.log("Server started on adress " + adress)
    }
      /////////////////////creating admin and user
      const user= await User.findOne({email:"admin"})
     
      
      if(!user){
      const basket= await Basket.create().save()
      const hashPassword = await bcrypt.hash("admin", 10)
      await User.create({ email: "admin",  password: hashPassword,basket:basket,role:"ADMIN" }).save()
      const userPassword = await bcrypt.hash("user", 10)
      const userbasket= await Basket.create().save()

      await User.create({ email: "user",  password: userPassword,basket:userbasket }).save()
      }
     
      /////////////////////////

    }
    )

  }
  catch (error) {
    console.log("IN CATCH BLOCK");
   


  }
}


start()