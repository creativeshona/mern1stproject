import React, { useEffect, useRef, useState, } from 'react'
import user from './Images/user.png';
import user2 from './Images/user.jpg';
import shivani from './Images/shivani.jpeg'

import { useNavigate } from 'react-router-dom'
import Footer from './Footer'


const About = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const show2 = () => {
    setToggle(false)
    setToggle2(true)
  }
  const show = () => {
    setToggle(true)
    setToggle2(false)
  }

  const [image, setImage] = useState()
  const inputRef = useRef(null)

  const imageClick = () => {
    inputRef.current.click();
  }

  const imgChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setImage(event.target.files[0])
  }


  return (
    <>
      <div className='main-about container  d-flex justify-content-center'>
        <form method='GET' className=' rounded  mt-5 d-flex flex-column justify-content-between   p-5 bg-body-tertiary shadow'>
          <div className='about-1strow d-flex flex-nowrap ' >
            <div onClick={imageClick} className='col-md-4 col-sm-3'>
              {/* <img className='photo ' src={userData.name === "shivani" ? shivani : user} alt='photo' /> */}
              {/* <img className='photo' src={user2} ></img> */}
              {
                image ? <img className='rounded-circle photo' src={URL.createObjectURL(image)} ></img>
                 :
                  <img className='rounded-circle photo' src={user2} ></img>
              }
              <input
                type='file'
                ref={inputRef}
                onChange={imgChange}
                className='d-none'
              />

            </div>
            <div className='col-md-6 mt-4'>
              <div>
                <h5 >{userData.name}</h5>
                <h6>{userData.profession}</h6>
                <p className='mt-3 mb-5'>RANKINGS: <span>1/10</span> </p>

                <ul className='nav nav-tabs flex-nowrap' role='tablist'>
                  <li className='nav-item mb-2'>
                    <a onClick={show2} className='nav-link active ' id='home-tab' data-toggle="tab" href='#home' role='tab'>
                      About
                    </a>

                  </li>
                  <li className='nav-item'>
                    <a onClick={show} className='nav-link active' id='profile-tab' data-toggle="tab" href='#profile' role='tab'>
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2 mt-4'>
              <input type='submit' className='profile-edit-btn rounded p-2' name="btnAddMore" value="Edit Profile"></input>
            </div>
          </div>

          <div className='about-2ndrow about row flex-nowrap'>
            <div className='col-md-4 mt-4 col-sm-5'>
              <div className='profile-work '>
                <p className='text-secondary'>WORK LINK</p>
                <a href='#' target="_shivani"> Instagram </a> <br />
                <a href='#' target="_shivani"> Shivani jangid </a> <br />
                <a href='#' target="_shivani"> web Developer </a> <br />
                <a href='#' target="_shivani"> Figma </a> <br />
                <a href='#' target="_shivani"> Mern Developer </a> <br />
              </div>
            </div>

            <div className='col-md-4 col-sm-2 pl-5 about-info text-black-50 '>
              <div className='tab-content profile-tab' id='myTabContent'>
                {
                  toggle ? toggle :
                    <div className='about-1strow tab-pane fade show active' id='#home' role='tabpanel' aria-aria-labelledby='home-tab'>

                      <div className='row mt-4 flex-nowrap'>
                        <div className='res-abt col-md-6    '>
                          <label> User ID</label>
                        </div>
                        <div className='col-md-6'>
                          <label className='text-primary'>244564734343</label>
                        </div>
                      </div>

                      <div className='row mt-2 flex-nowrap'>
                        <div className='res-abt col-md-6'>
                          <label > Name</label>
                        </div>
                        <div className='col-md-6'>
                          <label className='text-primary'> {userData.name}</label>
                        </div>
                      </div>

                      <div className='row mt-2 flex-nowrap'>
                        <div className='res-abt col-md-6'>
                          <label>Email </label>
                        </div>
                        <div className='col-md-6'>
                          <label className='text-primary'> {userData.email}</label>
                        </div>
                      </div>

                      <div className='row mt-2 flex-nowrap'>
                        <div className='res-abt col-md-6'>
                          <label> Phone</label>
                        </div>
                        <div className='col-md-6'>
                          <label className='text-primary'> {userData.phoneNo}</label>
                        </div>
                      </div>

                      <div className='row mt-2 flex-nowrap'>
                        <div className='res-abt col-md-6'>
                          <label> Profession</label>
                        </div>
                        <div className='col-md-6'>
                          <label className='text-primary'>{userData.profession} </label>
                        </div>
                      </div>

                    </div>
                }
                {
                  toggle2 ? toggle2 :
                    <div className=' tab-pane fade show active' id='#profile' role='tabpanel' aria-aria-labelledby='home-tab'>

                      <div className='row mt-4'>
                        <div className='col-md-8 col-lg-8 '>
                          <label> Experience</label>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                          <label className='text-primary'>Fresher</label>
                        </div>
                      </div>

                      <div className='row mt-2'>
                        <div className='col-md-8 col-lg-8 '>
                          <label> Hourly Rate  </label>
                        </div>
                        <div className=' col-md-4 col-lg-4'>
                          <label className='text-primary'> 10$/hr</label>
                        </div>
                      </div>

                      <div className='row mt-2'>
                        <div className='col-md-8'>
                          <label> Total Project</label>
                        </div>
                        <div className='col-md-4'>
                          <label className='text-primary'> 4 </label>
                        </div>
                      </div>

                      <div className='row mt-2'>
                        <div className='col-sm-6 col-md-8 col-lg-8'>
                          <label> English Level</label>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                          <label className='text-primary'> Medium </label>
                        </div>
                      </div>

                      <div className='experience row mt-2 bg-warning '>
                        <div className='col-sm- col-md-8 col-lg-8'>
                          <label> Availability</label>
                        </div>
                        <div className='col-sm- col-md-4 col-lg-4'>
                          <label className='text-primary'>  Immediate</label>
                        </div>
                      </div>

                    </div>
                }
              </div>
            </div>
          </div>



        </form>
      </div>


      <Footer />
    </>
  )
}

export default About