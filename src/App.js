import Navibar from './components/Navibar'
import Banking from './components/Banking'
import Balance from './components/Balance'
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <div>
        <Navibar />
        <Stack gap={2} className="col-md-7 mx-auto">
          <Balance />
          <Banking />
        </Stack>
    </div>
  );
}

export default App;
