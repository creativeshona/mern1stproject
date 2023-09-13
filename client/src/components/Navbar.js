import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';
import logo from './Images/logo.png'

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(`the navbar user ${state} and ${dispatch}`)

  const RenderList = () => {
    if (state) {
      return (
        <>
          <li className="nav-item ">
            <NavLink className="nav-NavLink text-dark" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink text-dark " to="/about">About-Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink text-dark" to="/contect">Contect</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-NavLink text-dark" to="logout">logout</NavLink>
          </li>

        </>
      )
    }else{
      return(
        <>
        <li className="nav-item ">
          <NavLink className="nav-NavLink text-dark" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink text-dark " to="/about">About-Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink text-dark" to="/contect">Contect</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-NavLink text-dark" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink text-dark" to="/signup">Sign-up</NavLink>
        </li>

      </>
      )
    }
  }

  return (

    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none " to="/"><img className='logo1' src={logo}></img></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto m-2 ml-lg-0  ">

              <RenderList />

            </ul>

          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar