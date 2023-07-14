import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import Member from "./components/pages/Member.jsx";
import Port from "./components/pages/Port.jsx";
import Youtube from "./components/pages/Youtube.jsx";
import Unsplash from "./components/pages/Unsplash.jsx";
import Movie from "./components/pages/Movie.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header attr={"header__wrap nanum7 bg-blue"} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/youtube" element={<Youtube />}></Route>
          <Route path="/unsplash" element={<Unsplash />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
        </Routes>
        <Footer attr={"footer__wrap nanum7 bg-blue"} />
      </BrowserRouter>
    </div>
  );
};

export default App;
