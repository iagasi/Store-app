

import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { Card, Container, Form, Button } from "react-bootstrap"


import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Context } from "../.."
import { login, registracion } from "../../http/userApi"
import { REGISTRACION_ROUTE, SHOP_ROUTE } from "../../utils/constants"
import "./auth.css"

const Auth = observer(() => {
    const { user } = useContext(Context)

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const location = useLocation()
    let Registracion
    location.pathname === REGISTRACION_ROUTE ? Registracion = true : Registracion = false

    const navigate=useNavigate()


    const sighnIn = async () => {
        try {

            let response
            if (Registracion) {
                 response = await registracion(email, password)
               
            }
            else {
                 response = await login(email, password)
                
            }
            response? navigate(SHOP_ROUTE):console.log("");
            user.setUser(response)
            if(response.role=="admin"){    user.setIsAdmin(true) }
         
            console.log(user.isAdmin)
            user.setIsAuth(true)
        }
        catch (error) {
         if(!error.response){
           return  alert(error)
         }
             alert(error.response.data)
        }

    }
    return (
        <div className="auth">

            <div className="auth__container">
                <div className="auth__header">
                    <h2 >{location.pathname.split("/")[1]}</h2>
                    <NavLink className="auth__button-close" to={SHOP_ROUTE}>Close</NavLink>
        
                </div>
                
                <div className="auth__form">

                    <input className="auth__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       
                        placeholder="Enter Email" />


                    <input className="auth__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password" />
                    <div>
                        <NavLink to={REGISTRACION_ROUTE}>
                            Register if not have accaunt
                        </NavLink>

                    </div>
                    <button className="auth__button-ok" onClick={() => sighnIn()}>
                        Enter
                    </button>

                </div>
            </div>
        </div>

    )
})



export default Auth