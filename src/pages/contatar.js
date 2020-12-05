import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faPhone, faUser, faMapMarker, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const Contatar = () => (
  <Layout pageInfo={{ pageName: "Contatar" }}>
    <SEO title="Contatar" />
    <Container className="">
      <Row className="justify-content-center my-3">
        <Col className="bg-dark">
          <h1 className="text-center text-uppercase text-white font-weight-bold">Contatar </h1>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={6}>
          <p><strong>Entre em contato conosco! </strong></p>
          <p><FontAwesomeIcon icon={faPhone} className='mr-1' />Telefone: (0055) 85 99957562 (Plant&atilde;o 24 horas)</p>
          <p><FontAwesomeIcon icon={faPhone} className='mr-1' />(0055) 85 96142695 (Plant&atilde;o 24 horas)</p>
          <p><FontAwesomeIcon icon={faPhone} className='mr-1' />escrit&oacute;rio: (0055) 85 30886784 </p>
          <p><strong>Horario de atendimento escritorio: </strong></p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className='mr-1' />Das 08:00 - 18:00 (Segunda a Sexta) </p>
          <p><strong>Endere&ccedil;o para Correspond&ecirc;ncia: </strong><strong></strong></p>
          <p><FontAwesomeIcon icon={faMapMarker} className='mr-1' />Rua Afonso Venceu, n&ordm;. 22, sala n&ordm;. 3 Bairro: Centro </p>
          <p>CEP: 60060-160 FORTALEZA-CEAR&Aacute;-BRASIL</p>
          <p><strong>&nbsp; </strong></p>
        </Col>
        <Col lg={6}>
          <Row>
            <Col className='flex-wrap d-inline-flex d-flex justify-content-center'>
              <Card style={{ width: '15rem' }} className='border border-dark m-2 '>
                {/* <Card.Img variant="top" src={rep11} /> */}
                <Card.Body className='bg-light h-25 '>
                  <Card.Title className='text-center pt-2'><strong><FontAwesomeIcon icon={faUser} className='mr-1' />Juan Tomas B. Paysal</strong></Card.Title>
                </Card.Body>
                <Card.Text className='my-1 h-50 pt-2'>
                  <p className='text-center pl-2'><FontAwesomeIcon icon={faPhone} className='mr-1' />Brazil (0055) 85 99957562 </p>
                  <p className='text-center pl-2'><FontAwesomeIcon icon={faPhone} className='mr-1' />Brazil (0055) 85 32329022 </p>
                  <p className='text-center pl-2 small'><FontAwesomeIcon icon={faAt} className='mr-1' /><a href="mailto:Juantomas.grupsidip@hotmail.com">Juantomas.grupsidip@hotmail.com </a></p>
                  <p className='text-center pl-2 small'><FontAwesomeIcon icon={faAt} className='mr-1' /><a href="mailto:juantomas.grupsidip@gmail.com ">juantomas.grupsidip@gmail.com </a></p>
                </Card.Text>
                <Card.Footer className='text-center text-muted h-25 '> Director/International Relationship </Card.Footer>
              </Card>
              <Card style={{ width: '15rem' }} className='border border-dark m-2'>
                {/* <Card.Img variant="top" src={rep11} /> */}
                <Card.Body className='bg-light h-25 '>
                  <Card.Title className='text-center pt-2'><strong><FontAwesomeIcon icon={faUser} className='mr-1' />Ant&ordm; Gleudison S.Rodrigues </strong></Card.Title>
                </Card.Body>
                <Card.Text className='my-1 h-50 pt-2'>
                  <p className='text-center pl-2'><FontAwesomeIcon icon={faPhone} className='mr-1' />Brazil (0055) 85 91027769 </p>
                  <p className='text-center pl-2'><FontAwesomeIcon icon={faPhone} className='mr-1' />Brazil (0055) 85 30886784 </p>
                  <p className='text-center pl-2 small'><FontAwesomeIcon icon={faAt} className='mr-1' /><a href="mailto:gsonsr@hotmail.com">gsonsr@hotmail.com</a></p>
                </Card.Text>
                <Card.Footer className='text-center text-muted h-25 '> Operational Director </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Contatar
