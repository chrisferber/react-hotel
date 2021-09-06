import React, { Component } from "react";
import { connect } from 'react-redux';

import "../../App/App.css";

class Hotel extends Component {

    handleSelectHotel = (hotel) => {
        this.props.dispatch({ type: 'SELECT_HOTEL', payload: hotel })
    }

    state = {
        id: this.props.id,
        company: this.props.company,
        city: this.props.city,
        timezone: this.props.timezone,
    }

    render() {
        const classes = this.state.id === this.props.reduxState.hotelsReducer.id ? 'hotel-row active' : 'hotel-row';
        return (
            <tr onClick={() => this.handleSelectHotel(this.state)} className={classes}>
                <td>
                    {this.props.id}
                </td>
                <td>
                    {this.props.company}
                </td>
                <td>
                    {this.props.city}
                </td>
                <td>
                    {this.props.timezone}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
  });

export default connect(mapStateToProps)(Hotel);