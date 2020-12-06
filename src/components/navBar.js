import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Image } from "react-bootstrap"
import crdCe from '../images/index/ANAGRAMA.jpg'

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style mr-auto">
          <Navbar.Brand as="span"> <span className='ml-2 mr-auto'>
            <Image src={crdCe} width='50' rounded></Image>
          </span> Grupsidip.org</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/investigacao" className="link-no-style">
              <Nav.Link as="span" eventKey="investigacao" className="nav">
                INVESTIGAÇÃO
              </Nav.Link>
            </Link>
            <Link to="/peritos" className="link-no-style">
              <Nav.Link as="span" eventKey="peritos" className="nav">
                PERITOS
              </Nav.Link>
            </Link>
            <Link to="/legislacao" className="link-no-style">
              <Nav.Link as="span" eventKey="legislacao" className="nav">
                LEGISLAÇÃO
              </Nav.Link>
            </Link>
            <Link to="/dicas" className="link-no-style">
              <Nav.Link as="span" eventKey="dicas" className="nav">
                DICAS
              </Nav.Link>
            </Link>
            <Link to="/reportagens" className="link-no-style">
              <Nav.Link as="span" eventKey="reportagens" className="nav">
                REPORTAGENS
              </Nav.Link>
            </Link>
            <Link to="/contatar" className="link-no-style">
              <Nav.Link as="span" eventKey="contatar" className="nav">
                CONTATAR
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
