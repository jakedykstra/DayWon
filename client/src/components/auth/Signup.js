import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
// compose helps with cleanup of the application, it allows us to write out multiple higher-order components with a much simpler syntax, rather than manually chaining them together with a bunch of parens
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true
    };
  }
  onSubmit = formProps => {
    // we call the signup action creator that is available inside of our component due to the connect below
    // we set a callback here so that after signing up they will be taken to the feature page
    this.props.signup(formProps, () => {
      console.log("called");
      this.props.history.push("/home");
    });
  };
  handleClick = () => {
    this.setState({
      clicked: true
    });
  };
  handleOutput = () => {
    if (this.state.clicked === false) {
      return <button onClick={this.handleClick}>Signup</button>;
    } else {
      const { handleSubmit } = this.props;
      return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label className="col s6 offset-s3 email">Email</label>
            <Field
              className="col s6 offset-s3"
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label className="col s6 offset-s3 password">Password</label>
            <Field
              className="col s6 offset-s3"
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button className="col s6 offset-s3">Sign Up!</button>
        </form>
      );
    }
  };

  render() {
    return <div>{this.handleOutput()}</div>;
  }
}
function mapStateToProps(state) {
  return { state };
}
//in the body of compose we list out all the higher order components that we want to have be applied to signup
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" }),
  withRouter
)(Signup);
