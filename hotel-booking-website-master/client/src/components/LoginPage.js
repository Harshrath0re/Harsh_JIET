import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Login extends React.Component {
  state = { user: {} };

  onSubmitClick = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:5050/user/login", this.state.user)
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="LoginPage">
        <p className="heading">Login</p>
        <div id="box1">
          <form>
            <div id="label">
              <input
                type="username"
                placeholder="Enter Your Username"
                id="username"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, email: e.target.value },
                  });
                }}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={(e) => {
                  this.setState({
                    user: { ...this.state.user, password: e.target.value },
                  });
                }}
              />
              <br />
            </div>
          </form>

          <button type="login" onClick={this.onSubmitClick}>
            <Link to="/MainPage">Login</Link>
          </button>
        </div>
        <div id="box2">
          <h5>
            New to Website?
            <br />
            <Link to="/Signup" id="a2">
              Create an account.
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}

export default Login;
