import { $host,$authHost } from "."


export const $createDevice=async (obj)=>{
    const device=await $authHost.post("/device",obj,{
        headers: {
          'content-type': 'multipart/form-data',
        },
      })

}
export const getDevices=async()=>{
    const devices= await $host.get("/device")


return devices.data

}

export const $deleteDevice=async(id)=>{
  const deleted=await $authHost.delete("/device/"+id)
}




