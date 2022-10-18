// @vendors
import React from "react";
import { Button, FormGroup, Label, FormFeedback } from "reactstrap";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// @components
import RequestForm from '../../request'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'El nombre es muy corto')
        .max(20, 'El nombre es muy largo')
        .required('Este campo es requerido'),
    email: Yup.string().email('Debes ingresar un email válido').required('Este campo es requerido'),
    password: Yup.string()
        .min(5, 'La contraseña debe tener entre 5 y 10 caracteres')
        .max(10, 'Contraseña demasiado larga')
        .required('Este campo es requerido'),
});

export default function PersonForm({ showRequest, setShowRequest }) {
    function sendFormPerson(values) {
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
                email: '',
                password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                sendFormPerson(values);
            }}
        >
            {({ errors, touched }) => (
                <Form
                    className="form"
                >
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