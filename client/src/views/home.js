import React, { useState } from "react";
import "../css/home.css";
import arrow1 from "../photos/right-arrow2.svg";
import Destination from "../Components/destination";
import ViaAvoid from "../Components/Via_Avoid";
import Radios from "../Components/radios";
import Out from "../Components/out";
import Return from "../Components/return";
import Summary from "../Components/summary";
import Submit from "../Components/submit";

export default function Home() {
  const [summaryState, setsummaryState] = useState(0);
  const [radioState, setradioState] = useState(1);
  return (
    <div data-aos="zoom-out" data-aos-duration="2000" className="home-image">
      <div data-aos="fade-left" data-aos-duration="3000" className="showcase-content">
        <div className="barre_recherche">
          {/* Destination section */}
          <Destination />
          {/* Via / Avoid section */}
          <ViaAvoid />
          {/* Radios section */}
          <Radios data={{ radioState, setradioState }} />
          {/* Out /Return section */}
          <div className="out_return">
            {/* Out section */}
            <Out data={{ radioState, setradioState }} />
            {/* Return section */}
            <Return data={{ radioState, setradioState }} />
            <div className="season_div" style={{ display: radioState === 4 ? "block" : "none" }}>
              <div className="in_season_div">
                <span>Start date</span>
                <input disabled/>
                <img className="image img1" alt={arrow1} src={arrow1}></img>
              </div>
            </div>
          </div>
          <hr className="hr" style={{ display: radioState === 4 ? "none" : "flex" }} />
          {/* passenger-summary section */}
          <div style={{ display: radioState === 4 ? "none" : "flex" }}>
            <button
              className="passenger-summary"
              onClick={() => {
                summaryState ? setsummaryState(0) : setsummaryState(1);
              }}
            >
              <div>
                <div className="adult">1 adult (16+)</div>
                <div>
                  <span>Add railcards</span>
                </div>
              </div>
              <div>
                <img className="image img1" alt={arrow1} src={arrow1}></img>
              </div>
            </button>
            {/* summary section */}
            <div className="summary" style={{ display: summaryState ? "inline" : "none" }}>
              <Summary data={{ setsummaryState }} />
            </div>
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
