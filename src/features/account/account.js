import { Box, Button, Card, CardBody, CardHeader, Form, FormField, Heading, Text, TextInput } from "grommet";
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

  accountInfo() {
    return (
      <Box dir='vertical'>
        <Heading level='4'>Name</Heading>
        <Text>{this.props.name}</Text>
        <Heading level='4'>Email</Heading>
        <Text>{this.props.email}</Text>
        <Heading level='4'>ID</Heading>
        <Text>{this.props.oid}</Text>
      </Box>
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
          {this.props.loggedIn ? this.accountInfo() : this.loginForm()}
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn,
    oid: state.login.oid,
    name: state.login.name,
    email: state.login.email,
  }
}

const mapDispatchToProps = () => ({ login })

export default connect(mapStateToProps, mapDispatchToProps())(Account)
