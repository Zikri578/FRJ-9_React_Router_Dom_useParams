# FRJ-9_Router_Dom_useParams
Apa itu Router Dom Use Params?
  - Router DOM <b>Use Params</b> menggunakan nilai parameter URL untuk menentukan apa yang ditampilkan dalam komponen yang dirender oleh rute dinamis. Misalnya, komponen Artikel mungkin perlu menampilkan judul artikel saat ini.
  
  Sumber : https://www.codecademy.com/courses/learn-react-router/lessons/intermediate-react-react-router/exercises/useparams, dan https://refine.dev/blog/react-router-useparams/
  
  Contoh penggunaan use Params yaitu :
  
    //menambahkan Browser Router di file : main.jsx
    import {BrowserRouter} from "react-router-dom"
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        // menambahkan Browser Router
        <BrowserRouter>
          <App />
        </BrowserRouter>
        //akhir dari Browser Router
      </React.StrictMode>
    )
        
    //membuat Route di file App.jsx
    import React from 'react'
    import {Routes, Route} from "react-router-dom" -> menambahkan
    import Blog from './pages/Blog.jsx'
    import BlogId from './pages/BlogId.jsx'
    import BlogDetails from './pages/BlogDetails.jsx'
    
    //merupakan component yang bernama App
    export dafault function App(){
      return(
        // merupakan router dom use params
        <Routes>
          <Route path="/blog" element={<Blog/>}>Blog</Route>
          <Route path="/blog/:id" element={<BlogID/>}>Blog ID</Route>
          <Route path="/blog/:id/:slug" element={<BlogDetails/>}> Blog Detail</Route>
        </Routes>
      )
    }
