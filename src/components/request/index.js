// @vendors
import React from "react";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

export default function RequestForm() {
    return (
        <div className="layout-side-form">
            <div className="title">
                Solicita un Chuber
            </div>
            <Form
                className="form"
            >
                <FormGroup>
                    <Label for="destination">
                        ¿A dónde quiéres ir?
                    </Label>
                    <Input
                        id="destination"
                        name="destination"
                        type="text"
                    />
                </FormGroup>
                <FormGroup className="form-actions">
                    <Button color="primary">
                        Buscar Chuber
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}