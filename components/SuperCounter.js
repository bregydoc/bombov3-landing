import React, { Component } from "react";
import PropTypes from "prop-types";
import Waypoint from "react-waypoint";

class SuperCounter extends Component {
  render() {
    return (
      <Waypoint
        onEnter={this._handleWaypointEnter}
        onLeave={this._handleWaypointLeave}
      >
        {this.props.children}
      </Waypoint>
    );
  }
}

export default SuperCounter;
