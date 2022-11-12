import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Blog, HomePage, Blogpost, Error } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/blog/:id" element={<Blogpost />}></Route>
        <Route path="/Error" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
