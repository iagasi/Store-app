import { set } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useRef, useState } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import { DeviceItem } from "./DeviceItem";
import "./style.css"

export const DeviceList = observer(() => {
    const { device, type } = useContext(Context)

    let typeId = device.selectedType.id
    let brandId = device.selectedBrand.id


   

    useEffect(() => {
        if (device.selectedType.id == 0) {
            device.setFilteredDevices(device.Devices)
        }
        else {
            device.setFilteredDevices(device.Devices.filter(device => device.typeId == typeId))
        }
        if (device.selectedBrand.id !== 0) {
            device.setFilteredDevices(device.Devices.filter(device => device.brandId == brandId))

        }

        if (device.selectedBrand.id !== 0 && device.selectedType.id !== 0) {
            device.setFilteredDevices(device.Devices.filter(device => device.typeId == typeId && device.brandId == brandId))
            return
        }

    }, [device.selectedType, device.selectedBrand, device.selectedType])

    /////////////////////////// Images Slider
    const [move, setMove] = useState(0)

    const y = useRef(0)
    const size = useRef(null)

    if (size.current) {

    }
    //
    function reset() {
        if (y.current) {
            clearTimeout(y.current)
            y.current = 0

        }
    }

    useEffect(() => {
        reset()
        y.current = setTimeout(() => moveImageHandler(true), 3500)
    }, [move])

    if (move >= 3300) { setMove(0); }
    const moveImageHandler = (boll) => {

        if (boll) {
            setMove((prev) => prev + 1100)
            // setCounter(prev=>prev+1)
            // console.log(move,counter);
        }
        if (!boll) {
            //    console.log(move,counter);
            setMove((prev) => prev - 1100)
        }
    }
    /////////////////////////////////////////////////
    return (
        <div>


            <div className="main__image">

                <div style={{ transform: `translateX(-${move}px)` }} class="main__image-container">



                    <img ref={size} src="https://wallpaperaccess.com/full/124578.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />

                    <img src="https://www.apple.com/v/iphone-13/e/images/meta/iphone-13_overview__fpjuzw2ncqmy_og.png" alt="" />




                </div>
            </div>
            <button style={{ border: "none" }} onClick={() => moveImageHandler(false)}>prev</button>  <button style={{ border: "none" }} onClick={() => setMove(prev => prev + 1100)}>next</button>

            <div className="main__cards">
                {
                    device.filteredDevices.length == 0 ? <h1 style={{ color: "red" }}>Nothing Found</h1> : device.filteredDevices.map(device => <DeviceItem key={device.id} device={device} />)
                }
            </div>

            {

            }

        </div>

    )

})