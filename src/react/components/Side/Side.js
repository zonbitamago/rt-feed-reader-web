import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Side.css";
import Menus from "../Menus/Menus";
import Time from "../Time/Time";

class Side extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Side">
        <div className="Side-Top">
          <Menus store={this.props.store} />
        </div>
        <div className="Side-Bottom">
          <Time />
        </div>
      </div>
    );
  }
}

Side.propTypes = { store: PropTypes.object };

Side.defaultProps = {};

export default Side;
