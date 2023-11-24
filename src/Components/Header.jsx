import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/ManjalLogo.png'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <>
    <Navbar expand="lg" >


      <Container>
        <Navbar.Brand className='me-auto' href="#home"><img style={{width:"50px"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link ><Link style={{textDecoration:'none', color:'#343a40'}} to={'/'}>HOME</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none', color:'#343a40'}} to={'/categories'}>SHOP</Link></Nav.Link>
            <Nav.Link href="#home">BLOG</Nav.Link>
            <Nav.Link href="#home">ABOUT</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Link className=" btn-half me-3" to={'/login'}>Login</Link>
            {/* <i class="fa-solid fa-cart-plus"></i> */}
            <Link className=" btn-full" to={'/signup'}>SIGN UP</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header