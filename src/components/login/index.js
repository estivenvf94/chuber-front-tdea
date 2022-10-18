// @vendors
import React, { useState } from "react";
import { Form, Button, FormGroup, ButtonGroup, Input, Label } from "reactstrap";

export default function LoginForm({ setLoginForm }) {
    const [rSelected, setRSelected] = useState(1);
    return (
        <div className="layout-side-form">
            <div className="parag">
                ¿No tienes una cuenta?
                <div
                    className="link-false"
                    onClick={setLoginForm}
                >
                    Crea una
                </div>
            </div>
            <div className="title">
                Ingresa a tu cuenta
            </div>
            <Form
                className="form"
            >
                <FormGroup>
                    <ButtonGroup>
                        <Button
                            color="primary"
                            outline
                            active={rSelected === 1}
                            onClick={() => setRSelected(1)}
                        >
                            Persona
                        </Button>
                        <Button
                            color="primary"
                            outline
                            active={rSelected === 2}
                            onClick={() => setRSelected(2)}
                        >
                            Conductor
                        </Button>
                    </ButtonGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Correo electrónico
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
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
                    <Button color="primary">
                        Iniciar sesión
                    </Button>
                </FormGroup>
            </Form>
        </div>

    )
}