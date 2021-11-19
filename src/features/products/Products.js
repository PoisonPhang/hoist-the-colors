import { List } from 'grommet'
import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getProducts, selectProducts} from './productsSlice'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts('example@email.com')
  }

  render() {
    return (
      <List
      primaryKey='name'
      data={this.props.products}
    />
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = () => ({getProducts})

export default connect(mapStateToProps, mapDispatchToProps())(Products)