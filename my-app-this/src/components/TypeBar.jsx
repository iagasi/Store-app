import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "..";
import "./style.css"

export const TypeBar = observer(() => {
    const { device } = useContext(Context)
    const allHandler = () => {
        device.setSelectedType({ id: 0 })
       device.setSelectedBrand({ id: 0 })
    }

    const typeHandler = (element) => {
        device.setSelectedType(element)
        device.setSelectedBrand({ id: 0 })
    }

    const presedHandler = (active) => {
        if (active) {
            return "gray"
        }
    }

    return (
        <div>

            <div class="main__type" onClick={() => allHandler()} style={{ background: presedHandler(0 == device.selectedType.id) }}  > ALL</div>
            {
                device.Types.map((element) =>
                    <div onClick={() => typeHandler(element)} style={{ background: presedHandler(element.id == device.selectedType.id) }} class="main__type"> {element.name}</div>
                )}
        </div>
    )

})