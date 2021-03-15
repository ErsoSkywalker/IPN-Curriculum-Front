import React from "react";
import Layout from "../components/Layout";
import { Row, Container, Col, Jumbotron } from "react-bootstrap";
const login = () => {
  return (
    <div>
      <Layout>
        <div align="center">
          <br />
          <h1>Bienvenido, por favor introduce tus datos</h1>
          <br />
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>2 of 3 (wider)</Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default login;
