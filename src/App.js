import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div className="App">
      <Navigation />
      <div id="wrap">
        <Profile />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
