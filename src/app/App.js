
import { Box, Button, Collapsible, Header, Heading, Grommet, Main, Nav, ResponsiveContext, Sidebar, Anchor } from 'grommet'
import { Flag, Group, Menu, Template, User } from 'grommet-icons';
import React, { Component } from 'react';

import Account from '../features/account/account';
import Products from '../features/products/Products';
import Flags from '../features/flags/Flags';
import UpsertProduct from '../features/upsertProduct/UpsertProduct';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const PRODUCTS = 'products'
const FLAGS = 'flags'
const USERS = 'flags'
const ACCOUNT = 'account'

class App extends Component {
  state = {
    showSidebar: false,
    mainContent: ACCOUNT,
  }

  getMainContent(mainContent) {
    switch (mainContent) {
      case ACCOUNT:
        return <Account />
      case USERS:
        break;
      case FLAGS:
        break;
      case PRODUCTS:
        return <UpsertProduct />
      default:
        break;
    }
  }

  render() {
    const { showSidebar, mainContent } = this.state;
    return (
      <Grommet full theme={theme} themeMode='dark'>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background='dark-1'>
              {/* App Navbar */}
              <Header fill='horizontal' background='brand'>
                <Button
                  margin='medium'
                  icon={<Menu size='large' />}
                  onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                />
                <Heading margin='none' level='1'>
                  Hoist The Colors
                </Heading>
                <Nav direction='row' pad='medium'>
                  <Anchor icon={<Template size='large' />} onClick={() => this.setState({mainContent: PRODUCTS})} />
                  <Anchor icon={<Flag size='large' />} />
                  <Anchor icon={<Group size='large' />} />
                  <Anchor icon={<User size='large' />} onClick={() => this.setState({mainContent: ACCOUNT})} />
                </Nav>
              </Header>
              {/* Sidebar & Main content */}
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {/* Main content navigation */}
                <Collapsible direction='horizontal' open={showSidebar}>
                  <Box direction='row' fill='vertical'>
                    <Sidebar
                      background='dark-3'
                      header={<Heading level='2' margin='medium'>Products</Heading>}
                    >
                      <Products />
                    </Sidebar>
                    <Collapsible direction='horizontal' open={ showSidebar }>
                      <Sidebar
                        background='dark-2'
                        header={<Heading level='2' margin='medium'>Features</Heading>}
                      >
                        <Flags />
                      </Sidebar>
                    </Collapsible>
                  </Box>
                </Collapsible>
                {/* Main content */}
                <Main pad='large' direction='row' justify='center'>
                  {this.getMainContent(mainContent)}
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
