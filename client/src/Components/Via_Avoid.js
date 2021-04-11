import React, { useState } from "react";
import direction from "../photos/sign.svg";

export default function ViaAvoid() {
  const [viaState, setviaState] = useState(0);
  return (
    <div>
      <div
        className="via"
        onClick={() => {
          viaState ? setviaState(0) : setviaState(1);
        }}
      >
        <img className="image" alt={direction} src={direction}></img>
        <span>Via / Avoid</span>
      </div>
      <div className="via_content" style={{ display: viaState ? "flex" : "none" }}>
        <div className="via_content_first">
          <select className="inpt">
            <option value="">
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
