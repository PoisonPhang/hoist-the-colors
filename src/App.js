
import { Box, Button, Collapsible, Heading, Grommet, ResponsiveContext } from 'grommet'
import { Notification } from 'grommet-icons';
import React, { useState } from 'react';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='meduim'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet full themeMode='dark'>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
          <AppBar>
            <Heading level='3' margin='none'>Hoist The Colors</Heading>
            <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Collapsible direction='horizontal' open={showSidebar}>
              <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                Sidebar
              </Box>
            </Collapsible>
            <Box flex align='center' justify='center'>
              Content
            </Box>
          </Box>
        </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
