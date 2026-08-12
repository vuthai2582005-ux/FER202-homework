import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HeroCarousel from './components/HeroCarousel';
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      <NavigationBar />
      <HeroCarousel />
      <MenuSection />
      <BookingForm />
    </div>
  );
}

export default App;