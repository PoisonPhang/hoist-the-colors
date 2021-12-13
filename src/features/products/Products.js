import { List } from 'grommet'
import React, { Component } from "react";
import { connect } from 'react-redux';
import { getProducts, setSelected } from './productsSlice'

class Products extends Component {

  componentDidMount() {
    this.props.getProducts(this.props.email)
  }

  render() {
    return (
      <List
        primaryKey='name'
        onClickItem={({item, index}) => {
          this.props.setSelected(item.oid, item.name);
        }}
        data={this.props.products}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    email: state.login.email,
  }
}

const mapDispatchToProps = () => ({ getProducts, setSelected })

export default connect(mapStateToProps, mapDispatchToProps())(Products)
