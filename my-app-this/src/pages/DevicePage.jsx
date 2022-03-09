import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { Context } from ".."
import star from "../assets/st.png"
import { HOSTURL } from "../utils/constants"


const description = [{ id: "1", titile: "Specifications", description: "12 GB rom 5 INCH" },
{ id: "1", titile: "Specifications", description: "12 GB rom 5 INCH" },
{ id: "1", titile: "Specifications", description: "12 GB rom 5 INCH" },

]
const DevicePage = observer(() => {
    const{basket}=useContext(Context)
    const { device } = useContext(Context)
    const {user}=useContext(Context)
    let location = useLocation();
    let deviceId = location.pathname.split("/")[2]
    let selectedDevice = device.Devices.filter((device) => device.id == deviceId)


//functions
const addToBasket=(device)=>{
   basket.setItem(device)

  
}

//functions


    return (

        <div>
            {selectedDevice.map((device) =>
                <div key={device.id}  className="mt-3">
                    <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Col md={4}>
                            <Image className="block-example border border-dark" width={250} height={300} src={HOSTURL+"/image/"+device.img}>
                            </Image>
                        </Col>
                        

                        <Col md={3} >
                            <h4>{device.name} </h4>
                            <div style={{ background: `url(${star}) no-repeat center center`, width: 150, height: 150, backgroundSize: "cover" }}>
                                start
                            </div>
                        </Col>

                        <Col style={{ border: "5px solid lightgray" }} md={4} >

                            <h3>{device.price}</h3>
                            <Button  onClick={()=>addToBasket(device)}>
                                Add To Basket
                            </Button>
                        </Col>

                    </Row >
                    <h4>   Description</h4>
                    <Row style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>




                        {description.map((info, index) =>
                            <Row key={info.id} style={{ background: index % 2 === 0 ? "lightgray" : "transparent" }}>
                                {info.titile}:{info.description}

                            </Row>)}
                    </Row>
                </div>




            )


            }

        </div>)
}

)

export default DevicePage