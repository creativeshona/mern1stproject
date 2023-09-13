import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaKey, FaPhone, FaUser, FaUserCircle, } from 'react-icons/fa'
import signUp from './Images/signUp.jpg'
import Footer from './Footer';


const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    profession: "",
    userName: "",
    password: "",
    cPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value });


  }

  const submit = async (e) => {
    e.preventDefault()

    const { name, email, phoneNo, profession, userName, password, cPassword } = user;

    const res = await fetch("/signUp", {
      method: "POST",
      headers:{
        "content-type":"application/json" 
      },
      body: JSON.stringify({
        name, email, phoneNo, profession, userName, password, cPassword
      })
    })
    // const data = await res.json();

    if (res.status === 404) {
      window.alert("plz enter all field properly")
      console.log("plz enter all field properly")
    }
    else if (res.status === 406 ) {
      window.alert("both  password is different")
      console.log("invalid data")
    }
    else if (res.status === 405 ) {
      window.alert("email already exist")
      console.log("email already exist")
    }
    else if (res.status === 408 ) {
      window.alert("userName already exist")
      console.log("userName already exist")
    }
    
    else {
      console.log("Registration successfully")
      window.alert("Registration successfully")

      navigate("/Login");

    }


  }

  return (
    <>
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="container d-flex justify-content-center align-item-center ">
          <div className="col-lg-8 col-xl-7 mt-5">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body">
                <div className="row justify-content-center ">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form method='POST' className="mx-1 mx-md-4 mt-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaUser />
                        <div className=" d-flex  form-outline gap-4 flex-fill mb-0 ms-3">
                          <input name='name' value={user.name} autocomplete="off" onChange={handleInput} placeholder='Your-Name;' type="text" id="form3Example1c" className="form-control" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaEnvelope />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='email' value={user.email} autocomplete="off" onChange={handleInput} placeholder='Your-Email;' type="email" id="form3Example3c" className="form-control" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaPhone />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='No' value={user.phoneNo} autocomplete="off" onChange={handleInput} placeholder='Your-Phone.No;' type="Number" id="form3Example3c" className="form-control" />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaUserCircle />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='userName' value={user.userName} autocomplete="off" onChange={handleInput} placeholder='Your-userName;' type="text" id="form3Example3c" className="form-control" />
                        </div>
                      </div> <div className="d-flex flex-row align-items-center mb-4">
                        <FaUserCircle />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='profession' value={user.profession} autocomplete="off" onChange={handleInput} placeholder='Your-profession;' type="text" id="form3Example3c" className="form-control" />
                        </div>
                      </div>


                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaKey />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='password' value={user.password} autocomplete="off" onChange={ handleInput} placeholder='Your-Password;' type="password" id="form3Example4c" className="form-control" />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaKey />
                        <div className="form-outline d-flex gap-4 flex-fill mb-0 ms-3">
                          <input name='cPassword' value={user.cPassword} autocomplete="off" onChange={ handleInput} placeholder='Your-Cpassword;' type="password" id="form3Example4cd" className="form-control" />
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input " name='checbox' placeholder='Your-Name;' type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button onClick={submit} name='singUp' type="submit" className="btn btn-primary btn-lg">Register</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center flex-column order-1 order-lg-2">

                    <div>
                      <img src={signUp}
                        className="img-fluid" alt="Sample image" />

                    </div>
                    <Link to='/Login' className='text-decoration-none text-reset' >I have already registration</Link>


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

export default Signup