import React from 'react';
import './sign-in.styles.scss';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({[name]: value})
  }



  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}