import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Trending from "./Trending";
import Header from "./Header";
import Browse from "./Browse";
import Detail from "./Detail";

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Trending />} />
          <Route path='/about' element={<About />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
