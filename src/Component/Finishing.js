import React from "react";
import "./Finish.css";
import { Link } from "react-router-dom";
const Finishing = () => {
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
                            Acade (Monthly)
                          </p>
                        </b>
                        <a style={{paddingTop: "3px" }}>
                          Change
                        </a>
                      </div>
                    </div>
                    <div className="finish_price">
                      <p>$9/mo</p>
                    </div>
                    <hr/>

                   <div className="pt-2 d-flex justify-content-between">
                   <div style={{textAlign:"start"}}>
                      <div>
                      
                          <p style={{ color: "gray" }}>
                          Online services
                          </p>
                   
                      </div>
                    </div>
                    <div className="finish_price_second">
                      <p>+$1/mo</p>
                    </div>
                   </div>

                   <div className="pt-3 d-flex justify-content-between">
                   <div style={{textAlign:"start"}}>
                      <div>
                          <p style={{ color: "gray" }}>
                            Larger storage
                          </p>
                      </div>
                    </div>
                    <div className="finish_price_second">
                      <p>+$2/mo</p>
                    </div>
                   </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-around">
                  <p style={{color:'gray'}}>Total (per month)</p>
                  <p style={{color:'rgb(83, 83, 155)',fontWeight:"900"}}>+$12/mo</p>
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
