import "./App.css";
import Guests from "../Guests/Guests";
import Hotels from "../Hotels/Hotels";
import Search from "../Search/Search";
import MessagesList from "../MessagesList/MessagesList";

import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Chris' Hotel App</h2>
        <Search />
        <div className="tables-container">
          <Guests />
          <Hotels />
          {this.props.reduxState.guestsReducer.id &&
            this.props.reduxState.hotelsReducer.id && <MessagesList />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(App);
