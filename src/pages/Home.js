import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "./Home.css";

const Home = () => {
    return ( 
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <div>
                    <h1>Comparte el mundo con tus amigos</h1>
                    <p>Chat App te permite conectarte al resto del mundo</p>
                    <LinkContainer to="/chat">
                        <Button variant="success">
                            Empieza Acá<i className='fas fa-comments home-message-icon'></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className='home__bg'></Col>
        </Row>
    );
}

export default Home