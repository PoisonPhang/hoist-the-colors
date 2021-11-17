
import { Box, Button, Collapsible, Header, Heading, Grommet, Layer, Main, Nav, ResponsiveContext, Sidebar, Anchor } from 'grommet'
import { Flag, Group, Menu, User } from 'grommet-icons';
import React, { Component } from 'react';

class App extends Component {
  state = {
    showSideBar: false,
  }

  render() {
    const { showSideBar } = this.state;
    return (
      <Grommet full themeMode='dark'>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background='dark-1'>
              {/* App Navbar */}
              <Header fill='horizontal' background='brand'>
                <Button margin='medium' icon={<Menu size='large' />} onClick={() => this.setState({ showSideBar: !this.state.showSideBar })} />
                <Heading margin='none' level='1'>Hoist The Colors</Heading>
                <Nav direction='row' pad='medium'>
                  <Anchor icon={<User size='large' />} />
                </Nav>
              </Header>
              {/* Sidebar & Main content */}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {/* Main content navigation */}
                <Collapsible direction='horizontal' open={showSideBar}>
                  <Sidebar background='dark-2' header={<Heading level='2' margin='medium'>Products</Heading>}>

                  </Sidebar>
                </Collapsible>
                {/* Main content */}
                <Main>

                </Main>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;