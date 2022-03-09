import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

export const BrandBar= observer(()=>{
    const {device}=useContext(Context)

    const activeHandler=(status)=>{

if(status){
    return "gray"
}
    }
    
return(

    <div className="main__brands">
          
    <div className="main__brand" onClick={()=>device.setSelectedBrand({id:0})}   style={{margin:"3px",padding:"3px",cursor:"pointer",background:activeHandler(0===device.selectedBrand.id)}}>All</div>

   {
    device.Brands.map(brand=>
    <div  className="main__brand"
    key={brand.id}
    onClick={()=>device.setSelectedBrand(brand)}
   
  
    style={{margin:"3px",padding:"3px",cursor:"pointer",background:activeHandler(brand.id===device.selectedBrand.id)}}
    >
{brand.name}
    </div>)
}

</div>





  
)

})