import React, { Component } from "react";
import "../App/App.css";
import Guest from "./Guest/Guest";

const data = require("../../data/guests.json");

// Get and then map the hotel data from our jason file and display to the DOM

class Guests extends Component {
  render() {
    return (
      <div className="guests-container">
        <table>
          <thead>
            <tr className="table-headers">
              <th>Guest ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Room Number</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {data.reservations.map((data1, key) => {
              return (
                <Guest
                  key={key}
                  id={data1.id}
                  firstName={data1.firstName}
                  lastName={data1.lastName}
                  roomNumber={data1.reservation.roomNumber}
                  startTimestamp={data1.reservation.startTimestamp}
                  endTimestamp={data1.reservation.endTimestamp}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Guests;
