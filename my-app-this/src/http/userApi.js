import jwtDecode from "jwt-decode"
import { $authHost, $host } from "."

export const registracion=async(email,password)=>{
    const response =await $host.post("/user/registracion", {email,password,role:"USER"})
    localStorage.setItem("Shop","Bearer "+response.data)
   const token=localStorage.getItem("Shop")
   return jwtDecode(response.data)
}

export const login=async(email,password)=>{
    const response =await $authHost.post("/user/login", {email:email, password})
    localStorage.setItem("Shop","Bearer "+response.data)
   return jwtDecode(response.data)
}

export const check=async()=>{
   
    const response =await $authHost.post("user/auth",)
    return response
}
export const $getAllUsers= async()=>{
    const users=await $authHost.get("/user")
    return users.data
}

export const $deleteUser=(id)=>{
    const deleted=$authHost.delete("/user/"+id)
    return deleted.data
}