
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
// import  UserController  from "src/controllers/userController";
// UserController.login()
import UserController from "../controllers/userController";


export const userRouter = async (fastify: FastifyInstance|any) => {

    fastify.post("/registracion", (req: FastifyRequest, reply: FastifyReply) => {UserController.registracion(req,reply),console.log(req.body);
    })
    fastify.post("/login", (req: FastifyRequest, reply: FastifyReply) => {UserController.login(req,reply)})
    fastify.post("/auth",{preValidation:[fastify.jwtAuth]}, (req: FastifyRequest, reply: FastifyReply) => {UserController.check(req,reply) })
    fastify.delete("/:id",{preValidation:[fastify.jwtAuth]}, (req: FastifyRequest, reply: FastifyReply) => {UserController.delete(req,reply) })
    fastify.get("/",{preValidation:[fastify.jwtAuth]}, (req: FastifyRequest, reply: FastifyReply) => {UserController.getAll(req,reply) })

}