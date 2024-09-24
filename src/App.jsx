import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Review from './components/Review';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem';
import UpdateShow from './components/UpdateShow';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Navbar />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<Review />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add' element={<AddNewItem/>}/>
        <Route path='/update' element={<UpdateItem/>}/>
        </Route>
      
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
