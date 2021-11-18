import { Table, TableBody, TableCell, TableHeader, TableRow } from "grommet";
import { Checkmark, Close } from "grommet-icons";
import React, { Component } from "react";

const createFlagListElement = (flagObj) => {
  return (<TableRow background={flagObj.enabled ? 'status-ok' : 'status-disabled'}>
    <TableCell scope='row'>{flagObj.name}</TableCell>
    <TableCell align='center'>{flagObj.enabled ? (<Checkmark />) : (<Close />)}</TableCell>
    <TableCell align='center'>{flagObj.clientToggle ? (<Checkmark />) : (<Close />)}</TableCell>
    <TableCell>{flagObj.releaseType.type}</TableCell>
  </TableRow>)
}

const testFlags = [
  { oid: '01', name: 'feature01', enabled: true, releaseType: { type: 'Global' } },
  { oid: '02', name: 'feature01', enabled: true, releaseType: { type: 'Limited', users: [] } },
  { oid: '03', name: 'feature01', enabled: true, releaseType: { type: 'Percentage', percent: 7, users: [] } },
];

class Flags extends Component {
  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
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
          {testFlags.map(createFlagListElement)}
        </TableBody>
      </Table>
    )
  }
}

export default Flags