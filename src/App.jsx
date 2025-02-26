
// import './App.css'


// Import degli elementi gestione rotte
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import GlobalContext from './contexts/GlobalContext';
import { useState, useEffect } from 'react';
import axios from "axios";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import PostCreatePage from "./pages/PostCreatePage";
import PostsDetailPage from "./pages/PostsDetailPage";


function App() {

  const [posts, setPosts]= useStatae([])

  function fetchPosts() {
    axios.get("http://localhost:3000/posts")
    .then(res => setPosts(res.data))
    .catch(err => console.log('errore', err))
  }


  return(
    <GlobalContext.provider value={{posts}}>
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/posts'>
          <Route index element={<PostsPage />} />
          <Route path="create" element={<PostCreatePage />} />
          <Route path=":id" element={<PostsDetailPage />} />
        </Route>

      </Route>

    </Routes>
    </BrowserRouter>
    </GlobalContext.provider>
  )
}

export default App
