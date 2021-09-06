import React, { Component } from "react";
import "../App/App.css";
import Hotel from "./Hotel/Hotel";

const hotelData = require("../../data/hotels.json");

// Get and then map the hotel data from our jason file and display to the DOM

class Hotels extends Component {
  render() {
    return (
      <div className="hotels-container">
        <table>
          <thead>
            <tr className="table-headers">
              <th>Hotel ID</th>
              <th>Company</th>
              <th>City</th>
              <th>Timezone</th>
            </tr>
          </thead>
          <tbody>
            {hotelData.hotels.map((data, key) => {
              return (
                <Hotel
                  key={key}
                  id={data.id}
                  company={data.company}
                  city={data.city}
                  timezone={data.timezone}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Hotels;
