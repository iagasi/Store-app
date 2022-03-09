
import { observer } from "mobx-react-lite";
import { Button, Card, InputGroup, Modal } from "react-bootstrap";

const AddBrand=observer(({state,close,createBrand,setCreateBrand, $createNewBrand,device,$deleteExistingBrand}) =>{
   
    
  
    return (
      <>
        <Modal show={state} onHide={close} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Brand</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <InputGroup  style={{display:"grid",gridGap:"5px"}}>
              <input placeholder="Enter name of brand" onChange={(e)=>setCreateBrand(e.target.value)} value={createBrand}></input>
           
              </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={ $createNewBrand}>
              Save Changes
            </Button>
         
          </Modal.Footer>
             {device.Brands.map((device)=><Card key={device.id}>{device.name} <Button onClick={()=>$deleteExistingBrand(device.id)} style={{background:"red"}}>Delete</Button></Card>)}
        </Modal>
      </>
    );
  })
  
 export default AddBrand