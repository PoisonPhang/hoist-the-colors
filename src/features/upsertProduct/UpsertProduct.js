import { Box, Button, Card, CardBody, CardHeader, Form, FormField, Heading, List, TextArea, TextInput } from "grommet";
import { Component } from "react";
import { connect } from "react-redux";

import { createProduct, getUsers } from './upsertProductSlice'


class UpsertProduct extends Component {
  state = {
    productName: '',
    selectedUsers: '',
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { productName, selectedUsers } = this.state;

    return (
      <Card elevation='None'>
        <CardHeader
          background='dark-3'
          pad={{ left: 'medium', right: 'medium' }}
        >
          <Heading level='3'>Create or Edit Product</Heading>
        </CardHeader>
        <CardBody
          background='dark-2'
          pad={{ top: 'small', bottom: 'small', left: 'large', right: 'large' }}
          overflow='auto'
        >
          <Form
            onSubmit={({ value }) => {
              this.props.createProduct(value.productName, value.selectedUsers)
            }}
          >
            <Heading level='4'>Product Name</Heading>
            <Box width='medium'>
              <FormField name='productName' required>
                <TextInput
                  name='productName'
                  placeholder='name'
                  value={productName}
                  onChange={(event) => {
                    this.setState({ productName: event.target.value })
                  }}
                />
              </FormField>
            </Box>
            <Box direction='row'>
              <Box width='medium'>
                <Heading level='4'>Selected Users</Heading>
                <FormField
                  name='selectedUsers'
                >
                  <TextArea
                    name='selectedUsers'
                    value={selectedUsers}
                    resize='false'
                    onChange={(event) => {
                      this.setState({ selectedUsers: event.target.value })
                    }}
                  />
                </FormField>
              </Box>
              <Box margin={{ left: 'large' }}>
                <Heading level='4'>Users</Heading>
                <List
                  primaryKey='email'
                  secondaryKey='name'
                  data={this.props.users}
                  onClickItem={({ item, index }) => {
                    if (!selectedUsers.includes(item.oid)) {
                      this.setState({ selectedUsers: selectedUsers.concat(`${item.oid},\n`) })
                    }
                  }}
                />
              </Box>
            </Box>
            <Button type="submit" primary label="Submit" />
          </Form>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    oid: state.upsertProduct.oid,
    name: state.upsertProduct.name,
    selected_users: state.upsertProduct.selected_users,
    users: state.upsertProduct.users,
  }
}

const mapDispatchToProps = () => ({ createProduct, getUsers })

export default connect(mapStateToProps, mapDispatchToProps())(UpsertProduct)
