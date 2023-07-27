import React from "react";
import "./Select.css";
import { Link } from "react-router-dom";
const SelectPlan = () => {
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
                  <div className="box">
                    <img src="/images/icon-arcade.svg" alt="Arcade" className="icon_set mt-4" />
                    <div className="box_inner_text mt-5">
                      <p className="box_price">Arcade</p>
                      <p>$9/mo</p>
                    </div>
                  </div>
                  <div className="box">
                    <img src="/images/icon-advanced.svg" alt="Advanced" className="icon_set mt-4"/>
                    <div className="box_inner_text mt-5">
                      <p className="box_price">Advanced</p>
                      <p>$12/mo</p>
                    </div>
                  </div>
                  <div className="box3">
                    <img
                      src="images/icon-pro.svg"
                      alt="Pro"
                      className="icon_set mt-4"
                    />
                    <div className="box_inner_text mt-5">
                      <p className="box_price">Pro</p>
                      <p>$15/mo</p>
                    </div>
                  </div>
                </div>
                <div className="child mt-4">
                    <div className="child_text_align" >Monthly</div>
                    <div className="btn_on_off form-check form-switch">
                        <input className="form-check-input swtich_btn" type="checkbox" id="flexSwitchCheckChecked" />
                        </div>
                    <div className="year_text">Yearly</div>
                </div>
                <div className="d-flex justify-content-between"
                      style={{ marginTop: "6rem" }}
                    >
                        <Link to="/"><button className="btn select_goback">Go Back</button></Link>
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
