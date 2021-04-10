import React from "react";
import "../css/home.css";
import direction from "../photos/sign.svg";

export default function Home() {
  return (
    <div data-aos="zoom-out" data-aos-duration="2000" className="home-image">
      <div data-aos="fade-left" data-aos-duration="3000" className="showcase-content">
        <div className="barre_recherche">
            {/* Destination section */}
            <div>
              <div className="destination">
                <label className="From_To">From</label>
                <input className="inpt" type="search" placeholder="Enter origin station..." />
              </div>
              <div className="destination">
                <label className="From_To">To</label>
                <input className="inpt" type="search" placeholder="Enter destination station..." />
              </div>
            </div>
            {/* Via / Avoid section */}
            <div>
              <div className="via">
                <img className="image" alt={direction} src={direction}></img>
                <span>Via / Avoid</span>
              </div>
              <div className="via_content">
                <div className="via_content_first">
                  <select className="inpt">
                    <option selected="" value="">
                      Select...
                    </option>
                    <option value="VIA">Go via</option>
                    <option value="AVOID">Avoid</option>
                  </select>
                </div>
                <div className="via_content_second">
                  <input className="inpt inpt1" placeholder="Enter station..." />
                </div>
              </div>
            </div>
            {/* Radios section */}
            <div className="radios">
              <div className="radio">
                <input type="radio" name="radio" />
                <span>One Way</span>
              </div>
              <div className="radio">
                <input type="radio" name="radio" />
                <span>Return</span>
              </div>
              <div className="radio">
                <input type="radio" name="radio" />
                <span>Open Return</span>
              </div>
              <div className="radio">
                <input type="radio" name="radio" />
                <span>Seasons</span>
              </div>
            </div>
            {/* Out /Return section */}
            <div className="out_return">
              {/* Out section */}
              <div className="out">
                <div className="out_span">
                  <span>Out</span>
                </div>
                <div className="day_div">
                  <span className="day">Today</span>
                  <span className="day">Tomorrow</span>
                </div>
                <input className="inpt inpt1" type="text" placeholder="Enter..." />
                <select className="inpt inpt1">
                  <option selected="" value="departAfter">
                    Leaving at
                  </option>
                  <option value="arriveBefore">Arriving by</option>
                </select>
                <div className="inline_div">
                  <div className="in_inline_div">
                    <select className="inpt inpt1">
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option selected="" value="15">
                        15
                      </option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                  </div>
                  <div className="in_inline_div">
                    <select className="inpt inpt1">
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option selected="" value="45">
                        45
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Return section */}
              <div className="return">
                <div className="return_span">
                  <span>Return</span>
                </div>
                <div className="day_div">
                  <span className="day">Same day</span>
                  <span className="day">Next day</span>
                </div>
                <input className="inpt inpt1" type="text" placeholder="Enter..." />
                <select className="inpt inpt1">
                  <option selected="" value="departAfter">
                    Leaving at
                  </option>
                  <option value="arriveBefore">Arriving by</option>
                </select>
                <div className="inline_div">
                  <div className="in_inline_div">
                    <select className="inpt inpt1">
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option selected="" value="15">
                        15
                      </option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                  </div>
                  <div className="in_inline_div">
                    <select className="inpt inpt1">
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option selected="" value="45">
                        45
                      </option>
                    </select>
                  </div>
                </div>
              </div>
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
                <div>
                </div>
              </button>
            </div>
            {/* Submit section */}
            <div>
              <button className="submit">
                <span>Get times &amp; tickets</span>
                <div></div>
              </button>
            </div>
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