import React, { useState, useEffect } from "react";
import "./Pick.css";
import { Link } from "react-router-dom";

const PickAdd = () => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [boxValue, setBoxValue] = useState({name: "",price: ""});
  const [billingOption, setBillingOption] = useState("monthly");

  const handleCheckboxChange1 = (name2, price2) => {
    price2=billingOption=="monthly"? price2:"10";
    
    const isChecked = selectedCheckboxes.includes(name2);
    if (isChecked) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== name2)
      );
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, name2]);
    }

    // localStorage.clear();
    localStorage.setItem("flag4", true);
    localStorage.setItem("selectedCheckName2", name2);
    localStorage.setItem("selectedCheckPrice2", price2);
  };
  

  const handleCheckboxChange2 = (name3, price3) => {
    price3=billingOption=="monthly"? price3:"20";
    const isChecked = selectedCheckboxes.includes(name3);
    if (isChecked) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== name3)
      );
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, name3]);
    }

    // localStorage.clear();
    localStorage.setItem("flag5", true);
    localStorage.setItem("selectedCheckName3", name3);
    localStorage.setItem("selectedCheckPrice3", price3);
  };

  const handleCheckboxChange3 = (name4, price4) => {
    
    price4=billingOption=="monthly"? price4:"20";
    const isChecked = selectedCheckboxes.includes(name4);
    if (isChecked) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== name4)
      );
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, name4]);
    }
    // localStorage.clear();
    localStorage.setItem("flag6", true);
    localStorage.setItem("selectedCheckName4", name4);
    localStorage.setItem("selectedCheckPrice4", price4);
  };

  // const handleBillingOptionChange = () => {
  //   const newBillingOption = billingOption === "monthly" ? "yearly" : "monthly";
  //   setBillingOption(newBillingOption);
   
  //   localStorage.setItem("billingOption", newBillingOption); 
  //   // console.log("SelectPlan",billingOption);
  // };

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

  return (
    <>
      <div className="col-6 mt-5" style={{ margin: "auto" }}>
        <div style={{ textAlign: "start" }}>
          <b>
            <h2 className="heading_color">Pick add-ons</h2>
          </b>
          <p style={{ color: "grey" }}>
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="mt-4 child_div">
          <div className="service_box_1">
            <div className="d-flex">
              <div className="input_checkbox">
                <input
                  type="checkbox"
                  checked={selectedCheckboxes.includes("Online service")}
                
                  onChange={() => handleCheckboxChange1("Online service", "1")}
                />
              </div>
              <div className="header_margin">
                <b>
                  <p className="heading_color_p">Online service</p>
                </b>
                <p className="sub_heading_p">Access to multiplayer games</p>
              </div>
            </div>
            <div className="price">
              {/* <p>+$1/mo</p> */}
              <p>{billingOption === "monthly" ? `$1/mo` : `$10/yr`}</p>
            </div>
          </div>
          <div className="service_box_1 mt-3">
            <div className="d-flex">
              <div className="input_checkbox">
                <input
                  type="checkbox"
                  checked={selectedCheckboxes.includes("Larger storage")}
                
                  onChange={() => handleCheckboxChange2("Larger storage", "2")}
                />
              </div>
              <div className="header_margin">
                <b>
                  <p className="heading_color_p">Larger storage</p>
                </b>
                <p className="sub_heading_p">Extra 1TB cloud save</p>
              </div>
            </div>
            <div className="price">
              {/* <p>+$2/mo</p> */}
              <p>{billingOption === "monthly" ? `$2/mo` : `$20/yr`}</p>
            </div>
          </div>
          <div className="service_box_1 mt-3">
            <div className="d-flex">
              <div className="input_checkbox">
                <input
                  type="checkbox"
                  checked={selectedCheckboxes.includes("Customizable Profile")}
                  onChange={() =>
                    handleCheckboxChange3("Customizable Profile", "2")
                  }
                 
                />
              </div>
              <div className="header_margin">
                <b>
                  <p className="heading_color_p">Customizable Profile</p>
                </b>
                <p className="sub_heading_p">Custom theme on your Profile</p>
              </div>
            </div>
            <div className="price">
              {/* <p>+$2/mo</p> */}
              <p>{billingOption === "monthly" ? `$2/mo` : `$20/yr`}</p>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "4rem" }}
        >
          <Link to="/selectplan">
            <button className="btn goback_btn">Go Back</button>
          </Link>
          <Link to="/finishing">
            <button className="btn btn-lg next_btn" type="submit">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PickAdd;
