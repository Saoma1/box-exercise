import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    // evt.preventDefault();
    this.props.func(this.props.id);
  }

  render() {
    const { width, height, color } = this.props;
    return (
      <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color }} className="Box">
        <div onClick={this.handleDelete} className="Delete">
          x
        </div>
      </div>
    );
  }
}

export default Box;
