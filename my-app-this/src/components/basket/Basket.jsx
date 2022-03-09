import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Context } from "../.."
import { SHOP_ROUTE,HOSTURL } from "../../utils/constants"
import "./basket.css"

export const Basket =observer( () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { basket } = useContext(Context)

    // useEffect(() => {
    //     basket.items.map(item => setTotalPrice((prev) => prev + item.price))
    // }, [])




    return (
        <div>
            <div className="basket">
                <div className="header">
                    <h4 >Shoping Cart</h4>
                  <NavLink to={SHOP_ROUTE}> <button > close</button></NavLink> 
                </div>



                {
                    basket.items.map((item) =>
                        <div key={item.id} className="basket_container">
                            <main className="main__basket">
                                <section className="left">
                                    <img className="image" src={HOSTURL+"/image/"+item.img} alt="" />
                                </section>
                                <section className="middle">
                                    <h5>{item.name}</h5>
                                    <h6>Price $:{ item.price}</h6>
                                </section>
                                <section className="right">
                                    <button onClick={()=>basket.deleteItem(item)} className="basket_button">subtract</button>
                                    <h3>{item.amount}</h3>
                                    <button onClick={() =>  basket.setItem(item)} className="basket_button">add</button>
                                    <button onClick={()=>basket.setDeleteDevice(item.id)} style={{background:"red",border:"none",color:"white",marginTop:"15px"}}>Delete</button>
                                </section>

                            </main>

                        </div>

                    )
                    
                }
                 <footer className="footer"><h4>Tottal price $ :{
               basket.totalPrice
                } 
                </h4></footer>
               
            </div>
        </div>
    )
}
)