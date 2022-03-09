import { useState } from "react"
import "./style.css"

export const About=({status=false})=>{
    const[openModal,setOpenModal]=useState(false)
setOpenModal(status)
console.log(status);
    return (  <div>


  
 {    openModal&&  <div className="about-overlay"><div className="about" >
           <button onClick={()=>setOpenModal(false)}>X</button>
            <div className="about__container">container</div>
<p>
   <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates ea iusto reiciendis dolore quidem, explicabo ut quas tenetur dolores dolorum recusandae consequatur itaque aspernatur atque odit assumenda! Sunt, blanditiis.</h1>
</p>
        </div> </div> 


        }
        
         </div>
    )
}