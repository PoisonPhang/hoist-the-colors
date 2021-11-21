import { Box, Card, CardBody, CardFooter, CardHeader, Heading, List, TextInput } from "grommet";
import { Component } from "react";
import { connect } from "react-redux";

import { createProduct, getUsers } from './upsertProductSlice'


class UpsertProduct extends Component {
  state = {
    productName: '',
    users: ''
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { productName, users } = this.state;

    return (
      <Card elevation='None'>
        <CardHeader background='dark-3' pad={{ left: 'medium', right: 'medium' }}>
          <Heading level='3'>Create or Edit Product</Heading>
        </CardHeader>
        <CardBody background='dark-2' pad='large'>
          <Heading level='4'>Product Name</Heading>
          <TextInput
            placeholder='name'
            value={productName}
            onChange={(event) => this.setState({ productName: event.target.value })}
          />
          <Box direction='row'>
            <Box margin={{ right: 'large' }}>
              <Heading level='4'>Selected Users</Heading>
              <List primaryKey='email' secondaryKey='name' data={this.props.users}></List>
            </Box>
            <Box margin={{ left: 'large' }}>
              <Heading level='4'>Users</Heading>
              <List primaryKey='email' secondaryKey='name' data={this.props.users}></List>
            </Box>
          </Box>
        </CardBody>
        <CardFooter background='dark-4'>

        </CardFooter>
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