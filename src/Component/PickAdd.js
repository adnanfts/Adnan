import React from "react";
import "./Pick.css";
import { Link } from "react-router-dom";

const PickAdd = () => {
  return (
    <>
    <div
                className="col-6 mt-5"
                style={{  margin: "auto" }}
              >
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
                        <div className="input_checkbox"><input type="checkbox"/></div>
                        <div className="header_margin">
                        <b><p className="heading_color_p">Online service</p></b>
                        <p className="sub_heading_p">Access to multiplayer games</p>
                        </div>
                        </div>
                        <div className="price">
                            <p>+$1/mo</p>
                        </div>
                    </div>
                    <div className="service_box_1 mt-3">
                    <div className="d-flex">
                        <div className="input_checkbox"><input type="checkbox" checked/></div>
                        <div className="header_margin">
                        <b><p className="heading_color_p">Larger storage</p></b>
                        <p className="sub_heading_p">Extra 1TB cloud save</p>
                        </div>
                        </div>
                        <div className="price">
                            <p>+$2/mo</p>
                        </div>
                    </div>
                    <div className="service_box_1 mt-3">
                    <div className="d-flex">
                        <div className="input_checkbox"><input type="checkbox" /></div>
                        <div className="header_margin">
                        <b><p className="heading_color_p">Customizable Profile</p></b>
                        <p className="sub_heading_p">Custom theme on your Profile</p>
                        </div>
                        </div>
                        <div className="price">
                            <p>+$2/mo</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between"style={{ marginTop: "4rem"}}>
                      <Link to="/selectplan"><button className="btn goback_btn" >Go Back</button></Link>
                      <Link to="/finishing">
                      <button className="btn btn-lg next_btn" type="submit" >
                        Next Step
                      </button></Link>
                    </div>
              </div>
    </>
  );
};

export default PickAdd;
