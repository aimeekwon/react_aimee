import React from "react";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <section id="moviesSection" className={props.attr}>
      <div className="movies__inner container">
        <div className="movies__text">
          <h3>MOVIE</h3>
          <p>더 다양한 이미지는 </p>
          <Link href="#">more</Link>
        </div>
        <div className="movies__item">
          <div className="movies__img">
            <img src="./assets/images/movie/movie01.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie//movie02.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie/movie01.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie/movie02.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie/movie01.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie/movie01.jpg" alt="" />
          </div>
          <div className="movies__img">
            <img src="./assets/images/movie/movie01.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;
