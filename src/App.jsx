import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Contact from  '../src/pages/Contact';
import Error from  '../src/pages/Error';
import Services from  '../src/pages/Services';
import About from  '../src/pages/About';
import Main from './pages/Main';

const App = () => {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/*" element={<Error/>}></Route>
       </Routes>
    </>
  )
}

export default App;

