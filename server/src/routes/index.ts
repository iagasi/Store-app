import fastify, { FastifyInstance } from "fastify";
import { brandRouter } from "./brandRouter";
import { deviceRouter } from "./deviceRouter";
import { imageRouter } from "./imageRouter";
import { TypeRouter } from "./typeRouter";
import { userRouter } from "./userRouter";

export const registerRoutes = (fastify: FastifyInstance) => {
      fastify.register(userRouter, { prefix: "/user" })
     fastify.register(deviceRouter, { prefix: "/device" })

      fastify.register(TypeRouter, { prefix: "/type" })
      fastify.register(brandRouter, { prefix: "/brand" })
       fastify.register(imageRouter,{prefix:"/image"})


       
}

