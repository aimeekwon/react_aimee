import React from "react";
import Contents from "../layout/Contents";
import Unsplash from "../section/Unsplash";
import Youtube from "../section/Youtube";
import Portfolio from "../section/Portfolio";
import Intro from "../section/Intro";
import Slider from "../section/Slider";
import Movie from "../section/Movie";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr="slider__wrap nexon4 section container" />
        <Intro attr="intro__wrap nexon4 section container" />
        <Portfolio attr="port__wrap nexon4 section container" />
        <Youtube attr="youtube__wrap nexon4 section container" />
        <Unsplash attr="unsplash__wrap nexon4 section container" />
        <Movie attr="movie__wrap nexon4 section container" />
      </Contents>
    </>
  );
};

export default Home;
