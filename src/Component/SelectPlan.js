import React,{useState,useEffect} from "react";
import "./Select.css";
import { Link } from "react-router-dom";

import Finishing from "./Finishing";
const SelectPlan = () => {
  const [boxValue, setBoxValue] = useState({name: "",price: ""});
  const [billingOption, setBillingOption] = useState("monthly");

  const handleBillingOptionChange = () => {
    const newBillingOption = billingOption === "monthly" ? "yearly" : "monthly";
    setBillingOption(newBillingOption);
   
    localStorage.setItem("billingOption", newBillingOption); 
    // console.log("SelectPlan",billingOption);
  };

  useEffect(() => {
    const savedBillingOption = localStorage.getItem("billingOption");
    if (savedBillingOption) {
      setBillingOption(savedBillingOption);
    }
    const selectedPlanName = localStorage.getItem("selectedPlanName");
    const selectedPlanPrice = localStorage.getItem("selectedPlanPrice");
    if (selectedPlanName && selectedPlanPrice) {
      setBoxValue({ name: selectedPlanName, price: selectedPlanPrice });
    }

    
  }, []);

  const handleBoxClick1 = (name, price) => {
   

    price=billingOption=="monthly"? price:"16";
   


    localStorage.clear();
    localStorage.setItem("flag1",true );
    localStorage.setItem("selectedPlanName",name );
    localStorage.setItem("selectedPlanPrice",price );
    setBoxValue({ name, price }); 
  
    
  };

  const handleBoxClick2 = (name, price) => {

    price=billingOption=="monthly"? price:"17";
  
    localStorage.clear();
    localStorage.setItem("flag2",true );
    localStorage.setItem("selectedPlanName",name );
    localStorage.setItem("selectedPlanPrice",price );
    setBoxValue({ name, price }); 

  };

  const handleBoxClick3 = (name, price) => {

    price=billingOption=="monthly"? price:"18";
    localStorage.clear();
    localStorage.setItem("flag3",true );
    localStorage.setItem("selectedPlanName",name );
    localStorage.setItem("selectedPlanPrice",price );
    setBoxValue({ name, price }); 
 
  };

  // const formatPriceWithDollar = (price) => {
  //   return `$${price}`;
  // };

  
  return (
    <>
              <div
                className="col-6 mt-5"
                style={{ alignSelf: "center", margin: "auto" }}
              >
                <div style={{ textAlign: "start" }}>
                  <b>
                    <h2 className="heading_color">Select your plan</h2>
                  </b>
                  <p style={{ color: "grey" }}>
                    You have the option of monthly or yearly billing
                  </p>
                </div>

                <div className="d-flex justify-content-between mt-5">
                  <div className={`box ${boxValue.name === "Arcade" ? "selected" : ""}`}   onClick={()=>handleBoxClick1("Arcade","9")}>
                    <img src="/images/icon-arcade.svg" alt="Arcade" className="icon_set mt-4" />
                    <div className="box_inner_text mt-5" >
                      <p className="box_price">Arcade</p>
                      {billingOption === "monthly" ? `$9/mo` : `$16/yr`}

                    </div>
                  </div>
                  <div className={`box ${boxValue.name === "Advanced" ? "selected" : ""}`}   onClick={() => handleBoxClick2("Advanced", "12")} >
                    <img src="/images/icon-advanced.svg" alt="Advanced" className="icon_set mt-4"/>
                    <div className="box_inner_text mt-5">
                      <p className="box_price">Advanced</p>
                      <p>{billingOption === "monthly" ? `$12/mo` : `$17/yr`}</p>

                    </div>
                  </div>
                  <div className={`box3 ${boxValue.name === "Pro" ? "selected" : ""}`}   onClick={() => handleBoxClick3("Pro","15")}>
                    <img
                      src="images/icon-pro.svg"
                      alt="Pro"
                      className="icon_set mt-4"
                    />
                    <div className="box_inner_text mt-5" >
                      <p className="box_price">Pro</p>
                      <p>{billingOption === "monthly" ? `$15/mo` : `$18/yr`}</p>

                    </div>
                  </div>
                </div>
                <div className="child mt-4">
                    <div className="child_text_align" >Monthly</div>
                    <div className="btn_on_off form-check form-switch">
                        <input className="form-check-input swtich_btn" type="checkbox" id="flexSwitchCheckChecked"
                         onClick={handleBillingOptionChange}
                         checked={billingOption === "yearly"}
                          />
                        </div>
                    <div className="year_text">Yearly</div>
                </div>
                <div className="d-flex justify-content-between"
                      style={{ marginTop: "6rem" }}
                    >
                        <Link to="/personalplan"><button className="btn select_goback">Go Back</button></Link>
                      <Link to="/pickadd">
                      <button className="btn btn-lg next_btn" type="submit" >
                        Next Step
                      </button>
                      </Link>
                    </div>

                    
              </div>
    </>
  );
};

export default SelectPlan;
