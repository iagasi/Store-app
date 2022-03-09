import { observer } from "mobx-react-lite"
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE, HOSTURL } from "../utils/constants"
import "./style.css"

export const DeviceItem=observer(({device})=>{
    const history=useNavigate()

return(
    <div classNamae="main__devices">
     <div className="main__devices" onClick={()=>history(DEVICE_ROUTE+"/"+ device.id)}>
     <img className="card__image"
                        src={HOSTURL+"/image/"+device.img}
                        alt=""/>
        
    <h4>{device.name}|
    price:{device.price}</h4> 
    </div>
    </div>
   
)

})