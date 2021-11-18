
import { Box, Button, Collapsible, Header, Heading, Grommet, Main, Nav, ResponsiveContext, Sidebar, Anchor } from 'grommet'
import { Flag, Group, Menu, User } from 'grommet-icons';
import React, { Component } from 'react';

import Products from '../features/products/Products';
import Flags from '../features/flags/Flags';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

class App extends Component {
  state = {
    showProducts: false,
    showFeatures: true,
  }

  render() {
    const { showProducts, showFeatures } = this.state;
    return (
      <Grommet full theme={theme} themeMode='dark'>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background='dark-1'>
              {/* App Navbar */}
              <Header fill='horizontal' background='brand'>
                <Button margin='medium' icon={<Menu size='large' />} onClick={() => this.setState({ showProducts: !this.state.showProducts })} />
                <Heading margin='none' level='1'>Hoist The Colors</Heading>
                <Nav direction='row' pad='medium'>
                  <Anchor icon={<User size='large' />} />
                </Nav>
              </Header>
              {/* Sidebar & Main content */}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {/* Main content navigation */}
                <Collapsible direction='horizontal' open={showProducts}>
                  <Box direction='row' fill='vertical'>
                    <Sidebar background='dark-3' header={<Heading level='2' margin='medium'>Products</Heading>}>
                      <Products />
                    </Sidebar>
                    <Collapsible direction='horizontal' open={showProducts && showFeatures}>
                      <Sidebar background='dark-2' header={<Heading level='2' margin='medium'>Features</Heading>}>
                        <Flags />
                      </Sidebar>
                    </Collapsible>
                  </Box>
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