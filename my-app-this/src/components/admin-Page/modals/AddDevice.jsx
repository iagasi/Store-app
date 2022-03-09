
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Button, InputGroup, Modal, Form, Dropdown, Row, Col, Container, ListGroup } from "react-bootstrap";
import { $createDevice, $deleteDevice } from "../../../http/devices";
import { Context } from "../../../index";
import { GetAllUsers } from "../Components/Get.All.Users";

export const AddDevice = observer(({ state, close }) => {
    const { device } = useContext(Context)
    const { user } = useContext(Context)
    const [file, setFile] = useState()
    const [choseType, setChoseType] = useState({ name: "Chose Type", id: null })
    const [choseBrand, setChoseBrand] = useState({ name: "Chose Brand", id: null })
    const [choseDeviceName, setChoseDeviceName] = useState()
    const [chosePrice, setChosePrice] = useState()


    const removeDevice = (id) => {
        device.setDevices(device.Devices.filter(device => device.id !== id))
        $deleteDevice(id)
    }
    const addDeviceInDb = async () => {
        console.log(choseType.id);
        console.log(choseBrand.id);
        if (file, choseDeviceName, chosePrice, choseType.id, choseBrand.id) {

            const form = new FormData()
            form.append("img", file)
            form.append("name", choseDeviceName)
            form.append("price", chosePrice)
            form.append("typeId", choseType.id)
            form.append("brandId", choseBrand.id)
            await $createDevice(form)
        }
        else {
            alert("All Properties Required")
        }
    }
    //{img:file, price: chosePrice, name: choseDeviceName, typeId: choseType.id, brandId: choseBrand.id }

    /////////AddProperty  and Delete Property

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", id: Date.now() }])
    }
    const deleteInfo = (id) => {

        setInfo(info.filter((info) => info.id != id))
    }
    /////////
    return (
        <>
            <Modal show={state} onHide={close} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ display: "grid", gridGap: "3px" }}>
                        <Dropdown>
                            <Dropdown.Toggle >{choseType.name}</Dropdown.Toggle>

                            <Dropdown.Menu >
                                {device.Types.map((type) =>
                                    <Dropdown.Item onClick={() => setChoseType({ name: type.name, id: type.id })} key={type.id} >{type.name} on </Dropdown.Item>
                                )}

                                <Dropdown.Item></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle>{choseBrand.name}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.Brands.map((brand) =>
                                    <Dropdown.Item onClick={() => setChoseBrand({ name: brand.name, id: brand.id })} key={brand.id} >{brand.name}</Dropdown.Item>
                                )}

                                <Dropdown.Item></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control onChange={(e) => setChoseDeviceName(e.target.value)} value={choseDeviceName} placeholder="Enter name of Device" />

                        <Form.Control onChange={(e) => setChosePrice(e.target.value)} value={chosePrice} type="number" placeholder="Price" />
                        <Form.Control onChange={(e) => setFile(e.target.files[0])} type="file" placeholder="UPLOAD FILE" />


                    </Form>
                </Modal.Body>
                <Button onClick={addInfo}>Add Decsription not working Under Construction</Button>

                {info.map((info) =>
                    <Row key={info.id}>
                        <Col md={4}>
                            <Form.Control property="enter name" />
                        </Col>
                        <Col md={4}>
                            <Form.Control property="enter description" />
                        </Col>
                        <Button style={{ background: "purple" }} onClick={() => deleteInfo(info.id)}>Delete property</Button>
                    </Row>
                )}

                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addDeviceInDb}>
                        Save Device
                    </Button>

                </Modal.Footer>
                {device.Devices.map((device) =>
                    <div style={{ display: "flex", justifyContent: "space-between" ,width:"450px",marginTop:"20px"}} >
                        <Row>
                            <h5>device:  {device.name}---- </h5>
                            <br />
                            <h5>   price :  {device.price}</h5>
                        </Row>
                        <Row>
                            <Button onClick={() => removeDevice(device.id)} style={{ background: "purple" }}>Delete</Button>
                        </Row>
                    </div>


                )}


                )

            </Modal>



            <GetAllUsers />



        </>
    );
}
)
