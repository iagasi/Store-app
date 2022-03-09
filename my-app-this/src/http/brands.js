import { $authHost, $host } from "."



export const getBrands=async()=>{
    const brands= await $host.get("/brand")


return brands.data

}


export const $createBrand=async(name)=>{
const createdBrand=await $authHost.post("/brand/create",{name})
return createdBrand.data
}

export const $deleteBrand=async(id)=>{
    await $authHost.delete(`/brand/${id}`)
}