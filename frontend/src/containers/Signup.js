import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../redux/actions';
import "./Login_Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  onSubmit = formProps => {
    this.props.signup(formProps);
  };

  validateForm() {
    return this.state.password.length > 0 && this.state.password === this.state.confirmPassword;
  }



  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="Register">
        
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <FormGroup controlId="name" bsSize="large">
           <fieldset>
             <ControlLabel>Name</ControlLabel>
             <FormControl 
               name='name'
               type='text'
               value={this.state.name}
               component='input'
               autoComplete='none'
             />
           </fieldset>
        </FormGroup>

        <FormGroup controlId="password" bsSize="large">
           <fieldset>
             <ControlLabel>Password</ControlLabel>
             <FormControl 
               name='password'
               type='password'
               value={this.state.password}
               component='input'
               autoComplete='none'
             />
           </fieldset>
        </FormGroup>

        <FormGroup controlId="con_password" bsSize="large">
           <fieldset>
             <ControlLabel>Confirm Password</ControlLabel>
             <FormControl 
               name='confirmPassword'
               type='password'
               value={this.state.confirmPassword}
               component='input'
               autoComplete='none'
             />
           </fieldset>
        </FormGroup>

           <div>
             {this.props.errorMessage}
           </div>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Register
          </Button> 
        </form>
      </div>
    );
  }
}


export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Register);


    // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }



    //     {/* <form onSubmit={handleSubmit(this.onSubmit)}>
    //       <FormGroup controlId="name" bsSize="large">
    //         <ControlLabel>Name</ControlLabel>
    //         <FormControl
    //           autoFocus
    //           type="name"
    //           value={this.state.name}
    //           onChange={this.handleChange}
    //         />
    //       </FormGroup>

    //       <FormGroup controlId="email" bsSize="large">
    //         <ControlLabel>Email</ControlLabel>
    //         <FormControl
    //           type="email"
    //           value={this.state.email}
    //           onChange={this.handleChange}
    //         />
    //       </FormGroup>

    //       <FormGroup controlId="password" bsSize="large">
    //         <ControlLabel>Password</ControlLabel>
    //         <FormControl
    //           value={this.state.password}
    //           onChange={this.handleChange}
    //           type="password"
    //         />
    //       </FormGroup>

    //       <FormGroup controlId="confirmPassword" bsSize="large">
    //         <ControlLabel>Confirm Password</ControlLabel>
    //         <FormControl
    //           value={this.state.confirmPassword}
    //           onChange={this.handleChange}
    //           type="password"
    //         />
    //       </FormGroup>
    // */}