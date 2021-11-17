import { List, TableCell, TableRow } from "grommet";
import { Checkmark, Close } from "grommet-icons";
import React, { Component } from "react";

class FlagListElement extends Component {
  render() {
    return (
      <TableRow background={this.props.flag.enabled ? 'status-ok' : 'status-disabled'}>
        <TableCell scope='row'>{this.props.flag.name}</TableCell>
        <TableCell>{this.props.flag.enabled ? (<Checkmark />) : (<Close />)}</TableCell>
        <TableCell>{this.props.flag.clientToggle ? (<Checkmark />) : (<Close />)}</TableCell>
        <TableCell>{this.props.flag.clientToggle ? (<Checkmark />) : (<Close />)}</TableCell>
        <TableCell>{this.props.flag.disabledFor.length}</TableCell>
        <TableCell>{this.props.flag.releaseType}</TableCell>
      </TableRow>
    )
  }
}

class Flags extends Component {
  render() {
    return (
      <List
        primaryKey='name'
        secondaryKey='releaseType'
        data={[
          { oid: '01', name: 'feature01', releaseType: 'Global' },
          { oid: '01', name: 'feature01', releaseType: 'Limited' },
          { oid: '01', name: 'feature01', releaseType: 'Percentage (7%)' },
        ]}
      />
    )
  }
}

export default Flags