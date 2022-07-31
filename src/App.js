import React, {Component} from 'react';
import './App.css';
//Add the Route named import
import {Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes>
         <Route path='/home' element={<HomePage />}/>
         <Route path='/about' element={<AboutPage />}/>
         <Route path='*' element={<Navigate to='/about' replace />}/>
         <Route path='*' element={<Navigate to='/home' replace />}/>
       </Routes>
      </div>
    )
  }
}
export default App;
