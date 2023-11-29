import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/ManjalLogo.png'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';




function Header({insideDashboard}) {
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
          {insideDashboard?
            <Nav className="ms-auto">
              <div className='btn-full d-flex justify-content-center align-items-center'>
                <NavDropdown title="user"  id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1"><Link style={{textDecoration:'none'}} to={'/dashboard'}>Profile</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link style={{textDecoration:'none'}} to={'/cart'}>My Cart</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
              <i class="fa-solid fa-user"></i>
              </div>
              <Link className=" btn-half d-flex justify-content-center align-items-center ms-3" to={'/cart'}>Cart <i class="fa-solid fa-cart-plus"></i></Link>
            </Nav>:
            <Nav className="ms-auto">
              <Link className=" btn-half me-3" to={'/login'}>Login</Link>
              <Link className=" btn-full" to={'/signup'}>SIGN UP</Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header