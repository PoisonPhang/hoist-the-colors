

import { Box, Button, Card, CardBody, CardHeader, Form, FormField, Heading, Select, TextInput } from 'grommet';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from './UpsertUserSlice'

class UpsertUser extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    accountType: '',
  }

  render() {
    const { userName, email, password, accountType } = this.state
    return (
      <Card elevation='None'>
        <CardHeader
          background='dark-3'
          pad={{left: 'medium', right: 'medium'}}
        >
        <Heading level='3'>Create or Edit Account</Heading>
        </CardHeader>
        <CardBody background='dark-2' pad={{ top: 'small', bottom: 'small', left: 'large', right: 'large' }}>
          <Form 
            onSubmit={({ value }) => {
              this.props.createUser(value.userName, value.email, value.password, value.accountType)
            }}
          >
            <Box width='medium'>
              <Heading level='4'>Account Username</Heading>
              <FormField name='userName'>
                <TextInput 
                  name='userName'
                  placeholder='username'
                  value={userName}
                  onChange={(event) => {
                    this.setState({ userName: event.target.value })
                  }}
                />
              </FormField>
              <Heading level='4'>Account Email</Heading>
              <FormField name='email'>
                <TextInput 
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value })
                  }}
                />
              </FormField>
              <Heading level='4'>Password</Heading>
              <FormField name='password'>
                <TextInput 
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value })
                  }}
                />
              </FormField>
              <Heading level='4'>Acount Type</Heading>
              <FormField name='accountType'>
                <Select 
                  name='accountType'
                  options={['Developer', 'Client']}
                  value={accountType}
                  onChange={({ option }) => this.setState({ accountType: option })}
                />
              </FormField>
            </Box>
            <Button type='submit' primary label='Submit' />
          </Form>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    oid: state.upsertUser.oid,
    name: state.upsertUser.name,
    password: state.upsertUser.password,
    accountType: state.upsertUser.accountType,
  }
}

const mapDispatchToProps = () => ({ createUser })

export default connect(mapStateToProps, mapDispatchToProps())(UpsertUser)
