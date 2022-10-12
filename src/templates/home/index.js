// @vendors
import React, { useState } from "react";
import CreateForm from "../../components/create";
import LoginForm from "../../components/login";

// @layouts
import LayoutGeneric from "../../layout/generic";

// @images
const BgLogin = require('../../assets/images/drive.jpg')

export default function Home() {
    const [loginForm, setLoginForm] = useState(false)
    return (
        <LayoutGeneric>
            <div className="layout-side">
                <header className="layout-side-header">
                    <div className="layout-side-header-logo">
                        Chuber
                    </div>
                </header>
                {loginForm && (
                    <LoginForm
                        setLoginForm={() => setLoginForm(false)}
                    />
                )}
                {!loginForm && (
                    <CreateForm
                        setLoginForm={() => setLoginForm(true)}
                    />
                )}
            </div>
            <div className="layout-image">
                <img
                    src={BgLogin}
                    alt='Persona conduciendo'
                />
            </div>
        </LayoutGeneric>
    )
}