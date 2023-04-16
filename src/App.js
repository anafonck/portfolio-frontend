import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PageContext from './config/contexts';
import './styles/global.css';

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
