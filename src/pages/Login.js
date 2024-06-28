import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        
    }

    return (
        <Container>
            <Row>
                <Col md={5} className='login__bg'></Col>
                <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección de Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese Correo" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                            <Form.Text className="text-muted">
                                Nunca compartiremos su correo con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                        <div className='py-4'>
                            <p className='text-center'>
                                ¿No tienes una cuenta? <Link to="/signup">Regístrese Acá</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login