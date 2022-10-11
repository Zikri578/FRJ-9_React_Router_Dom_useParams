import React from "react";
import { Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BlogId from "./pages/BlogId";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}> Home</Route>
      <Route path="/about" element={<About />}> About</Route>
      <Route path="/contact" element={<Contact />}> Contact</Route>
      <Route path="*" element={<NotFound />}>N ot Found</Route>

      {/* Menggunakan Params */}
      <Route path="/blog" element={<Blog />}> Blog </Route>
      <Route path="/blog/:id" element={<BlogId />}> Blog </Route>
      <Route path="/blog/:id/:slug" element={<BlogDetails />}> Blog Detail</Route>

    </Routes>
  )
}