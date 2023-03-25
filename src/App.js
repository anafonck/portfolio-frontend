import './App.css';
import './styles/global.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container-app">
      <Navbar></Navbar>
      <div className='content'>content</div>
    </div>
  );
}

export default App;
