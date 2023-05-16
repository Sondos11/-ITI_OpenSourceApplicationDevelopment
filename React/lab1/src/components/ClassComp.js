import "./ClassComp.css";
import { Component } from "react";
class ElementsClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  reset = () => {
    this.setState({ name: "" });
  };
  getData = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div className="card">
        <input type="text" value={this.state.name} onChange={this.getData} />
        <p>Data: {this.state.name}</p>
        <br />
        <input type="button" value="Reset" onClick={this.reset} />
      </div>
    );
  }
}
export default ElementsClass;
