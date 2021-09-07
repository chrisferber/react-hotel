import React, { Component } from "react";
import { connect } from "react-redux";

import Message from "./Message/Message";
import Alert from "./Alert/Alert";

import "../App/App.css";

const welcomeMessage = require("../../message-templates/welcome.json");
const thankyouMessage = require("../../message-templates/thank-you.json");
const customMessage = require("../../message-templates/custom-template.json");

class MessagesList extends Component {
  handleSendMessage = () => {
    console.log('did the thing');
  };

  render() {
    const classes =
      this.props.reduxState.guestsReducer.id &&
      this.props.reduxState.hotelsReducer.id &&
      this.props.reduxState.messagesReducer.selected > -1
        ? "send-message-btn enabled"
        : "send-message-btn";

    return (
      <>
      <div className="messages-list-header">
          <span>Please select the message you would like to use by clicking on one of the options below.</span>
      </div>
        <div className="messages-list-container">
          <Message data={welcomeMessage} />
          <Message data={thankyouMessage} />
          <Message data={customMessage} />
        </div>
        <Alert classes={classes} />
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(MessagesList);
