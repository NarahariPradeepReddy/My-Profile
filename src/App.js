import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="About Me"/>
      <p>My name is Narahari Pradeep Kumar Reddy, I have a total of 6 years of IT experiance relevent to react I have 1.2 years where I used to work on HTML, CSS, JavaScripts and Reactjs</p>
      <Section title="Skills"/>
      <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                    <li>Reactjs</li>
                </ul>
      <Section title="Projects"/>
      <p> </p>
      <Section title="Work Experience"/>
      <p> </p>
      <Section title="Educational Details"/>
      <p> </p>
      <Footer />
    </div>
  );
}

export default App;
