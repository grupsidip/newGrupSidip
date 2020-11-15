import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Investigacao = () => (
  <Layout pageInfo={{ pageName: "Investigacao" }}>
    <SEO title="Investigacao" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Investigacao</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Investigacao
