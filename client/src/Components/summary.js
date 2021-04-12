import React, { useState} from "react";
import remove from "../photos/close.svg";


export default function Summary(props) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [count, setcount] = useState(0);

  const [disable, setdisable] = useState("Select a railcard");
  const [child, setchild] = useState(0);
  const handeleclick = () => {
    if (count < 3) setcount(count + 1);
  };

  return (
    <div className="summary_content">
      <div>
        <div>
          <span>Adults (16+)</span>
          <div>
            <select className="inpt inpt1">
              {/* <option value="0">0</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        <div className="inline_summary">
          <div className="in_inline_summary">
            <span>Children (0-15)</span>
            <select
              className="inpt inpt1"
              onChange={(e) => {
                setchild(e.target.value);
              }}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div className="in_inline_summary">
            <span style={child === 0 ? { color: "#B2B2B2" } : {}}>Age of children</span>
            {child === 0 ? (
              <select className="inpt inpt1" disabled style={{ backgroundColor: "#EBEBEB" }}></select>
            ) : (
              [...Array(child)].map((child, key) => (
                <select className="inpt inpt1" key={key}>
                  <option value="2020-04-10">{console.log(child)}0-2</option>
                  <option value="2017-04-10">3-4</option>
                  <option value="2011-04-10">5-15</option>
                </select>
              ))
            )}
          </div>
        </div>
        {[...Array(count)].map((count, key) => (
          <div className="railcard" key={key}>
            <select
              className="inpt inpt2"
              onChange={(e) => {
                setdisable(e, key);
              }}
              key={key}
            >
              <option>Select a railcard</option>
              <optgroup label="Popular Railcards">
                <option>16-17 Saver</option>
                <option>16-25 Railcard</option>
                <option>26-30 Railcard</option>
                <option>Senior Railcard</option>
                <option>Network Railcard</option>
                <option>Family &amp; Friends Railcard</option>
                <option>Two Together Railcard</option>
                <option>Disabled Persons Railcard</option>
                <option>Disabled Child Railcard</option>
                <option>Veterans Railcard</option>
              </optgroup>
              <optgroup label="Other Railcards">
                <option>Annual Gold Card</option>
                <option>Cambrian Railcard</option>
                <option>Club 50 Web - Greater Anglia</option>
                <option>Club 50 Web - ScotRail</option>
                <option>Cotswold Line Railcard</option>
                <option>Dales Railcard</option>
                <option>Devon &amp; Cornwall Railcard</option>
                <option>Esk Valley Railcard</option>
                <option>GroupSave Discount</option>
                <option>Heart of Wales Railcard</option>
                <option>Highland Railcard : North Scotland</option>
                <option>Highland Railcard : West Scotland</option>
                <option>HM Forces Railcard</option>
                <option>Jobcentre Plus Travel Discount Card</option>
                <option>MY CUMBRIA CARD</option>
                <option>Pembrokeshire Railcard</option>
                <option>Season Loyalty Discount</option>
                <option>South Yorkshire 16-18 Travel Pass</option>
                <option>SY Concession Disabled</option>
                <option>SY Concession Senior</option>
                <option>TfW 18 Saver Railcard</option>
                <option>TfW Annual Season Railcard</option>
                <option>TfW Concessionary Bus Pass</option>
                <option>TfW Student Railcard</option>
                <option>Under 25 Advance</option>
                <option>Valleys Senior Railcard</option>
                <option>Valleys Student Railcard</option>
                <option>West Yorkshire Disabled Concessionary Discount</option>
                <option>West Yorkshire Senior Concessionary Discount</option>
                <option>WY Student Pass</option>
                <option>Young Scot National Entitlement Card</option>
              </optgroup>
            </select>
            <select
              className="inpt inpt3"
              disabled={disable === "Select a railcard" ? true : false}
              style={disable === "Select a railcard" ? { backgroundColor: "#EBEBEB" } : {}}
            >
              {disable === "Select a railcard"
                ? ""
                : numbers.map((number, key) => (
                    <option value={number} key={key}>
                      {number}
                    </option>
                  ))}
            </select>
            <img className="image" alt={remove} src={remove}></img>
          </div>
        ))}
        <div>
          <span></span>
          <span
            className="railcard_span"
            onClick={() => {
              handeleclick();
            }}
          >
            Add railcard {count ? "(" + count + " of 3)" : ""}
          </span>
        </div>
        <div>
          <button
            className="done"
            onClick={() => {
              props.data.setsummaryState(0);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
