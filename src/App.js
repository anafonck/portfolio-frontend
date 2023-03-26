import './App.css';
import './styles/global.css'
import Navbar from './components/Navbar';
import Content from './components/Content';
import PageContext from './config/contexts';
import { useState } from 'react';

function App() {
  const [pageContent, setPageContent] = useState('main');
  return (
    <PageContext.Provider value={{ pageContent, setPageContent }}>
      <div className="container-app">
        <Navbar></Navbar>
        <Content></Content>
      </div>
    </PageContext.Provider>
  );
}

export default App;
