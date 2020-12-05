import React from "react"
import { Row, Col, Container, CardColumns, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import rep1 from '../images/reportagens/rep1.jpg'
import rep2 from '../images/reportagens/rep2.jpg'
import rep3 from '../images/reportagens/rep3.jpg'
import rep4 from '../images/reportagens/rep4.jpg'
import rep5 from '../images/reportagens/rep5.jpg'
import rep7 from '../images/reportagens/rep7.jpg'
import rep8 from '../images/reportagens/rep8.jpg'
import rep11 from '../images/reportagens/rep11.jpg'
import rep14 from '../images/reportagens/rep14.jpg'
import rep15 from '../images/reportagens/rep15.gif'
import rep16 from '../images/reportagens/rep16.jpg'
import rep17 from '../images/reportagens/rep17.jpg'
import rep18 from '../images/reportagens/rep18.jpg'


const Reportagens = () => (
  <Layout pageInfo={{ pageName: "Reportagens" }}>
    <SEO title="Reportagens" />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col className="bg-dark">
          <h1 className="text-center text-uppercase text-white font-weight-bold">Reportagens</h1>
        </Col>
      </Row>

      <Row className="justify-content-center my-3">
        <Col>
          <p>ANCREF CRD-CE
          ESPAÑA BRASIL
          GRUP SIDIP
          Conseguimos encontrar Pruebas para liberar um cliente condenado a 8 años de prisión.
          Artículo: Encerrona en Brasil. El detective privado como herramienta de gran utilidad en la lucha contra injusticias.
          </p>
        </Col>
      </Row>

      <Row className='d-flex justify-content-center'>
        <Col className='d-flex justify-content-center flex-wrap'>
          <CardColumns className='d-flex justify-content-center flex-wrap'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep1} className='h-75' />
              <Card.Body className='h-25'>
                <Card.Title>Revista Interviú</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep2} className='h-75' />
              <Card.Body className='h-25'>
                <Card.Title>Diario Córdoba</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep3} className='h-75' />
              <Card.Body >
                <Card.Title>Televisión (Canal Sur) ESPAÑA </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep4} className='h-75' />
              <Card.Body>
                <Card.Title>En la wecTelevisión (Canal Sur) ESPAÑA </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep5} className='h-75' />
              <Card.Body>
                <Card.Title>EL PAÍS SEMANAL  </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep7} className='h-75' />
              <Card.Body>
                <Card.Title>EL PAÍS SEMANAL .Diario de Córdoba </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep8} className='h-75' />
              <Card.Body>
                <Card.Title>Libertam por Unanimidade dos Ministros do Tribunal Superior Federal de Brasília </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep11} className='h-75' />
              <Card.Body>
                <Card.Title>Libertam por Unanimidade dos Ministros do Tribunal Superior Federal de Brasília </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep14} className='h-75' />
              <Card.Body>
                <Card.Title>rakeros.com</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep15} className='h-75' />
              <Card.Body>
                <Card.Title>rakeros.com</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep16} className='h-75' />
              <Card.Body>
                <Card.Title>Nomeado Delegado Internacional España/Brasil </Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep17} className='h-75' />
              <Card.Body>
                <Card.Title>Nomeado Delegado Internacional España/Brasil </Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={rep18} className='h-75' />
              <Card.Body>
                <Card.Title>Nomeado Delegado Internacional España/Brasil </Card.Title>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Reportagens
