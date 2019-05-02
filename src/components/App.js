import React from "react";
import countries from "../data/countries"

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      country: "1",
      gender: "male",
      agree: true,
      avatar: ""
    };
  }

  onChange = event => {
    
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChangeAgree = event => {
    console.log(event.target.name, event.target.value, event.target.checked);
    this.setState({
    [event.target.name]: event.target.checked
    // или [event.target.name]: event.target.value == "true" ? false : true
     });
  };

  onChangeAvatar = event => {
    const reader = new FileReader()
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
         };
    reader.readAsDataURL(event.target.files[0]);
    };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.username.value, this.password.value, this.target.value );
  };

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {

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
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Country</label>
            <select className="form-control"
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
              <label className="form-ceck-label" htmlFor="male">
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
              <label className="form-ceck-label" htmlFor="female">
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
             checked={this.state.agree === true}
             />
              <label className="form-check-label" 
              htmlFor="inlineCheckbox1">
              Agree
              </label>
          </div>

            <button type="submit"
              className="btn btn-primary w-100"
              onClick={this.onSubmit}>
              Submit
          </button>
        </form>
      </div>
        );
      }
    }
