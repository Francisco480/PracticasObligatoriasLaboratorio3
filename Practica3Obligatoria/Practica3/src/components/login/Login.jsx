import { Form, InputGroup, Button, Col, Row, Container } from 'react-bootstrap';
import { useState } from "react";
import PropTypes from 'prop-types';

const Login = ({ validation }) => {
    const [loginUserName, setEnteredUserName] = useState("");

    const changeP = (event) => {
        setEnteredUserName(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();
        validation(loginUserName);
        setEnteredUserName("");
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div style={{ backgroundColor: 'lightseagreen', padding: '40px' }}>
                <Form onSubmit={submitForm}>
                    <Row>
                        <Col md={12} className="mb-3">
                            <h3 style={{ color: 'black', textAlign: 'center', marginBottom: '20px' }}>Registro de Usuario</h3>
                        </Col>
                        <Col md={12}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Nombre de usuario:</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={changeP}
                                    value={loginUserName}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <p style={{ color: 'black', textAlign: 'center' }}>Usuario ingresado: {loginUserName || "Sin usuario Ingresado"}</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4} >
                            <Button variant="secondary" type="submit" style={{ width: '100%' }}>Registrarse</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

Login.propTypes = {
    validation: PropTypes.func.isRequired,
};

export default Login;
