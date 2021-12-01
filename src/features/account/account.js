import { Button, Card, CardBody, CardHeader, Form, FormField, Heading, TextInput } from "grommet";
import { Component } from "react";
import { connect } from "react-redux";

import { login } from "./accountSlice";

class Login extends Component {

  render() {
    return (
      <Card>
        <CardHeader background='dark-3' pad={{ left: 'medium', right: 'medium' }}>
          <Heading level='3'>Login</Heading>
        </CardHeader>
        <CardBody
          background='dark-2'
          pad={{ top: 'small', bottom: 'small', left: 'large', right: 'large' }}
        >
          <Form>
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
        </CardBody>
      </Card>
    )
  }
}