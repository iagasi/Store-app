import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { BrandBar } from "../components/BrandBar"
import { DeviceList } from "../components/DeviceList"
import { TypeBar } from "../components/TypeBar"

const Shop = () => {
   return (


      <main className="main">
         <section className="main__left">

            <TypeBar />
         </section>

         <section className="main__right">
            <BrandBar />
            <DeviceList />



         </section>

      </main>

   )
}



export default Shop