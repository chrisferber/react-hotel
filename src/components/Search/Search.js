import React, { Component } from "react";
import "../App/App.css";
import { connect } from 'react-redux';

// Get and then map the hotel data from our jason file and display to the DOM

class Search extends Component {

  render() {
    return (
      <div className="search-container">
        <div className="search-label">
          <span>
            Please select a guest reservation and company from the tables below
            to populate our guest message.
          </span>
        </div>
        <div className="selected-options">
          <div className="selected-guest">
            <span className="selected-option-label">Selected Guest ID: </span>
            {this.props.reduxState.guestsReducer.id ? <span>{this.props.reduxState.guestsReducer.id}</span> : <span>N/A</span>}
          </div>
          <div className="selected-company">
            <span className="selected-option-label">Selected Company ID: </span>
            {this.props.reduxState.hotelsReducer.id ? <span>{this.props.reduxState.hotelsReducer.id}</span> : <span>N/A</span>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Search);
