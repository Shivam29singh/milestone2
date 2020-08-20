import React, { Component } from "react";
import "./notification.css";
import { Link } from "react-router-dom";

class NotificationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <ul id="navbar">
            <li className="navbar-items">
              {" "}
              <div className="notification-bar" style={{ textAlign: "center" }}>
                Total products in invetory: <span>{this.props.total}</span>
              </div>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default NotificationBar;
