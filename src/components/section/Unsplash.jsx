import React from "react";
import { Link } from "react-router-dom";

const Unsplash = (props) => {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>UNSPLASH</h3>
          <p> FOREST VIEW </p>
          <Link href="#">more</Link>
        </div>

        <div className="unsplash__item">
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash01.jpg" alt="" />
          </div>
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash02.jpg" alt="" />
          </div>
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash01.jpg" alt="" />
          </div>
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash02.jpg" alt="" />
          </div>
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash01.jpg" alt="" />
          </div>
          <div className="unsplash__img">
            <img src="./assets/images/unsplash/unsplash02.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsplash;
