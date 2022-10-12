import React from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

export default function LoginForm({ setLoginForm }) {
    return (
        <div className="layout-side-form">
            <div className="title">
                Ingresa a tu cuenta 
            </div>
            <div className="parag">
                ¿No tienes una cuenta?
                <div
                    className="link-false"
                    onClick={setLoginForm}
                >
                    Crea una
                </div>
            </div>
            <Form
                className="form"
            >
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