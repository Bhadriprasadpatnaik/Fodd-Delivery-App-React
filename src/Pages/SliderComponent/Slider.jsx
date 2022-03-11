import React from "react";
import Footer from "./Footer";
import Slider3 from "./Slider3";
import "./sliderComponent.css";
import SpofifyWrapper from "./SpofifyWrapper";

const Slider = () => {
  return (
    <>
      <section id="slider-block">
        <article>
          <div className="sliderLeft">
            <h4>SPOTIFY PREMIUM</h4>
            <h1>Get 3 months of Premium for free</h1>
            <p className="enjoy">
              Enjoy ad-free music listening, offline playback, and more. <br />
              Cancel anytime.
            </p>
            <button>Get 3 months free</button>
            <p className="copyWrite">
              Individual plan only. ₹119/month after.
              <a href="#"> Terms and conditions apply.</a>
              Open only to users who haven't already tried Premium. Offer ends
              31 December 2021.
            </p>
          </div>
          <div className="sliderRight">
            <figure></figure>
          </div>
        </article>
      </section>

      <section className="wrapped-block">
        <article>
          <div className="spotify-Block">
            <SpofifyWrapper />
          </div>
        </article>
      </section>

      <section className="wrapped-block">
        <article>
          <div className="spotify-Block">
            <Slider3 />
          </div>
        </article>
      </section>

      <section className="wrapped-block">
        <article>
          <div className="spotify-Block">
            <Footer />
          </div>
        </article>
      </section>
    </>
  );
};

export default Slider;
