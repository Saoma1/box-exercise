import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import NewBoxFrom from "./NewBoxFrom";
import Box from "./Box";

export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: "100", height: "100", color: "red", id: uuid() }],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  addBox(box) {
    console.log(box);
    const newBox = { ...box, id: uuid() };
    this.setState((state) => ({
      boxes: [...state.boxes, newBox],
    }));
  }

  deleteBox(id) {
    this.setState((state) => ({
      boxes: [...state.boxes.filter((box) => box.id !== id)],
    }));
  }

  render() {
    return (
      <div className="BoxList">
        <h1>Box Maker</h1>
        <NewBoxFrom func={this.addBox} />
        {this.state.boxes.map((box) => {
          return <Box width={box.width} height={box.height} color={box.color} key={box.id} id={box.id} func={this.deleteBox} />;
        })}
      </div>
    );
  }
}

export default BoxList;
