import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "./Component/PersonalInfo";
import SelectPlan from "./Component/SelectPlan";
import PickAdd from "./Component/PickAdd";
import Finishing from "./Component/Finishing";
import ThankYou from "./Component/ThankYou";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Component/Personal.css";
import { Link } from "react-router-dom";
import { createContext } from "react";


function App() {
  

  
  const [boxValue, setBoxValue] = useState({name: "",price: ""});

  return (
    <div className="App">
      <div className="background" style={{ backgroundColor: "#e5f3ef" }}>
        <div className="container p-3">
          <div className="personal_main">
            <div className="row">
            <BrowserRouter>

              <div className="col-3 mt-3">
                <div style={{ position: "relative" }}>
                  <img
                    src="/images/sidebar.svg"
                    alt="sidebar"
                    className="personal_img"
                  />

                  <div className="text_show">
                    <div className="d-flex mb-4">
                      <div>
                        <Link to="/personalplan"><p className="number_circle">1</p></Link>
                      </div>
                      <div className="text-size">
                        <p style={{ color: "lightgrey" }}>STEP 1</p>
                        <p className="pic_text" >YOUR INFO</p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div>
                        <Link to="/selectplan"><p className="number_circle">2</p></Link>
                      </div>
                      <div className="text-size">
                        <p style={{ color: "lightgrey" }}>STEP 2</p>
                        <p className="pic_text" >SELECT PLANS</p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div>
                        <Link to="/pickadd"><p className="number_circle">3</p></Link>
                      </div>
                      <div className="text-size">
                        <p style={{ color: "lightgrey" }}>STEP 3</p>
                        <p className="pic_text">ADD-ONS</p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div>
                        <Link to="/finishing"><p className="number_circle">4</p></Link>
                      </div>
                      <div className="text-size">
                        <p style={{ color: "lightgrey" }}>STEP 4</p>
                        <p className="pic_text">SUMMARY</p>
                      </div>
                    </div>
                    {/* <div className="d-flex ">
                      <div>
                        <Link to="/thankyou"><p className="number_circle">5</p></Link>
                      </div>
                      <div className="text-size">
                        <p style={{ color: "lightgrey" }}>STEP 5</p>
                        <p className="pic_text" >SUMMARY</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
             

              
          
                <Routes>
                  <Route exact path="/personalplan" element={<PersonalInfo />} />
                  <Route exact path="/selectplan" element={<SelectPlan />} />
                  <Route exact path="/pickadd" element={<PickAdd />} />
                  <Route exact path="/finishing" element={<Finishing />} />
                  <Route exact path="/thankyou" element={<ThankYou />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
