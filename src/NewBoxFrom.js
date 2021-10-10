import React, { Component } from "react";
import "./input.css";

export class NewBoxFrom extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.func(this.state);
    this.setState({ width: "", height: "", color: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input id="width" value={this.state.width} onChange={this.handleChange} name="width" type="number" placeholder="width in px" />
          <label htmlFor="height">Height</label>
          <input id="height" value={this.state.height} onChange={this.handleChange} name="height" type="number" placeholder="height  in px" />
          <label htmlFor="color">Color</label>
          <input id="color" value={this.state.color} onChange={this.handleChange} name="color" type="text" placeholder="color" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBoxFrom;
