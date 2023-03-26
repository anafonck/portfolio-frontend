import './App.css';
import './styles/global.css'
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Content from './components/Content';
import PageContext from './config/contexts';
import { useState } from 'react';

function App() {
  const [pageContent, setPageContent] = useState('main');
  const [modalState, setModalState] = useState(false)
  return (
    <PageContext.Provider value={{ pageContent, setPageContent, setModalState }}>
      <div className="container-app">
        {modalState && <Modal></Modal>}
        <Navbar></Navbar>
        <Content></Content>
      </div>
    </PageContext.Provider>
  );
}

export default App;
