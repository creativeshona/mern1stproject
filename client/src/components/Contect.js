import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaEnvelope, FaMobile } from 'react-icons/fa'
import Footer from './Footer'

const Contect = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phoneNo: "", message: "" })


  const contectPage = async () => {
    try {
      const res = await fetch('/getcontect', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },

      });
      const data = await res.json();
      console.log(data)
      setUserData({
        ...userData, name: data.name, email: data.email, phoneNo: data.phoneNo
      })
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err.message)

    }
  }

  useEffect(() => {
    contectPage();
  }, [])


  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setUserData({ ...userData, [name]: value });
    console.log(userData)
  }

  //  send the data to backend .................

  const contectForm = async (e) => {
    e.preventDefault();
    console.log('clicked')

    const { name, email, phoneNo, message } = userData;

    const res = await fetch('/contect', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phoneNo, message
      })
    });
    const data = await res.json();

    if (!data) {
      console.log("message not send ");
      alert("fill all field properly  ")
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  }

  return (
    <>
      <div className='container d-flex justify-content-between aling-item-center p-4 mt-2'>
        <div className='h-20 three-clm  shadow-lg p-4 mb-5 bg-white rounded  d-flex flex-column justify-content-center align-items-center  rounded'>
          <FaMobile className='mb-2' />
          <div className='d-flex justify-content-center '>
            Phone :-   <br />
            <span className='font-weight-italic'>{userData.phoneNo}</span></div>
        </div>

        <div className='h-20 three-clm  shadow-lg p-4 mb-5 bg-white rounded d-flex flex-column justify-content-center align-items-center  rounded'>
          <FaEnvelope />

          <div className='d-flex justify-content-center align-items-left'>
            Email :-
            <br />
            {userData.email}</div>
        </div>
        <div className='h-20 three-clm  shadow-lg  mb-5 bg-white rounded p-4 d-flex flex-column justify-content-center align-items-center  rounded'>
          <FaAddressCard />
          <div className='d-flex justify-content-center align-items-left'>Address :-
            <br />
            Loni utterperdesh India
          </div>
        </div>

      </div>
      {/* ........................................ */}


      <div className='d-flex justify-content-center align-item-center  '>

        <div className='  getTouch shadow-lg p-3 mb-5  rounded p-5'>
          <h1> Get in Touch </h1>
          <form method='POST'>
            <div className='mt-5 flex-wrap'>
              <input className='rounded m-2 ms-2 p-1' placeholder='Your name' type='text' name='name' onChange={handleInputs} value={userData.name}></input>
              <input className='rounded m-2 ms-2 p-1' placeholder='Your Email' type='email' name='email' onChange={handleInputs} value={userData.email}></input>
              <input className='rounded m-2 ms-2 p-1' placeholder='Your Phone Number' type='number' name='phoneNo' onChange={handleInputs} value={userData.phoneNo}></input>

            </div>
            <div >
              <textarea name='message' value={userData.message} onChange={handleInputs} className=" text_area " placeholder='message'>

              </textarea>
            </div>
            <button onClick={contectForm} className='rounded btn-primary btn mt-3  '>
              Send message
            </button>
          </form>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default Contect