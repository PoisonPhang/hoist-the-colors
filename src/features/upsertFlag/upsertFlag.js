
import { Box, Button, Card, CardBody, CardHeader, Form, FormField, Heading, List, RangeInput, Select, TextArea, TextInput } from 'grommet';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createFlag } from './upsertFlagSlice';
import { getUsers } from '../upsertProduct/upsertProductSlice';
import { getProducts } from '../products/productsSlice';
import _ from "lodash";

const GLOBAL = 'Global';
const LIMITED = 'Limited';
const PERCENTAGE = 'Percentage';

class UpsertFlag extends Component {
  state = {
    flagName: '',
    product: {},
    globalEnabled: false,
    clientToggle: false,
    releaseType: GLOBAL,
    selectedUsers: '',
    percentage: 100,
  }

  getReleaseTypeObj(releaseType, percentage, selectedUsers) {
    if (releaseType === GLOBAL) {
      return GLOBAL
    } else if (releaseType === LIMITED) {
      return {
        Limited: selectedUsers.split(",/n"),
      }
    } else if (releaseType === PERCENTAGE) {
      return {
        Percentage: [Number(percentage), selectedUsers.split(",/n")]
      }
    }
  }

  getReleaseTypeFields(releaseType) {
    const { selectedUsers, product, percentage } = this.state
    if (product === {}) return
    if (releaseType === LIMITED) {
      return (
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
      )
    } else if (releaseType === PERCENTAGE) {
      return (
        <FormField name='percentage'>
          <Heading level='4'>Percentage of Users {percentage}%</Heading>
          <RangeInput 
            name='percentage'
            value={percentage}
            min={Math.floor(100 / this.props.users.length)}
            max={100}
            step={Math.floor(100 / this.props.users.length)}
            onChange={
              (event) => {
                let selUsers = _.sampleSize(this.props.users, ((event.target.value * this.props.users.length) / 100))
                  .map((value) => `\n${value.oid}`)
                  .toString()

                this.setState({
                  percentage: event.target.value, 
                  selectedUsers: selUsers,
                })
              }
            }
          />
        </FormField>
      )
    }
  }

  componentDidMount() {
    this.props.getProducts(this.props.email)
    this.props.getUsers()
  }

  render() {
    const { flagName, product, globalEnabled, clientToggle, releaseType, percentage, selectedUsers} = this.state;
    return (
      <Card elevation='None'>
        <CardHeader
          background='dark-3'
          pad={{ left: 'medium', right:'medium' }}
        >
          <Heading level='3'>Create or Edit Flag</Heading>
        </CardHeader>
        <CardBody
          background='dark-2'
          overflow='auto'
          pad={{ top: 'small', bottom: 'small', left: 'large', right: 'large' }}
        >
          <Form
            onSubmit={
              ({ value }) => {
                this.props.createFlag(flagName, product.oid, globalEnabled, clientToggle, this.getReleaseTypeObj(releaseType, percentage, selectedUsers))
              }
            }
          >
            <Heading level='4'>Flag Name</Heading>
            <Box width='medium'>
              <FormField name='flagName'>
                <TextInput 
                  name='flagName'
                  placeholder='flag name'
                  value={flagName}
                  onChange={(event) => {
                    this.setState({ flagName: event.target.value })
                  }}
                />
              </FormField>
            </Box>
            <Heading level='4'>Product</Heading>
            <FormField name='productId'>
              <Select 
                name='productId'
                options={this.props.products}
                value={product}
                labelKey="name"
                onChange={({ option }) => {
                  this.setState({ product: option })
                }}
              />
            </FormField>
            <Heading level='4'>Global Enabled Stutus</Heading>
              <FormField name='globalEnabled'>
                <Select 
                  name='globalEnabled'
                  options={[true, false]}
                  labelKey={(option) => option ? 'Enabled' : 'Disabled' }
                  value={globalEnabled}
                  onChange={({ option }) => {
                    this.setState({ globalEnabled: option })
                  }}
                />
              </FormField>
            <Heading level='4'>Client Toggleable</Heading>
            <FormField name='clientToggle'>
                <Select 
                  name='clientToggle'
                  options={[true, false]}
                  labelKey={(option) => option ? 'Enabled' : 'Disabled' }
                  value={clientToggle}
                  onChange={({ option }) => {
                    this.setState({ clientToggle: option })
                  }}
                />
              </FormField> 
            <Heading level='4'>Release Type</Heading>
            <FormField name='releaseType'>
              <Select 
                name='releaseType'
                options={[GLOBAL, LIMITED, PERCENTAGE]}
                value={releaseType}
                onChange={({ option }) => {
                  this.setState({ releaseType: option})
                }}
              />
            </FormField>
            {this.getReleaseTypeFields(releaseType)}
            <Button type='submit' primary label='Submit' />
          </Form>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    oid: state.upsertFlag.oid,
    name: state.upsertFlag.name,
    productId: state.upsertFlag.productId,
    enabled: state.upsertFlag.enabled,
    clientToggle: state.upsertFlag.clientToggle,
    releaseType: state.upsertFlag.releaseType,
    products: state.products.products,
    email: state.login.email,
    users: state.upsertProduct.users,
  }
}

const mapDispatchToProps = () => ({ createFlag, getProducts, getUsers })

export default connect(mapStateToProps, mapDispatchToProps())(UpsertFlag)
