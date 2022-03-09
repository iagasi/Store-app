import { $authHost, $host } from "."



export const getTypes=async()=>{
    const types= await $host.get("/type")
return types.data
}


export const $deleteType=async (id)=>{
const deleted=await $authHost.delete(`/type/${id}`)
return deleted.data
}

export const $createType=async(name)=>{
const type=await $authHost.post("/type/create",{name})
return type.data
}