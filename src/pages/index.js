import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/styles/style.scss'

const IndexPage = () => (
  <Layout className="d-flex align-self-center" pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`peritos`, `documentoscopia`, `poligrafo`, `detectives Brasil`, `detective Brazil`]} />
    <Container className="indexPage" >
      <Row className="d-flex justify-content-center align-self-center mt-0" >
        <Col >
          <p className="text text-center maintitle"> <strong> DETECTIVES BRASIL</strong></p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-self-center" >
        <Col >
          <p className="text text-center title">INVESTIGACIONES PARTICULARES Y CORPORATIVAS</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-self-center" >
        <Col >
          <p className="text text-center title">CRIMINAL COMPLIANCE </p>
        </Col>
      </Row>

      <Row className="">
        <Col className="text-center index rounded " fluid>

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
