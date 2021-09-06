import React from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";

const Alert = (classes) => {
  const alert = useAlert();
  const message = useSelector((state) => state.messagesReducer.message);

  return (
    <div
      className={classes.classes}
      onClick={() => {
        alert.show(message);
      }}
    >
      Send Message
    </div>
  );
};

export default Alert;
