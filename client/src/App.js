import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm';
// import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Contect from './components/Contect'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import LogOut from './components/Logout';
// import Error from './components/Error';
import './App.css';
import {initialState,reducer} from './reducer/Reducers'

export const UserContext = createContext();
const Routing = ()=>{
  return(
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contect'element={<Contect/>}/>
  <Route path='/about' element = {<About/>}/>
  <Route path='/login' element = {<Login/>}/>
  <Route path='/signup' element = {<Signup/>}/>
  <Route path='/Logout' element = {<LogOut/>}/>
</Routes>
)
}
const App = () => {
  const [state, dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
   <BrowserRouter>
    <Navbar/>
    <Routing/>
   </BrowserRouter>
   </UserContext.Provider>
  )
}

export default App










{/* <Routes>
<Route path='/' element={<Home/>} />
<Route path='/contect'element={<Contect/>}/>
<Route path='/about' element = {<About/>}/>
<Route path='/login' element = {<Login/>}/>
<Route path='/signup' element = {<Signup/>}/>

</Routes> */}