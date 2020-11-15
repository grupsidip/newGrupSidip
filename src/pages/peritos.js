import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Peritos = () => (
  <Layout pageInfo={{ pageName: "Peritos" }}>
    <SEO title="Peritos" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Peritos</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Peritos
