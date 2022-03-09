import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../entities/user";
import{Basket} from "../entities/basket"
import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import ApiError from "../errors/ApiError";
import { REPL_MODE_SLOPPY } from "repl";


class UserController {
  generateJwt(user: any) {
    const jwtToken = jwt.sign({ id: user.id, email: user.email, role: user.email }, "9", { expiresIn: "24h" })
    return jwtToken
  }

  async registracion(req: FastifyRequest, reply: FastifyReply) {
    const { email, password,  } = req.body as { email: string, password: string, role: string }
    if (!email || !password) { reply.send("noemailorpassword") }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) { reply.code(400).send("this user already exist") }
    else {
      const hashPassword = await bcrypt.hash(password, 10)
      const basket= await Basket.create().save()
      const user = await User.create({ email: email,  password: hashPassword,basket:basket }).save()

      
      const jwtToken = this.generateJwt(user)
      return reply.send(jwtToken)
    }
  }




  async login(req: FastifyRequest, reply: FastifyReply) {

    const { email, password } = req.body as { email: string, password: string }
    const user = await User.findOne({ email: email })
   

    if (!user) {
      return reply.send("user with this email or password not found")
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return reply.send("Password not walid")
    }
    const jwtToken = this.generateJwt(user)
    
   return reply.send(jwtToken)
  }


  async check(req: FastifyRequest, reply: FastifyReply) {
   
  // const {id}=req.body as{id:string}
  //  console.log(id)
  //  const user=await User.findOne(id)
reply.code(200).send()
  }


async getAll(req: FastifyRequest, reply: FastifyReply){
  const users= await User.find({relations:["basket"]})
 /// reply.send(users.map((user=>{ return {id:user.id,email:user.email,role:user.role}})))
 reply.send(users)
}





  async delete(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {id: string }
    console.log("eeeeeeeeeeeeeeeeeeeee");
    
   try{
       const user=await User.findOneOrFail(id)
       await User.delete(id)
       reply.send()
   }

   catch(error){
reply.code(404).send("Not found such user")
   }
}
}

export default new UserController()