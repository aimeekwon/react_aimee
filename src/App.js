import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/pages/Home.jsx";

import IntroPage from "./components/pages/IntroPage.jsx";
import PortPage from "./components/pages/PortPage.jsx";
import YoutubePage from "./components/pages/YoutubePage.jsx";
import UnsplashPage from "./components/pages/UnsplashPage.jsx";
import MoviePage from "./components/pages/MoviePage.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header attr={"header__wrap nexon4 bg-blue"} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/intro" element={<IntroPage />}></Route>
          <Route path="/port" element={<PortPage />}></Route>
          <Route path="/youtube" element={<YoutubePage />}></Route>
          <Route path="/unsplash" element={<UnsplashPage />}></Route>
          <Route path="/movie" element={<MoviePage />}></Route>
        </Routes>
        <Footer attr={"footer__wrap nexon4 bg-blue"} />
      </BrowserRouter>
    </div>
  );
};

export default App;
