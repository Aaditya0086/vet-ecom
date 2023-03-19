import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import ContactUS from "./Components/ContactUS";
import React, {useState} from "react";
import Footer from "./Components/Footer";
import Alerts from "./Components/Alerts";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {


  const [alerts, setAlerts] = useState(null);

  const showAlert = (message, type) => {
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlerts(null)
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar />
      {/* <Alert alert = {alert}/> */}
      <Alerts alert={alerts}/>

      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/aboutUs" element={<AboutUS/>}/>
      <Route exact path ="/contactUS" element={<ContactUS showAlert={showAlert}/>}/>
      
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
