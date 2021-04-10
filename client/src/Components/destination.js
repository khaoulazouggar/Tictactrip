import React from 'react'

export default function Destination() {
    return (
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
    )
}
