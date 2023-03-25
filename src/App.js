import './App.css';
import './styles/global.css'
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="container-app">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
