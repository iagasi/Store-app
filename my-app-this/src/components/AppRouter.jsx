import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from ".."
import Admin from "./admin-Page/Admin"
import Auth from "./auth/Auth"
import { authRoutes, publicRoutes } from "../routes"
import { observer } from "mobx-react-lite"
//<Route   path="/a" element={<Auth/>}/>
//{authRoutes.map((element)=>

//<Route path={element.path} element={element.Comment} />)}

const AppRouter = observer(() => {
    const{user}=useContext(Context)
    
    return (

        <Routes>
            {user.isAuth ? authRoutes.map((element) =>
                <Route path={element.path} element={<element.Comment />} />):console.log("ee")
            }

            {publicRoutes.map((element) =>
                <Route path={element.path} element={<element.Comment />} />)}
        </Routes>

    )
}


)
export default AppRouter