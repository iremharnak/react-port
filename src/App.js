import React, {Component} from 'react';
import './App.css';
//Add the Route named import
import {Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import BlogPage from './pages/BlogPage/BlogPage'



class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes>
         <Route path='/home' element={<HomePage />}/>
         <Route path='/about' element={<AboutPage />}/>
         <Route path='/contact' element={<ContactPage />}/>
         <Route path='/blog' element={<BlogPage />}/>
         <Route path='*' element={<Navigate to='/about' replace />}/>
         <Route path='*' element={<Navigate to='/home' replace />}/>
         <Route path='*' element={<Navigate to='/contact' replace />}/>
         <Route path='*' element={<Navigate to='/blog' replace />}/>
       </Routes>
      </div>
    )
  }
}
export default App;
