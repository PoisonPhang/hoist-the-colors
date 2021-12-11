import { Table, TableBody, TableCell, TableHeader, TableRow } from "grommet";
import { Checkmark, Close, Configure } from "grommet-icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFlags } from "./flagsSlice";

const createFlagListElement = (flagObj) => {
  return (<TableRow background={flagObj.enabled ? 'status-ok' : 'status-disabled'}>
    <TableCell scope='row' align='center'><Configure /></TableCell>
    <TableCell>{flagObj.name}</TableCell>
    <TableCell align='center'>{flagObj.enabled ? (<Checkmark />) : (<Close />)}</TableCell>
    <TableCell align='center'>{flagObj.clientToggle ? (<Checkmark />) : (<Close />)}</TableCell>
    <TableCell>{flagObj.releaseType.type}</TableCell>
  </TableRow>)
}

class Flags extends Component {
  componentDidMount() {
    this.props.getFlags(this.props.selectedProduct)
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope='col'/>
            <TableCell scope='col' border='bottom'>
              Name
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Enabled
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Client Toggle
            </TableCell>
            <TableCell scope='col' border='bottom'>
              Release Type
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.flags.map(createFlagListElement)}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    flags: state.flags.flags,
    selectedProduct: state.products.selectedProduct,
  }
};

const mapDispatchToProps = () => ({ getFlags })

export default connect(mapStateToProps, mapDispatchToProps())(Flags)
