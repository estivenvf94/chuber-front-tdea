import React, { useState } from "react";
import { Form, Button, FormGroup, Input, Label, Col, Row } from "reactstrap";
import RequestForm from "../request";

export default function CreateForm({ setLoginForm }) {
    const [showRequest, setShowRequest] = useState(false)

    if(showRequest){
        return <RequestForm />
    }

    return (
        <div className="layout-side-form">
            <div className="title">
                Crea tu cuenta
            </div>
            <div className="parag">
                ¿Ya tienes una cuenta?
                <div
                    className="link-false"
                    onClick={setLoginForm}
                >
                    Inicia sesión
                </div>
            </div>
            <Form
                className="form"
            >
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">
                                Nombre completo
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="name">
                                Placa del vehículo
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="email">
                        Correo electrónico
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Contraseña
                    </Label>
                    <Input
                        id="password"
                        name="email"
                        type="password"
                    />
                </FormGroup>
                <FormGroup className="form-actions">
                    <Button color="primary" onClick={() => setShowRequest(true)}>
                        Crear cuenta
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}