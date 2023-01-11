import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contactus from './components/Contactus';
// import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

//images for services
import web from './components/images/background2.jpg';
import app from './components/images/background1.jpg';
import code from './components/images/prog1.jpg';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>

      <Home/>
      <About/>
      <h2 style={{ marginLeft: '1.5em', marginTop: '.2em',color: 'rgb(126, 34, 206)' }}>Services</h2>
      <div className='mainservices' id='services1'>
        <Services imgname={web} name="Web Design "/>
        <Services imgname={app} name="App Design "/>
        <Services imgname={code} name="Coding teaching "/>
        <Services imgname={web} name="Accounting "/>
      </div>
      <h2 style={{ marginLeft: '1.5em', marginTop: '.2em',color: 'rgb(126, 34, 206)' }}>Contact us</h2>
      <Contactus/>
      <div className='footer'>
        <p>© 2022 All rights reserved</p>
      </div>
    </div>
    </>
  );
}

export default App;
