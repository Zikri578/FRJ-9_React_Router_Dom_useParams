import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {

    const mainLayout = {
        width: '100vw',
        minHeight: '100vh'
    }
    const div = {
        width: '100%',
        maxWidth: 1500,
        padding: '40px 20px',
        margin: '0 auto',
    }

    return (
        <main className="main_layout" style={mainLayout}>
            <Navbar />
            <div className="content" style={div}>
                <h1>Selamat Datang di </h1>
                {children}
            </div>
            <Footer />
        </main>
    )
}