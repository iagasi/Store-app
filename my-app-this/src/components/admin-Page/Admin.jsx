import React, { useState } from "react"
import { Button, Container } from "react-bootstrap"
import AddBrand from "./modals/AddBrand"
import { AddDevice } from "./modals/AddDevice"
import { AddType } from "./modals/AddType"
import { $createBrand } from "../../http/brands"
import { ButtonAddBrand } from "./buttons/Button.Add.Brand"
import { ButtonAddType } from "./buttons/Button.Add.Type"
import { ButtonAddDevice } from "./buttons/Button.Add.Device"
import "bootstrap/dist/css/bootstrap.min.css"

const Admin=()=>{
    
    
    

    const[createType,setCreateType]=useState({})
   
return(
   <div >
       <ButtonAddType/>
         <ButtonAddBrand/>
         <ButtonAddDevice/>
       
   </div>
 
)
}



export default Admin