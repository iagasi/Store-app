import { Button } from "bootstrap";
import { observer } from "mobx-react-lite";
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../.."
import Shop from "../../pages/Shop";
import { ADMIN_ROUTE, Basket_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/constants";
import { About } from "../about/About";
 import "../style.css"
const NavbarBar = observer(() => {
  const { user } = useContext(Context)
  const{basket}=useContext(Context)
  const navigate=useNavigate()

const logOut=(user)=>{
user.setIsAuth(false)
user.setIsAdmin(false)
localStorage.setItem("Shop","")
}

  return (
    <div className="mani__div">
      <div class="navbar">

<div class="containero">
    <section class="navbar__left">
        <NavLink style={{textDecoration:"none"}}className="navbar-brand" to={SHOP_ROUTE}>
            <h1>Ecomerce</h1>
        </NavLink>
       
    </section>
    <section class="navbar__middle">
        <NavLink  style={{textDecoration:"none",color:"white" }} to={SHOP_ROUTE}><h5>HOME</h5></NavLink>
        
        <h5 onClick={<About status={true}/>}>ABOUT</h5>
        <h5>FAQ</h5>
    </section>

    <section class="navbar__right">

        {user.isAuth ?
        <>
        
       
            <button className="navbar__sign-up" onClick={()=>logOut(user)}>Out</button>
        </>
        :
        <>
            <NavLink to={LOGIN_ROUTE}><button className="navbar__sign-up" onClick={()=>navigate(LOGIN_ROUTE) }>SIGN
                    UP</button></NavLink>
        </>



        }
        { user.isAdmin&&<button onClick={()=>navigate(ADMIN_ROUTE)}>Admin panel</button>

    }

        <NavLink to={Basket_ROUTE}>< img className="navbar__basket" src={require("./img/basket.jpg") }alt=""/> </NavLink>

        <span className="navbar__counter">{basket.amountInBasket}</span>


    </section>
</div>
</div>
    
    </div>
  )
})

export default NavbarBar