import { Component } from "react";
import Cookies from "js-cookie";
import "./index.css";
import withRouter from "./withRouter";


class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMsg: ''
  };

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {navigate} = this.props
    Cookies.set('jwt_token',jwtToken, {expires: 5})
    navigate('/', { replace: true })
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state;
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails)
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if(response.ok === true){
      this.onSubmitSuccess(data.jwt_token)
    }else{
      this.onSubmitFailure(data.error_msg)
    }

  }


  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  renderPasswordField = () => {
    const { password } = this.state;

    return (
      <>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  render() {
    const {showSubmitError, errorMsg} = this.state;

    return (
      <div className="login-form-container">
        <img
          className="login-website-logo-mobile-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <img
          className="login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            className="login-website-logo-desktop-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);