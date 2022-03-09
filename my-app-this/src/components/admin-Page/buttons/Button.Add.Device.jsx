import { Button } from "react-bootstrap"
import { useState } from "react"
import { AddDevice } from "../modals/AddDevice"


export const ButtonAddDevice=()=>{
    const [device,SetDevice]=useState(false)
    
    return (
        <div>
<Button  onClick={()=>SetDevice(true)}className="mt-5">Add device</Button>

  
     
     
<AddDevice state={device} close={()=>SetDevice(false)}/>

        </div>
    )
}