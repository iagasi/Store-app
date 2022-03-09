
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { Context } from "../../..";
import { $createType, $deleteType } from "../../../http/types";

export const AddType=observer(({state,close})=> {
  const {device}=useContext(Context)
  const [type,setType]=useState()
   const deleteTypesFromList=(id)=>{
     $deleteType(id)
device.setTypes(device.Types.filter(type=>type.id!==id))
   }
   const addNewType=async()=>{
     try{
 const newType=await $createType(type)
   device.setTypes([...device.Types,{id:newType.id,name:newType.name}])
     }
     catch(error){
alert("This type alredy  existts in Database")
     }
    
   
  
   }
 
   return (
     <>
       <Modal show={state} onHide={close} animation={false}>
         <Modal.Header closeButton>
           <Modal.Title>Add new Type</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <InputGroup  style={{display:"grid",gridGap:"5px"}}>
             <input onChange={(e)=>setType(e.target.value)} value={type}placeholder="Add Name of type"></input>
            
             </InputGroup>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={close}>
             Close
           </Button>
           <Button variant="primary" onClick={addNewType}>
             Add Type
           </Button>
         </Modal.Footer>
       
<div style={{width:"400px",margin:"auto"}}>
 {device.Types.map(type=> <Form style={{display:"grid"}}>
       <Row>

          {type.name}
       </Row>
      <Row>
        <Button  onClick={()=>deleteTypesFromList(type.id)} style={{background:"purple"}}> Delete</Button>
      </Row>
       
       
       </Form>)}
</div>
       
    
 
         
       </Modal>
     </>
   );
 }
)
