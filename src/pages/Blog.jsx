import React from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
    // state
    const [content, setContent] = useState([]);

    const blog = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        margin: '50px 0px'
    }

    const tab = {
        width: '30%',
        padding: '10px',
        backgroundColor: 'white',
        boxShadow: '4px 5px 6px',
        display: 'flex',
        gap: '5px',
        justifyContent: 'center'
    }

    const head = {
        fontWeight: 250,
        color: 'black'
    }

    const parag = {
        color: 'black'
    }

    const link = {
        justifyContent: 'center'
    }

    // component di mount
    useEffect(() => {

        // hit api json placeholder
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.info(res.data)
                setContent(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <MainLayout>
            <h1>Halaman Blog</h1>
            <div className="blog_wrapper" style={blog}>
                {content.map((item) => {
                    return (
                        <span key={item.id} style={tab}>
                            <h3 style={head}>{item.title}</h3>
                            <p style={parag}>{item.body}</p>

                            <Link to={`/blog/${item.id}/${item.title}`} style={link}> Detail</Link>
                        </span>
                    )
                })}
            </div>
        </MainLayout>
    )
}