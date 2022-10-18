// @vendors
import React from "react";
import { Button, FormGroup, Label, FormFeedback, Row, Col } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// @components
import RequestForm from '../../request'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'El nombre es muy corto')
        .max(20, 'El nombre es muy largo')
        .required('Este campo es requerido'),
    license: Yup.string()
        .min(6, 'La placa es muy corta')
        .max(6, 'La placa es muy larga')
        .required('Este campo es requerido'),
    brand: Yup.string().required('Este campo es requerido'),
    color: Yup.string().required('Este campo es requerido'),
    email: Yup.string().email('Debes ingresar un email válido').required('Este campo es requerido'),
    password: Yup.string()
        .min(5, 'La contraseña debe tener entre 5 y 10 caracteres')
        .max(10, 'Contraseña demasiado larga')
        .required('Este campo es requerido'),
});

export default function DriverForm({ showRequest, setShowRequest }) {
    function sendFormDriver(values) {
        console.log(values);
        setShowRequest()
    }

    if (showRequest) {
        return <RequestForm />
    }

    return (
        <Formik
            validateOnChange={false}
            initialValues={{
                name: '',
                license: '',
                brand: '',
                color: '',
                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                sendFormDriver(values)
            }}
        >
            {({ errors, touched }) => (
                <Form
                    className="form"
                >
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name">
                                    Nombre completo
                                </Label>
                                <Field
                                    name="name"
                                    id="name"
                                    type="text"
                                />
                                {errors.name && touched.name ? (
                                    <FormFeedback className="form-alert">{errors.name}</FormFeedback>
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="license">
                                    Placa del vehículo
                                </Label>
                                <Field
                                    name="license"
                                    id="license"
                                    type="text"
                                />
                                {errors.license && touched.license ? (
                                    <FormFeedback className="form-alert">{errors.license}</FormFeedback>
                                ) : null}
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="brand">
                                    Marca del vehículo
                                </Label>
                                <Field
                                    name="brand"
                                    id="brand"
                                    type="text"
                                />
                                {errors.brand && touched.brand ? (
                                    <FormFeedback className="form-alert">{errors.brand}</FormFeedback>
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="color">
                                    Color del vehículo
                                </Label>
                                <Field
                                    name="color"
                                    id="color"
                                    type="text"
                                />
                                {errors.color && touched.color ? (
                                    <FormFeedback className="form-alert">{errors.color}</FormFeedback>
                                ) : null}
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="email">
                            Correo electrónico
                        </Label>
                        <Field name="email" type='text' />
                        {errors.email && touched.email ? <FormFeedback className="form-alert">{errors.email}</FormFeedback> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Contraseña
                        </Label>
                        <Field name="password" type="password" />
                        {errors.password && touched.password ? <FormFeedback className="form-alert">{errors.password}</FormFeedback> : null}
                    </FormGroup>
                    <FormGroup className="form-actions">
                        <Button
                            color="primary"
                            type="submit"
                        >
                            Crear cuenta
                        </Button>
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}