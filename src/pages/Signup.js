import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import botImg from '../assets/bot.jpeg';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    //image upload states

    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e) {
        const file = e.target.files[0];
        if(file.size >= 1048576) {
            return alert('El tamaño máximo es de 1 MB') 
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file))
        }
    }
    
    async function uploadImage() {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'zikmubdy');
        try {
            setUploadingImg(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/dn4rlcqtw/image/upload", {
                method: 'POST',
                body: data
            })
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url;
        } catch(error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    async function handleSignup(e) {
        e.preventDefault();
        if(!image) return alert('Por favor adjunte su foto de perfil.');
        const url = await uploadImage(image);
        console.log(url);
    }

    return (
        <Container>
            <Row>
                <Col md={7} className='d-flex align-items-center justify-content-center flex-direction-column'>
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
                        <h1 className='text-center'>Cree su Cuenta</h1>
                        <div className='signup-profile-pic__container'>
                            <img src={imagePreview || botImg} alt='ima' className='signup-profile-pic'/>
                            <label htmlFor='image-upload' className='image-upload-label'>
                                <i className='fas fa-plus-circle add-picture-icon'></i>
                            </label>
                            <input type='file' id='image-upload' hidden accept='image/png, image/jpeg' onChange={validateImg}/>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su Nombre" onChange={(e) => setName(e.target.value)} value={name}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección de Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese Correo" onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <Form.Text className="text-muted">
                                Nunca compartiremos su correo con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {uploadingImg ? "Redireccionado..." : "Registrese"}
                        </Button>
                        <div className='py-4'>
                            <p className='text-center'>
                                ¿Ya tienes una cuenta? <Link to="/login">Ingrese Acá</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
                <Col md={5} className='signup__bg'></Col>
            </Row>
        </Container>
    )
}

export default Signup