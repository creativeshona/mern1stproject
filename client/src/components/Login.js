import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEnvelope, FaKey } from 'react-icons/fa'
import signIN from './Images/sign.jpg'
import { UserContext } from '../App'
import Footer from './Footer'



const SignIn = () => {

  const {state,dispatch}=useContext(UserContext);


  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e)=>{
    e.preventDefault(e)
    // console.log(email,password)
    // const {email,password} = User
    const res = await fetch("/logIn", {
      method:"POST",
      headers:{
        "content-type":"application/json"

      },
      body:JSON.stringify({
        email, password
      })
      
      
    })

    const data = res.json();
    console.log(data)

    if(res.status === 402){
        window.alert("plz fill the data")
    }
    else if (res.status === 400){
      window.alert("invalid credential")
    }
    else{
      dispatch({type:'USER',payload:true});
      window.alert("login successfully")
      
      navigate("/About");

    }

  }
  return (
    <>

      <section className="login" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-10 col-xl-8">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log-In</p>

                      <form method='POST' className="mx-1 mx-md-4">

                     
                        <div className="   mb-4">
                          <div className="form-outline d-flex gap-4 flex-fill mb-0">
                            <FaEnvelope/>
                            <input name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Your-Email;' type="email" id="form3Example3c" className="p-1" />
                          </div>
                        </div>

                       
                        <div className="  mb-4">
                          <div className="form-outline d-flex gap-4 flex-fill mb-0">
                            <FaKey/>
                            <input name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Your-Password;' type="password" id="form3Example4c" className="p-1" />
                          </div>
                        </div>

                      
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button name='signIN' onClick={loginUser}  type="submit" className="btn btn-primary btn-lg">Log In</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center flex-column order-1 order-lg-2">

                      <div className='col-md-10'>
                        <img  src={signIN}
                          className="img-fluid" alt="Sample image" />

                      </div>
                      <Link to='/Signup' className='text-decoration-none text-reset' >Create an Account</Link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default SignIn