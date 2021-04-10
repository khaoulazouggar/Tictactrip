import React from "react";
import "../css/home.css";
import Destination from "../Components/destination";
import ViaAvoid from "../Components/Via_Avoid";
import Radios from "../Components/radios";
import Out from "../Components/out";
import Return from "../Components/return";
import Summary from "../Components/summary";
import Submit from "../Components/submit";

export default function Home() {
  return (
    <div data-aos="zoom-out" data-aos-duration="2000" className="home-image">
      <div data-aos="fade-left" data-aos-duration="3000" className="showcase-content">
        <div className="barre_recherche">
          {/* Destination section */}
          <Destination />
          {/* Via / Avoid section */}
          <ViaAvoid />
          {/* Radios section */}
          <Radios />
          {/* Out /Return section */}
          <div className="out_return">
            {/* Out section */}
            <Out />
            {/* Return section */}
            <Return />
          </div>
          <hr className="hr" />
          {/* passenger-summary section */}
          <div>
            <button className="passenger-summary">
              <div>
                <div className="adult">1 adult (16+)</div>
                <div>
                  <span>Add railcards</span>
                </div>
              </div>
              <div></div>
            </button>
            {/* summary section */}
            <Summary />
          </div>
          {/* Submit section */}
          <Submit />
        </div>
        <div className="barre_text">
          <div className="description">
            <h2>
              <span>Explore Europe effortlessly by train and bus</span>
            </h2>
            <h3>
              <span>Save 61% on average when you book in advance*</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
