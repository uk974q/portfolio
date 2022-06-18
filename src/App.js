  import './App.css';
  import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

  import Navigation from './components/Navigation/Navigation';
  import Main from './components/Main';
  import PilotPage from './components/Pilot/PilotPage'
  import Showcase from './components/Showcase/Showcase';
  import Footside from './components/Footside/Footstide';
  import Contact from './components/Contact/Contact';

  function App() {

    return (
      <div className="App">
          <Router>
        <Navigation />
        <div id="wrap">
            <Routes>
              <Route exact path="/home" element={<PilotPage />} />
              <Route path="/main" element={<Main />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
        </Router>
        <Footside />

      </div>
    );
  }

  export default App;
