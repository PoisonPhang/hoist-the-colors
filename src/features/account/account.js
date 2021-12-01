import { Box, Button, Card, CardBody, CardHeader, Form, FormField, Heading, TextInput } from "grommet";
import { Component } from "react";
import { connect } from "react-redux";

import { login } from "./accountSlice";

class Account extends Component {

  loginForm() {
    return (
      <Form
        onSubmit={({ value }) => {
          this.props.login(value.email, value.password)
        }}>
        <FormField name='email' label='Email'>
          <TextInput
            name='email'
            placeholder='user@example.com'
          />
        </FormField>
        <FormField
          name='password'
          label='Password'
        >
          <TextInput
            name='password'
            placeholder='superSecretPassword'
          />
        </FormField>
        <Button type='submit' primary label='Login' />
      </Form>
    )
  }

  render() {
    return (
      <Card elevation='none'>
        <CardHeader background='dark-3' pad={{ left: 'medium', right: 'medium' }}>
          <Heading level='3'>Account</Heading>
        </CardHeader>
        <CardBody
          background='dark-2'
          pad={{ top: 'small', bottom: 'small', left: 'large', right: 'large' }}
        >
          {this.props.loggedIn ? <Box /> : this.loginForm()}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn,
  }
}

const mapDispatchToProps = () => ({ login })

export default connect(mapStateToProps, mapDispatchToProps())(Account)