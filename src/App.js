
import { Box, Grommet } from 'grommet'

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation='meduim'
    style={{zIndex: '1'}}
    {...props}
  />
);

function App() {
  return (
    <Grommet plain>
      <AppBar>Hello Grommet!</AppBar>
    </Grommet>
  );
}

export default App;
