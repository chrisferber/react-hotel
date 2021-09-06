import React, { Component } from "react";
import { connect } from 'react-redux';
import "../../App/App.css";

class Guest extends Component {

    timestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000);

        const month = date.getMonth();

        const day = date.getDay();

        const year = date.getFullYear();
    
        const hours = date.getHours();
    
        const minutes = date.getMinutes();
    
        const seconds = date.getSeconds();
    
        const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    
        return formattedDate
    }

    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        roomNumber: this.props.roomNumber,
        startTimestamp: this.timestampToDate(this.props.startTimestamp),
        endTimestamp: this.timestampToDate(this.props.endTimestamp),
    }

    handleSelectGuest = (guest) => {
        this.props.dispatch({ type: 'SELECT_GUEST', payload: guest })
    }

    render() {
        const classes = this.state.id === this.props.reduxState.guestsReducer.id ? 'guest-row active' : 'guest-row';
        return (
            <tr onClick={() => this.handleSelectGuest(this.state)} className={classes}>
                <td>
                    {this.props.id}
                </td>
                <td>
                    {this.props.firstName}
                </td>
                <td>
                    {this.props.lastName}
                </td>
                <td>
                    {this.props.roomNumber}
                </td>
                <td>
                    {this.timestampToDate(this.props.startTimestamp)}
                </td>
                <td>
                    {this.timestampToDate(this.props.endTimestamp)}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(Guest);