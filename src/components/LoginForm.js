import React from "react";
import { Dialog } from "primereact/dialog";
import { logo } from "../assets/images";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ref } from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
};

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
// Name needs to be camelCase
const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "Too Sort!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(4, "Too Sort!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
  dop: Yup.date().required("Required Date"),
});

export const LoginForm = ({ isLoginFormOpen, setIsLoginFormOpen }) => {
  return (
    <div>
      <Dialog
        header={<img src={logo} alt="logo" className="w-3rem h-3rem" />}
        visible={isLoginFormOpen}
        className="max-w-40rem"
        onHide={() => setIsLoginFormOpen(false)}
      >
        <h3 className="text-3xl uppercase white-space-normal font-normal text-center">
          Become a Movie App Member
        </h3>
        <p className="mb-3 text-base text-center">
          Create a Nike Member profile and get first access of your best movie
        </p>

        <Formik
          // Initial values should be defined outside of the component to avoid extra rerendering
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            setIsLoginFormOpen(false);
            // actions.resetForm({
            //   values: initialValues,
            // });
          }}
        >
          {({ values, errors, touched, isSubmitting, handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex  flex-wrap justify-content-center gap-3"
            >
              <div className="dialog-input-fields">
                {/** Formik bindings are missing for all form controls along with error handling */}
                <label htmlFor="firstName">First Name</label> <br />
                <Field
                  type="text"
                  name="firstName"
                  className="dialog-input"
                  value={values.firstName}
                />
                {touched.firstName && errors.firstName}
              </div>
              <div className="dialog-input-fields">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="dialog-input"
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName}
              </div>
              <div className="dialog-input-fields">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="dialog-input"
                  value={values.email}
                />
                {touched.email && errors.email}
              </div>
              <div className="dialog-input-fields">
                <label htmlFor="dob">Date of Birth</label>
                <Field
                  type="date"
                  name="dob"
                  className="dialog-input"
                  value={values.dob}
                />
                {touched.dob && errors.dob}
              </div>

              <div className="dialog-input-fields">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="dialog-input"
                  value={values.password}
                />
                {touched.password && errors.password}
              </div>
              <div className="dialog-input-fields">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <Field
                  type="password"
                  name="confirmPassword"
                  className="dialog-input"
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword}
              </div>

              <div className="my-3">
                <button
                  className="form-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};
