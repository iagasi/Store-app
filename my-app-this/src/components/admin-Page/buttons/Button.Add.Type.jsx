import { useState } from "react"
import { Button } from "react-bootstrap"
import { AddType } from "../modals/AddType"

export const ButtonAddType=()=>{
    const [type,SetType]=useState(false)
   

return(
    <div>

<Button onClick={()=>SetType(true)} className="mt-5">Add type</Button>
<AddType state={type} close={()=>SetType(false)}/>

    </div>
)
}