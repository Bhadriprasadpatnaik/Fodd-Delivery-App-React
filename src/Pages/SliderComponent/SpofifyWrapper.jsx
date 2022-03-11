import React from "react";

const SpofifyWrapper = () => {
  return (
    <>
      <section id="wrapper-Block">
        <article>
          <div className="wrapperLeft">
            <h4>#SPOTIFYWRAPPED</h4>
            <h1 className="heading">
              2021 Wrapped is <br />
              ready.
            </h1>
            <p>
              But it’s only available in the Spotify app.
              <br /> Download it now to discover more.
            </p>
            <div className="image-Block">
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg"
                  alt="Download on the App Store"
                  className="appStore"
                />
              </a>
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg"
                  alt="Get it on Google Play"
                  className="play"
                />
              </a>
            </div>
            <a href="#" className="text">
              Listen to 2021 highlights here.
            </a>
          </div>
          <div className="wrapperRight">
            <figure></figure>
          </div>
        </article>
      </section>
    </>
  );
};

export default SpofifyWrapper;
