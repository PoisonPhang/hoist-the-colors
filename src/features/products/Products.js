import { List } from 'grommet'
import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <List
        primaryKey='name'
        data={[
          { oid: '01', name: 'product01', users: ['02'] },
          { oid: '02', name: 'product02', users: ['02', '04'] },
          { oid: '03', name: 'product03', users: ['02', '03'] },
          { oid: '04', name: 'product04', users: ['01', '02'] },
          { oid: '05', name: 'product05', users: ['01', '02', '03'] },
          { oid: '06', name: 'product06', users: ['01', '02', '04'] },
        ]}
      />
    )
  }
}

export default Products