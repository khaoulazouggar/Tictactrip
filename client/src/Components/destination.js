import React from "react";
// import axios from "axios";

export default function Destination() {
  // const [dest, setdest] = useState([]);
  // useEffect(() => {
  //   axios.get("https://api.comparatrip.eu/cities/popular/5").then((res) => {
  //     // res.map()
  //     setdest(res.data);
  //   });
  // },[]);
  return (
    <div>
      <div className="destination">
        <label className="From_To">From</label>
        <input className="inpt" type="search" placeholder="Enter origin station..." />
        {/* <select className="inpt">
          {dest.map((des, key) => (
            <option value={des} key={key}>
              {des.unique_name}
            </option>
          ))}
        </select> */}
      </div>
      <div className="destination">
        <label className="From_To">To</label>
        <input className="inpt" type="search" placeholder="Enter destination station..." />
      </div>
    </div>
  );
}
