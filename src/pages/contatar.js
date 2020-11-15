import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contatar = () => (
  <Layout pageInfo={{ pageName: "Contatar" }}>
    <SEO title="Contatar" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Contatar</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Contatar
