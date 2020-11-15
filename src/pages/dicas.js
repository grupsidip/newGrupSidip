import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Dicas = () => (
  <Layout pageInfo={{ pageName: "Dicas" }}>
    <SEO title="Dicas" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
        <h1>Dicas</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Dicas
