import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div id="wrap">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

export default App;
