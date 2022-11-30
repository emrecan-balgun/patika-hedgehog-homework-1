import './App.css';
import React from 'react';
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <Home />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
