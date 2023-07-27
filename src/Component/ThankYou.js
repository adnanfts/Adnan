import React from "react";
import "./Thank.css";

const ThankYou = () => {
  return (
    <>
      <div className="col-6 m-auto">
              <div className="mb-4">
                <img src="/images/icon-thank-you.svg" alt="thank"/>
              </div>
              <div className="mb-4">
                <h3 className="thank">Thank you!</h3>
              </div>
              <div className="para_color">
              <p>Thanks for confirming your subscription! we hope you have</p>
              <p>fun using our platform.If you ever need support, please feel</p>
              <p>free to email us at support@loremgaming.com.</p>
              </div>
             </div>
    </>
  );
};

export default ThankYou;
