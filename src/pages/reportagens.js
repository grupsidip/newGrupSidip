import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Reportagens = () => (
  <Layout pageInfo={{ pageName: "Reportagens" }}>
    <SEO title="Reportagens" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Reportagens</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Reportagens
