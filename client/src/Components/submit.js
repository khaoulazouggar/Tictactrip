import React from "react";
import arrow from "../photos/right-arrow.svg";

export default function Submit() {
  return (
    <div>
      <button className="submit">
        <span>Get times &amp; tickets</span>
        <div className="submit_image">
          <img className="image img" alt={arrow} src={arrow}></img>
        </div>
      </button>
    </div>
  );
}
