import './components/UpperNoficiationBar/UpperNotificationBar';
import './App.css';
import HomePage from './Pages/HomePage';
import CelebrationCakePage from './Pages/CelebrationCakePage';
import SingleCakePage from './Pages/SingleCakePage';
import SelectedItems from './Pages/SelectedItems';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListedItems from './components/ListedItems/ListedItems';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Add Stable Components Here */}
        <UpperNotificationBar></UpperNotificationBar>
        <Header />

        <Routes>
          {/* Add Routing Components Here */}
          <Route path='/' element={<HomePage />} />
          <Route path='/celebration_Cake' element={<CelebrationCakePage />} />
          <Route path='/Single_Cake' element={<SingleCakePage />} />
          <Route path='/Selected_Cake' element={<SelectedItems />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignupPage />} />
          <Route path='/SelectedItems' element={<ListedItems/>} />
          {/* <Route path='/ReviewItems' element={} /> */}
        </Routes>

        <ToastContainer />
      </Router>
      
    </div>
  );
}

export default App;
