import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

import Auth from "./components/auth/Auth"
import AppRouter from './components/AppRouter';
import NavbarBar from './components/navbar/Navbar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userApi';
import { Spinner } from 'react-bootstrap';
import { getTypes } from './http/types';
import { getBrands } from './http/brands';
import { getDevices } from './http/devices';
import jwt_decode from "jwt-decode";



const App = observer(() => {
  const { user } = useContext(Context)
  const { device } = useContext(Context)
  const [loading, setLoading] = useState(true)




  useEffect(async () => {
    try {

      const types = await getTypes()
      const brands = await getBrands()
      const devices = await getDevices()
      device.setTypes(types)
      device.setBrands(brands)
      device.setDevices(devices)


      await check()

      user.setIsAuth(true)
      const token = localStorage.getItem("Shop").split(" ")[1]
      const decoded = jwt_decode(token)
      if (decoded.role == "admin") { user.setIsAdmin(true) }
    }
    catch (e) {
      alert("Authentification error")
    }

    setLoading(false)

  }, [])

  if (loading) {
    return <Spinner animation='grow'></Spinner>
  }
  return (
    <BrowserRouter>
      <NavbarBar />
      <AppRouter />
    </BrowserRouter>


  );
})

export default App;
