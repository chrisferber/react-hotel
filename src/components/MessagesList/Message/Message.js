import React, { Component } from "react";
import { connect } from "react-redux";

import "../../App/App.css";

class Message extends Component {
  state = {
    message: this.props.data.message,
    selected: this.props.data.id,
  };

  handleSelectMessage = (msg) => {
    this.props.dispatch({ type: "SELECT_MESSAGE", payload: this.state });
  };

  cleanMessage = () => {
    const date = new Date();
    const hour = date.getHours();
    let updatedMessage = this.state.message;

    console.log("hour: ", hour);

    if (updatedMessage.includes("$$greeting")) {
      console.log("made inside first check");
      if (hour >= 12) {
        updatedMessage = updatedMessage.replace("$$greeting", "Good afternoon");
      } else {
        updatedMessage = updatedMessage.replace("$$greeting", "Good morning");
      }
    }

    if (updatedMessage.includes("$$firstName")) {
      updatedMessage = updatedMessage.replace(
        "$$firstName",
        this.props.reduxState.guestsReducer.firstName
      );
    }

    if (updatedMessage.includes("$$roomNumber")) {
      updatedMessage = updatedMessage.replace(
        "$$roomNumber",
        this.props.reduxState.guestsReducer.roomNumber
      );
    }

    if (updatedMessage.includes("$$company")) {
      updatedMessage = updatedMessage.replace(
        "$$company",
        this.props.reduxState.hotelsReducer.company
      );
    }

    this.setState({
      ...this.state,
      message: updatedMessage,
    });
  };

  componentDidMount() {
    this.cleanMessage();
  }

  render() {
    const classes =
      this.state.selected === this.props.reduxState.messagesReducer.selected
        ? "message-container active"
        : "message-container";

    return (
      <div
        className={classes}
        onClick={() => this.handleSelectMessage(this.state)}
      >
        <span>{this.state.message}</span>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(Message);
