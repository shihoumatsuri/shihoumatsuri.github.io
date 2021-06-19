import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shihou Matsuri is the most kawaii girl in the world!
        </p>
        <a
          className="App-link"
          href="https://github.com/shihoumatsuri/shihoumatsuri.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          This site is under development.
        </a>
      </header>
    </div>
  );
}

export default App;
