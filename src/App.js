import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Booking from './components/Pages/Booking';
import Home from './components/Pages/Home';

/* React Bootstrap */
import { 
  Navbar,
  Container
} from 'react-bootstrap'
 
function App() {
  return (
      <Router>
          <Navbar className='header-background'>
            <Container fluid>
              <Navbar.Brand href="#home" className='header-title'>Student Online Enrollment Booking System</Navbar.Brand>
              <Navbar.Toggle />
            </Container>
          </Navbar>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/booking' element={<Booking />} />
          </Routes>
      </Router>
  );
}

export default App;
