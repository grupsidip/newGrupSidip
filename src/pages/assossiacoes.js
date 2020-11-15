import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Assossiacoes = () => (
  <Layout pageInfo={{ pageName: "Assossiacoes" }}>
    <SEO title="Assossiacoes" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Assossiaçoes</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Assossiacoes
