import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap"
import { Context } from "../../..";
import { $deleteUser } from "../../../http/userApi";

export const DeleteUser=observer(({id})=>{
    
   const {user}=useContext(Context)
    const [show, setShow] = useState(false);
    const deleteSingleUser=async()=>{
        const deleted=await $deleteUser(id)
      user.setAllUsers(user.allUsers.filter((user)=>user.id!==id))
        console.log(id);


      
        }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button style={{background:"red"}} variant="primary" onClick={handleShow}>
         DLETE USER
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{color:"red"}}>User Will Be Deleted</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color:"red"}}>This user will be deleted from Database WITHOUT  possibility of recover</Modal.Body>
            <Modal.Footer>
              <Button style={{background:"blue"}} variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button  style={{background:"red"}} variant="primary" onClick={deleteSingleUser}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
})