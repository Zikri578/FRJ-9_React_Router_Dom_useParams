import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
    // // nav
    const nav = {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        color: 'white'
    }

    // // div
    const div = {
        width: '100%',
        height: '100%',
        maxWidth: 900,
        display: 'flex',
        alignItems: 'center',
        gap: 100,
        margin: '0 auto',
    }

    // // menu
    const menu = {
        display: 'flex',
        gap: 100,
        color: 'black'
    }

    const head = {
        color: 'black'
    }

    return (
        <nav style={nav}>

            <div style={div}>

                <h1 style={head}>Muhammad Zikri</h1>
                <menu style={menu}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/blog'}>Blog</Link>
                </menu>

            </div>

        </nav>
    )
}