import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Button, ListGroup } from "react-bootstrap"
import { Context } from "../../.."
import { $deleteUser, $getAllUsers } from "../../../http/userApi"
import { DeleteUser } from "../modals/DeleteUser"

export const GetAllUsers=observer(()=>{
const {user}=useContext(Context)
const [show, setShow] = useState(false);

const getAllUsers=async()=>{
    const getUsersFromDb=await $getAllUsers()
    user.setAllUsers(getUsersFromDb)
    
 }   
   


useEffect(async()=>{
getAllUsers()
 
 },[])


    return(

        <div>
            <h1 style={{paddingTop:"90px"}}>All registered Users in System</h1>
        
<ListGroup style={{marginTop:"5rem"}}>

{user.allUsers.map((user)=>
<ListGroup.Item key={user.id} style={{display:"flex", justifyContent:"space-between"}}>
    { user.email}
   
 <DeleteUser id={user.id} />
</ListGroup.Item>

)}
</ListGroup>

 
        </div>
    )
})