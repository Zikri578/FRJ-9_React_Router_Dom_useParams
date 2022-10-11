import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function NotFound() {

    const NotFound = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '42px',
    }
    return (
        <div className="not_found" style={NotFound}>
            <h1>Opppsss... 404 Not Found</h1>
        </div>
    )
}