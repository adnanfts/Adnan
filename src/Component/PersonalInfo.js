import React from "react";
import "./Personal.css";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import formSchema from "./schemas/formSchema";
import { Link, Router } from "react-router-dom";


const intialValues = {
  userName: "",
  email: "",
  contact: "",
};
const Validation = {
  userName: "",
  email: "",
  contact: "",
};
const onSubmitForm = {
  userName: "",
  email: "",
  contact: "",
};


const PersonalInfo = () => {
  return (
    <>
      <div
        className="col-6 mt-5"
        style={{ alignSelf: "center", margin: "auto" }}
      >
        <div style={{ textAlign: "start" }}>
          <b>
            {" "}
            <h2 className="heading_color">Personal info</h2>
          </b>
          <p style={{ color: "grey" }}>
            Please provide your name, email address and phone number
          </p>
        </div>
        <div style={{ textAlign: "start" }}>
          <Formik
          initialValues={intialValues}
          validationSchema={formSchema}
          onSubmit={onSubmitForm}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              touched,
              errors,
              ErrorMessage,
            }) => (
              <Form>
                <div className="form-group mb-2">
                  <label htmlFor="userName" className="form-label">
                    Name
                  </label>
                  <Field
                    type="text"
                    className="form-control form-control-lg"
                    id="userName"
                    name="userName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.userName}
                    </p>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="contact" className="form-label">
                    Phone Number
                  </label>
                  <Field
                    type="number"
                    className="form-control form-control-lg"
                    id="contact"
                    name="contact"
                    placeholder="Enter contact number"
                    onChange={handleChange}
                    value={values.contact}
                  />
                  {errors.contact && touched.contact ? (
                    <p className="form-error" style={{ color: "red" }}>
                      {errors.contact}
                    </p>
                  ) : null}
                </div>
             
                  <div
                  className="d-flex justify-content-end"
                  style={{ marginTop: "6rem" }}
                >
                 <Link to="/selectplan">
                 <button
                    className="btn btn-lg next_btn"
                    type="submit"
                  >
                    Next Step
                  </button>
                 </Link>
                </div>
              
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
