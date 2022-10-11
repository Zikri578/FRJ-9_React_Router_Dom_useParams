import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function BlogId() {

    const { id } = useParams();


    return (
        <MainLayout>
            <h1>Halaman Blog Id : {id}</h1>

        </MainLayout>
    )
}