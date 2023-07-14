import React from "react";
import { Link } from "react-router-dom";

function Youtube(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>YOUTUBE</h3>
          <p>HEALTHY LIFE</p>
          <Link href="/movie">more</Link>
        </div>
        <div className="youtube__item">
          <div className="you__play">
            <img src="./assets/images/youtube/you01.jpg" alt="" />
          </div>
          <div className="you__play">
            <img src="./assets/images/youtube/you02.jpg" alt="" />
          </div>
          <div className="you__play">
            <img src="./assets/images/youtube/you01.jpg" alt="" />
          </div>
          <div className="you__play">
            <img src="./assets/images/youtube/you02.jpg" alt="" />
          </div>
          <div className="you__play">
            <img src="./assets/images/youtube/you01.jpg" alt="" />
          </div>
          <div className="you__play">
            <img src="./assets/images/youtube/you02.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
