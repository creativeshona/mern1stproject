import React, { useEffect, useState } from 'react'
import Footer from './Footer';

const Home = () => {
  const [userName, setUserName] = useState('')
  const [show, setShow ]= useState(false);
  const homePage= async()=>{
    try {
      const res = await fetch('/getcontect',{
        method:"GET",
        header:{"Content-Type":"application/json"}
      });
      const data = await res.json();
      setUserName(data.name)
      setShow(true)

    } catch (error) {
      console.log(error.message)
      
    }
  }
  useEffect(()=>{
    homePage()
  })

  return (
    <>
      <div className=' d-flex  justify-content-center align-items-center'>
       <div className='position-absolute text-center'>
       <p>Welcome</p>
        <h1>
         {userName}
        </h1>
        <h2>{show ? 'Happy, To See You Back': 'We Are The Mern Developer'} </h2>
       </div>
        <div className='left w-50 '> </div>
        <div className='right w-50 '> </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home