import React from 'react';
import FormInput from '../Form-input/Form-input'
import CustomButton from "../Custom-button/Custom-button";
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
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}