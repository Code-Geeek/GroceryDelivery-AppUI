import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import CarauselImg1 from '../Assets/carauselImg1.png'
import CarauselImg2 from '../Assets/carauselImg2.png'
import CarauselImg3 from '../Assets/carauselImg3.png'

function Carousell() {
  return (
    <>
    <div className='container' style={{borderRadius:'20px'}}>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img style={{borderRadius:'20px', width:"100px", height:'550px'}} src={CarauselImg1} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
    
          <MDBCarouselItem itemId={2}>
            <img style={{borderRadius:'20px', width:"100px", height:'550px'}} src={CarauselImg2} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
    
          <MDBCarouselItem itemId={3}>
            <img style={{borderRadius:'20px', width:"100px", height:'550px'}} src={CarauselImg3} className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
    </div>
    </>
  )
}

export default Carousell