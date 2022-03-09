import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Context } from "../../.."
import { $createBrand, $deleteBrand } from "../../../http/brands"
import AddBrand from "../modals/AddBrand"

export const ButtonAddBrand=observer(()=>{
   
    const{device}=useContext(Context)

    const [createBrand,setCreateBrand]=useState()
     const [brand,SetBrand]=useState(false)

    const $createNewBrand=async()=>{
       const response= await $createBrand(createBrand)
      
      device.setBrands([...device.Brands,{id:response.id,name:response.name}])
 }
 const $deleteExistingBrand= async(id)=>{
const deleteBrand = await $deleteBrand(id)
device.setBrands(device.Brands.filter(brand=>brand.id!==id))
console.log(device.Brands);


 }

    return(
         <div>

 <Button onClick={()=>SetBrand(true)} className="mt-5">Add brand</Button>

 <AddBrand state={brand} close={()=>SetBrand(false)} setCreateBrand={setCreateBrand} createBrand={createBrand}  $createNewBrand={ $createNewBrand} device={device} $deleteExistingBrand={$deleteExistingBrand}/> 

       </div>
   )
})