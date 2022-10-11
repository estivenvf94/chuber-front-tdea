import React, { useState } from "react";

export default function Home() {
    const [changeName, setChangeName] = useState(false)
    return (
        <div>
            Hola {changeName ? 'Nataly' : 'Estiven'}!

            <button onClick={() => setChangeName(!changeName)}>Cambiar nombre</button>
        </div>
    )
}