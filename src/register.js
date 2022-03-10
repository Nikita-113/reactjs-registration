import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        contactno: "",
        password: "",
        confirmpassword: "",
        selectedState: "",
        selectedCity: "",
      },
      states: [],
      cities: [],
    };
  }

  componentDidMount() {
    this.setState({
      states: [
        {
          name: "Madhya Pradesh",
          cities: ["Bhopal", "Indore"],
        },
        {
          name: "Maharashtra",
          cities: ["Pune", "Mumbai"],
        },
      ],
    });
  }

  validate = () => {
    const { data } = this.state;

    if (data.confirmpassword !== data.password)
      alert("Password and confirm password is not same");
    else console.log(data);
  };

  changeState = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
    this.setState({
      cities: this.state.states.find((st) => st.name === e.target.value).cities,
    });
  };

  changeCity = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
    const ct = this.state.states.find(
      (st) => st.name === this.state.selectedState
    ).states;

    this.setState({
      selectedCity: e.target.value,
      cities: ct.find((ct) => ct.name === e.target.value).cities,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Registration Form</h1>
        <br></br>
        <div className="md-3 ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type={"this.value"}
            className="form-control"
            name="name"
            value={this.state.name}
            placeholder="Enter your name here"
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <div className="md-3 ">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            name="email"
            value={this.state.email}
            placeholder="abc@email.com"
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <div className="md-3 ">
          <label htmlFor="contactno" className="form-label">
            Contact number
          </label>
          <input
            className="form-control"
            name="contactno"
            value={this.state.contactno}
            placeholder="999999999"
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <div className="md-3 ">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            placeholder="*******"
            onChange={this.handleChange}
          />
        </div>

        <br></br>
        <div className="md-3 ">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmpassword"
            value={this.state.confirmpassword}
            placeholder="*******"
            onChange={this.handleChange}
          />
        </div>

        <br></br>
        <div className="row g-2">
          <div className="col">
            <label htmlFor="selectedState" className="form-label">
              State
            </label>

            <select
              className="form-select form-select-md-3"
              name="selectedState"
              value={this.state.selectedState}
              onChange={this.changeState}
            >
              <option defaultValue>Select state</option>

              {this.state.states.map((e, key) => {
                return (
                  <option key={key} value={this.state.selectedState}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col">
            <label htmlFor="selectedCity" className="form-label">
              City
            </label>

            <select
              className="form-select form-select-md-3"
              name="selectedCity"
              value={this.state.selectedCity}
              onChange={this.changeCity}
            >
              <option defaultValue>Select city</option>

              {this.state.cities.map((e, key) => {
                return (
                  <option key={key} value={this.state.selectedCity}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <br></br>
        <button className="btn btn-primary">Register</button>
      </form>
    );
  }
}
