import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/styles/style.scss'

const IndexPage = () => (
  <Layout className="d-flex align-self-center" pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`peritos`, `documentoscopia`, `poligrafo`]} />
    <Container className="text-center index rounded " fluid>
      <Row className="">
        <Col className="">

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
