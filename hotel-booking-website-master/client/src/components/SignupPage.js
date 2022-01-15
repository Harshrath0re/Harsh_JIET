import React from "react";
import "./SignupPage.css";
import Axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = { user: {} };

  onSubmitClick = async (event) => {
    event.preventDefault();
    console.log(this.state.user);
    await Axios.post("http://localhost:5050/user/signup", this.state.user)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="signupbody">
        <h2 className="heading">Signup</h2>
        <div className="box">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, firstName: e.target.value },
                  });
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, lastName: e.target.value },
                  });
                }}
              />
            </div>
          </div>

          <form className="row2">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control form2"
                id="inputEmail4"
                placeholder="email"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, email: e.target.value },
                  });
                }}
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control form2"
                id="inputPassword4"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, password: e.target.value },
                  });
                }}
              />
            </div>

            <div className="button">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.onSubmitClick}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
