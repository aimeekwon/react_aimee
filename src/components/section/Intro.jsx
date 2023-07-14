import React from "react";

const Intro = (props) => {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">커리큘럼 소개</h3>

      <div className="intro__inner container">
        <div className="intro__title">
          <span>frontend</span>
          <h3>
            FRONTEND
            <br />
            DEVELOPER
          </h3>

          <p>STUDY GUIDE</p>
        </div>
        <div className="intro__desc">
          <div>
            <h4 className="icon-bg1">React.js</h4>
            <p>REACT 과정입니다</p>
          </div>
          <div>
            <h4 className="icon-bg2">Vue.js</h4>
            <p>Vue 과정입니다</p>
          </div>
          <div>
            <h4 className="icon-bg3">Next.js</h4>
            <p>Next 과정입니다</p>
          </div>
          <div>
            <h4 className="icon-bg4">html/css</h4>
            <p>html/css 과정입니다</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
