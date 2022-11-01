// @vendors
import React, { useEffect, useState } from "react";
import { Button, FormGroup, ButtonGroup, Label, FormFeedback, Input } from "reactstrap";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Debes ingresar un email válido').required('Este campo es requerido'),
    password: Yup.string()
        .min(5, 'La contraseña debe tener entre 5 y 10 caracteres')
        .max(10, 'Contraseña demasiado larga')
        .required('Este campo es requerido'),
})

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
                        <Input
                            id="type"
                            name="type"
                            type="text"
                            defaultValue={rSelected}
                            hidden
                        />
            <Formik
                validateOnChange={false}
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={value => console.log(value)}
            >
                {({ errors, touched }) => (
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
                            <Field
                                id="email"
                                name="email"
                                type="email"
                            />
                            {errors.email && touched.email
                                ? (
                                    <FormFeedback className="form-alert">{errors.email}</FormFeedback>
                                )
                                : null
                            }
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Contraseña
                            </Label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                            />
                            {errors.password && touched.password
                                ? (
                                    <FormFeedback className="form-alert">{errors.password}</FormFeedback>
                                )
                                : null
                            }
                        </FormGroup>
                        <FormGroup className="form-actions">
                            <Button color="primary" type="submit">
                                Iniciar sesión
                            </Button>
                        </FormGroup>
                    </Form>
                )}
            </Formik>
        </div>

    )
}