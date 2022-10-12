// @vendors
import React, { useState } from "react";
import { Form, Button, FormGroup, ButtonGroup, Input, Label, Col, Row } from "reactstrap";

// @components
import RequestForm from "../request";

export default function CreateForm({ setLoginForm }) {
    const [showRequest, setShowRequest] = useState(false)
    const [rSelected, setRSelected] = useState(1);

    if (showRequest) {
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
                {/* <FormGroup>
                    <ButtonGroup>
                        <Button
                            color="primary"
                            outline
                            active={rSelected === 1}
                            onClick={() => setRSelected(1)}
                        >
                            <em className="fal fa-user" />
                            Persona
                        </Button>
                        <Button
                            color="primary"
                            outline
                            active={rSelected === 2}
                            onClick={() => setRSelected(2)}
                        >
                            <em className="fal fa-car" />
                            Conductor
                        </Button>
                    </ButtonGroup>
                </FormGroup> */}
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
                            <Label for="placa">
                                Placa del vehículo
                            </Label>
                            <Input
                                id="placa"
                                name="placa"
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