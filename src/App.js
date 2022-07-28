// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //hooks
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState({'maxWidth': '800px', 'margin':'auto', 'backgroundColor':'rgb(211 211 211)', 'padding':'2% 5% 5% 5%'});

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#202949';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      setStyle({'maxWidth': '800px', 'margin':'auto', 'backgroundColor':'#030b21', 'padding':'2% 5% 5% 5%'});
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      setStyle({'maxWidth': '800px', 'margin':'auto', 'backgroundColor':'rgb(211 211 211)', 'padding':'2% 5% 5% 5%'});
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" item1="Home" item2="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
      <Switch>
        <Route path="/" element={<TextForm heading="Word Counter" mode={mode} /*showAlert={showAlert}*/ style={style}/>} />
        <Route path="/about" element={<About />} /> 
      </Switch>
    </div>
    
    </>
  );
}

export default App;

