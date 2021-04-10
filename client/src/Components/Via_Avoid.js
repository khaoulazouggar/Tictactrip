import React from "react";
import direction from "../photos/sign.svg";

export default function ViaAvoid() {
  return (
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
  );
}
