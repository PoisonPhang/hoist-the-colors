import { Anchor, Table, TableBody, TableCell, TableHeader, TableRow } from "grommet";
import { Checkmark, Close, Flag } from "grommet-icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getFlags, setEnabledFor } from "./flagsSlice";

const getReleaseTypeText = (releaseType) => {
  if (releaseType === 'Global') {
    return 'Global'
  } else if (releaseType.Limited) {
    return 'Limited'
  } else if (releaseType.Percentage) {
    return `${releaseType.Percentage[0]}%`
  }
}

class Flags extends Component {
  componentDidMount() {
    this.props.getFlags(this.props.selectedProduct, this.props.userOid, this.props.accountType)
  }

  toggleFlag(flagObj, email, index) {
  if (!this.props.enabledFor[index]) {
    fetch(`/hoist/${flagObj.product_id}/${flagObj.name}/${email}`, { method: 'PATCH' })
      .then(res => this.props.getFlags(this.props.selectedProduct))
  } else {
    fetch(`/lower/${flagObj.product_id}/${flagObj.name}/${email}`, { method: 'PATCH' })
      .then(res => this.props.getFlags(this.props.selectedProduct))
  }
  
  }

  createFlagListElement(flagObj, index) {
  return (
    <TableRow background={flagObj.enabled ? 'status-ok' : 'status-disabled'}>
      <TableCell scope='row' align='center'>
        <Anchor 
          icon={
            this.props.enabledFor[index] ? 
            <Flag color='status-ok'/> : 
            <Flag color='status-disabled' />
          } 
          onClick={
            () => {
              this.toggleFlag(flagObj, this.props.email, index)
            }
          }
        />
      </TableCell>
      <TableCell>{flagObj.name}</TableCell>
      <TableCell align='center'>{flagObj.enabled ? (<Checkmark />) : (<Close />)}</TableCell>
      <TableCell align='center'>{flagObj.client_toggle ? (<Checkmark />) : (<Close />)}</TableCell>
      <TableCell>{getReleaseTypeText(flagObj.release_type)}</TableCell>
    </TableRow>
  )
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
          {this.props.flags.map(this.createFlagListElement, this)}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    flags: state.flags.flags,
    enabledFor: state.flags.enabledForUser,
    selectedProduct: state.products.selectedProduct,
    email: state.login.email,
    userOid: state.login.oid,
    accountType: state.login.accountType,
  }
};

const mapDispatchToProps = () => ({ getFlags, setEnabledFor })

export default connect(mapStateToProps, mapDispatchToProps())(Flags)
