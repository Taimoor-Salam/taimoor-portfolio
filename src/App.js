import logo from './logo.svg';
import './App.css';
import MainWindow from "./Components/MainWindow";

function App() {
  return (
    <div className='appContainer'>
      <div className="betaOverlay"><h1>WEBSITE IS IN BETA</h1> 
      This interactive portfolio is best experienced maximized!
      </div>
    <MainWindow />
    </div>
  );
}

export default App;
