import React, { Component } from 'react';
import './App.css';
import FirstSection from './Components/First_Section/First_Section_Content';
import SecondSection from './Components/Second_Section/second_section';
import ThirdSection from './Components/Third_Section/third_section';
import FourthSection from './Components/Fourth_Section/fourth_section';
import FifthSection from './Components/Fifth_Section/fifth_section';
import Footer from './Components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Footer />
      </div>
    );
  }
}

export default App;
