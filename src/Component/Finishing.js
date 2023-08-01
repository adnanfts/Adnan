import React, { useEffect, useState } from "react";
import "./Finish.css";
import { Link } from "react-router-dom";
const Finishing = () => {
  const [name,setName]=useState();
  const [price,setPrice]=useState();
  const [name2,setName2]=useState();
  const [price2,setPrice2]=useState();
  const [name3,setName3]=useState();
  const [price3,setPrice3]=useState();
  const [name4,setName4]=useState();
  const [price4,setPrice4]=useState();


  const storedData = localStorage.getItem('userData');

  const data=localStorage.getItem("flag1");
  const data2=localStorage.getItem("flag2");
  const data3=localStorage.getItem("flag3");

  useEffect(() => {

    const storedSelectedCheckboxes = JSON.parse(localStorage.getItem("selectedCheckboxes")) || [];
    
    if (data === "true") {
      const name = localStorage.getItem("selectedPlanName");
      const price = localStorage.getItem("selectedPlanPrice");
      setName(name);
      setPrice(price)
      // alert("calling local storage");
    }
    if (data2 === "true") {
      const name = localStorage.getItem("selectedPlanName");
      const price = localStorage.getItem("selectedPlanPrice");
      setName(name);
      setPrice(price)
    }
    if (data3 === "true") {
      const name = localStorage.getItem("selectedPlanName");
      const price = localStorage.getItem("selectedPlanPrice");
      setName(name);
      setPrice(price)
    }
  }, [data, data2, data3]);
  

  const check4=localStorage.getItem("flag4");
  const check5=localStorage.getItem("flag5");
  const check6=localStorage.getItem("flag6");

  useEffect(() => {

    if (check4 === "true") {
      const name2 = localStorage.getItem("selectedCheckName2");
      const price2 = localStorage.getItem("selectedCheckPrice2");
      setName2(name2);
      setPrice2(price2)
      // alert("calling local storage");
    }
    if (check5 === "true") {
      const name3 = localStorage.getItem("selectedCheckName3");
      const price3 = localStorage.getItem("selectedCheckPrice3");
      setName3(name3);
      setPrice3(price3)
    }
    if (check6 === "true") {
      const name4 = localStorage.getItem("selectedCheckName4");
      const price4 = localStorage.getItem("selectedCheckPrice4");
      setName4(name4);
      setPrice4(price4)
    }
  }, [check4, check5, check6]);


  const calculateTotal = () => {
    // Initialize the sum variable
    let sum = 0;

    // Retrieve the values from localStorage and convert them to numbers
    const price = parseFloat(localStorage.getItem("selectedPlanPrice"));
    const price2 = parseFloat(localStorage.getItem("selectedCheckPrice2"));
    const price3 = parseFloat(localStorage.getItem("selectedCheckPrice3"));
    const price4 = parseFloat(localStorage.getItem("selectedCheckPrice4"));

    // Check if the parsed values are valid numbers, then add them to the sum
    if (!isNaN(price)) sum += price;
    if (!isNaN(price2)) sum += price2;
    if (!isNaN(price3)) sum += price3;
    if (!isNaN(price4)) sum += price4;

    // Return the total sum
    return sum.toFixed(2);
  };

  const totalPerMonth = calculateTotal();
  
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
                    <h2 className="heading_color">Finishing Up</h2>
                  </b>
                  <p style={{ color: "grey" }}>
                    Double-check every thing looks Ok before confirming
                  </p>
                </div>
                <div className="mt-4 finish_child_div">
                  <div className="finish_box_1">
                    <div style={{textAlign:"start"}}>
                      <div>
                        <b>
                          <p style={{ color: "rgb(31, 31, 83)" }}>
                            {name}(Monthly)
                          </p>
                        </b>
                        <a style={{paddingTop: "3px" }}>
                          Change
                        </a>
                      </div>
                    </div>
                    <div className="finish_price">
                      <p> ${price}/mo</p>
                    </div>
                    <hr/>

                   <div className="pt-2 d-flex justify-content-between">
                   <div style={{textAlign:"start"}}>
                      <div>
                      
                          <p style={{ color: "gray" }}>
                          {name2}
                          </p>
                   
                      </div>
                    </div>
                    <div className="finish_price_second">
                      <p> +${price2}/mo
                      </p>
                    </div>
                   </div>

                   <div className="pt-3 d-flex justify-content-between">
                   <div style={{textAlign:"start"}}>
                      <div>
                          <p style={{ color: "gray" }}>
                          {name3}
                          </p>
                        
                      </div>
                    </div>
                    <div className="finish_price_second">
                      <p>
                      +${price3}/mo
                        </p>
                    </div>
                   </div>
                   <div className="pt-3 d-flex justify-content-between">
                   <div style={{textAlign:"start"}}>
                      <div>
                          <p style={{ color: "gray" }}>
                          {name4}
                          </p>
                      </div>
                    </div>
                    <div className="finish_price_second">
                      <p>
                      +${price4}/mo
                        </p>
                    </div>
                   </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-around">
                  <p style={{color:'gray'}}>Total (per month)</p>
                  <p style={{color:'rgb(83, 83, 155)',fontWeight:"900"}}>
                  ${totalPerMonth}
                    </p>
                </div>

                <div
                  className="d-flex justify-content-between"
                  style={{ marginTop: "4rem" }}
                >
                  <Link to="/pickadd"><button className="btn finish_goback">Go Back</button></Link>
                  <Link to="/thankyou">
                  <button className="btn btn-lg next_btn" type="submit">
                    Next Step
                  </button>
                  
                  </Link>
                </div>
              </div>
    </>
  );
};

export default Finishing;
