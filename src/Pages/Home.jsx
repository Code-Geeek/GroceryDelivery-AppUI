import React from 'react'
import landingImg from '../Assets/landing-img.png'
import Featured from '../Components/Featured'
import { Link } from 'react-router-dom'
import Carousell from '../Components/Carousell'
import Header from '../Components/Header'
import Footer from '../Components/Footer'




function Home() {
  return (
    <>
    <Header/>
    <div className="landing-page d-flex justify-content-between">
        <div className="sub-1 d-flex justify-content-center align-items-center">
        <div className='details d-flex flex-column justify-content-center' >
            <h1>Get <span>fresh</span></h1>
            <h1>Grocery With , </h1>
            <h1>Fastest Delivery</h1>
            <p>Grocery have been widely regarded in the health <br /> industry as the world's healthiest food sour fruit.</p>
            <div className="buttons  d-flex">
              <Link className='btn-full me-3' to={'/order-grocery'} > Order Grocery</Link>
              <Link className='btn-full' to={'/categories'} > See Categories</Link>
            </div>
        </div>
        </div>
        <div className="image d-flex flex-column justify-content-center align-items-center ">
          <img style={{width:'720px'}} src={landingImg} alt="" />
        </div>
    </div>
    <div className="landing-1">
      <h3 className='text-center mb-5'>OUT PARTNERS</h3>
      <marquee  behavior="" direction="">
        <img className='me-5' style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />
        <img  className='me-5 ms-5'style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />
        <img className='me-5 ms-5' style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />
        <img className='me-5 ms-5' style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />
        <img className='me-5 ms-5' style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />
        <img className='me-5 ms-5' style={{width:"150px"}} src="https://cdn-icons-png.flaticon.com/512/5229/5229534.png" alt="" />

      </marquee>
    </div>
    <div className="landing-2">
    <Featured/>
    </div>
    <div className="landing-3">
    <Carousell/>
    </div>
    <Footer/>
    </>
  )
}

export default Home