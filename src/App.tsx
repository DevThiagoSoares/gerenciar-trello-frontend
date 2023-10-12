import React from "react";
import AppRoutes from "./routes/routes";
import { Alert } from "./Components/Alert";


export function App() {
    return (
        <>
            <AppRoutes />
            <Alert />
        </>

    )
}
