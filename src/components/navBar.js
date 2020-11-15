import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style mr-auto">
          <Navbar.Brand as="span">Grupsidip.org</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/investigacao" className="link-no-style">
              <Nav.Link as="span" eventKey="investigacao">
                INVESTIGACAO
              </Nav.Link>
            </Link>
            <Link to="/peritos" className="link-no-style">
              <Nav.Link as="span" eventKey="peritos">
                PERITOS
              </Nav.Link>
            </Link>
            <Link to="/dicas" className="link-no-style">
              <Nav.Link as="span" eventKey="dicas">
                DICAS
              </Nav.Link>
            </Link>
            <Link to="/reportagens" className="link-no-style">
              <Nav.Link as="span" eventKey="reportagens">
                REPORTAGENS
              </Nav.Link>
            </Link>
            <Link to="/assossiacoes" className="link-no-style">
              <Nav.Link as="span" eventKey="assossiacoes">
                ASSOSSIACOES
              </Nav.Link>
            </Link>
            <Link to="/contatar" className="link-no-style">
              <Nav.Link as="span" eventKey="contatar">
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
