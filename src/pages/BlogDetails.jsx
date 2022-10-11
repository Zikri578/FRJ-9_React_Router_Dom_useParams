import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function BlogDetails() {

    const { id, slug } = useParams();

    // state
    const [data, setData] = useState();

    // component di mount
    useEffect(() => {

        // hit api json placeholder
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.info(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (!data) {
        return (
            <MainLayout>
                Loading...
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{data.id}</h1>
            <p>{data.body}</p>
        </MainLayout>
    )
}