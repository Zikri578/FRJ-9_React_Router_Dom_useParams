import React from "react";

export default function Footer() {

    const foot = {
        width: "100vw",
        height: 100,
        color: "white",
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15
    }

    const div = {
        width: "100%",
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        gap: 20
    }

    const head = {
        color: 'white'
    }

    return (
        <footer style={foot}>
            <div style={div}>
                <h1 style={head}>&copy; {new Date().getFullYear()} Copyright: Muhammad Zikri</h1>
            </div>
        </footer>
    )
}