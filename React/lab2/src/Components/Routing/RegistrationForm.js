import React from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      age: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, age } = this.state;
    const newUser = { id, name, age };
    this.props.handleRegistration(newUser);
    this.setState({
      id: "",
      name: "",
      age: "",
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { id, name, age } = this.state;

    return (
      <div className="card register">
        <div className="card-header">Registration Form</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Enter ID"
                value={id}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter Age"
                value={age}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
