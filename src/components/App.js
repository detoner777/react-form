import React from "react";
import countries from "../data/countries";

// "Must be 5 characters or more"
// "Required"
// "Must be equal password"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: "1",
      gender: "male",
      agree: true,
      avatar: "",
      errors: {
        username: false,
        password: false,
        repeatPassword: false
      }
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeAgree = event => {
    console.log(event.target.name, event.target.value, event.target.checked);
    console.log(typeof event.target.value);
    this.setState({
      [event.target.name]: event.target.checked
      // [event.target.name]: !event.target.value not working
      // [event.target.name]: event.target.value == "true" ? false : true
    });
  };
  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  onSubmit = event => {
    event.preventDefault();
    // console.log("refs", this.username.value, this.password.value);
    console.log("submit", this.state);
    const errors = {};
    if (this.state.username.length < 5) {
      errors.username = "Must be 5 characters or more";
    }

    if (this.state.password < 3) {
      errors.password = "Must be 3 characters or more";
    }

    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {}
      });
      console.log("submit", this.state);
    }
  };

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };
  render() {
    // console.log(this);
    // const getOptionsCountries = countries.map(country => (
    //   <option key={country.id} value={country.id}>
    //     {country.name}
    //   </option>
    // ));
    // console.log("getOptionsCountries", getOptionsCountries);
    return (
      <div className="form-container card">
        <form className="form card-body">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              ref={node => (this.username = node)}
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            {this.state.errors.username ? (
              <div className="invalid-feedback">
                {this.state.errors.username}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              ref={node => (this.password = node)}
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {this.state.errors.password ? (
              <div className="invalid-feedback">
                {this.state.errors.password}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter repeat password"
              ref={node => (this.repeatPassword = node)}
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.onChange}
            />
            {this.state.errors.repeatPassword ? (
              <div className="invalid-feedback">
                {this.state.errors.repeatPassword}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              className="form-control"
              id="country"
              name="country"
              value={this.state.country}
              onChange={this.onChange}
            >
              {this.getOptionsItems(countries)}
            </select>
          </div>
          <fieldset className="form-group">
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.onChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              className="form-control-file"
              id="avatar"
              name="avatar"
              onChange={this.onChangeAvatar}
            />
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeAgree}
              checked={this.state.agree}
            />
            <label className="form-check-label" htmlFor="agree">
              Confirm the processing of data
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}