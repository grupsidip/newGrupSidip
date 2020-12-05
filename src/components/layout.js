import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import Navbar from "./navBar"
import spainFlag from '../images/index/spain-flag.png'
import brazilFlag from '../images/index/brazil-flag.png'
import usaFlag from '../images/index/usa-flag.png'
import europeFlag from '../images/index/europe-flag.png'
import crdCe from '../images/index/crd-ce.jpg'
import escudo from '../images/index/escudo.gif'

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="d-flex justify-content-center align-items-center">
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters id='content'>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer className='bg-dark'>
                <span className='ml-1 '>
                  <Image src={escudo} width='30' rounded></Image>
                </span>
                <span className='ml-2 mr-auto'>
                  <Image src={crdCe} width='30' rounded></Image>
                </span>

                <span className='position-absolute text-center text-white small' id='footerSidip'> Grupsidip.org
                  © {new Date().getFullYear()}
                  {` `}
                </span>
                {/* <div className=' float-right'> */}
                <span className='ml-auto'>
                  <Image src={brazilFlag} width='30'></Image>
                </span>
                <span className='float-right ml-1'>
                  <Image src={spainFlag} width='30'></Image>
                </span>
                <span className='ml-1'>
                  <Image src={europeFlag} width='30'></Image>
                </span>
                <span className='ml-1 mr-2'>
                  <Image src={usaFlag} width='30'></Image>
                </span>
                {/* </div> */}

              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
