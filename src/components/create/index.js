// @vendors
import React, { useState } from "react";
import { Button, FormGroup, ButtonGroup } from "reactstrap";

// @components
import DriverForm from "./driver";
import PersonForm from "./person";

export default function CreateForm({ setLoginForm }) {
    const [rSelected, setRSelected] = useState(1)
    const [showRequest, setShowRequest] = useState(false)

    return (
        <div className="layout-side-form">
            {!showRequest && (
                <>
                    <div className="parag">
                        ¿Ya tienes una cuenta?
                        <div
                            className="link-false"
                            onClick={setLoginForm}
                        >
                            Inicia sesión
                        </div>
                    </div>
                    <div className="title">
                        Crea tu cuenta
                    </div>

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
                </>
            )}
            {rSelected === 1 && (
                <PersonForm
                    setShowRequest={() => setShowRequest(true)}
                    showRequest={showRequest}
                />
            )}
            {rSelected === 2 && (
                <DriverForm
                    setShowRequest={() => setShowRequest(true)}
                    showRequest={showRequest}
                />
            )}
        </div >
    )
}