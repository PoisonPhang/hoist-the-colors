import { Card, CardBody, CardFooter, CardHeader, Heading, TextInput } from "grommet";
import { Component } from "react";


class UpsertProduct extends Component {
  state = {
    productName: '',
    users: ''
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
        </CardBody>
        <CardFooter background='dark-4'>

        </CardFooter>
      </Card>
    )
  }
}

export default UpsertProduct