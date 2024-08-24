// import { CloseIcon } from "Views/Icons";
import React, { Fragment, useState } from "react";
import "App.css";
import { Form as MyForm, FormControl, Button } from "react-bootstrap";
import { TAMIL_MONTH, TAMIL_STARS, LABELS } from "constants";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const GoushalaForm = () => {
  const [language, setLanguage] = useState("ta");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.checked ? "ta" : "en");
  };
  const initialValues = {
    name: "",
    introName: "",
    phoneNumber: "",
    archanaiName: "",
    archanaiPhoneNumber: "",
    archanaiStar: "",
    archanaiDOB: "",
    archanaiDetails: "",
    address: "",
    email: "",
    submit: "",
    donation: "",
    addressForsendingDoantion: "",
    switchLabel: "",
    transactionDetails: "",
    comments: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      // .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });
  const onSubmit = (values) => {
    console.log(JSON.stringify(values));
  };
  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <div className="container">
            <h2 className="formTitle">கொடுமுடி பசுமடம்</h2>
            <MyForm className="formFieldContainer row g-3">
              <MyForm.Group controlId="name" className="col-md-6">
                <MyForm.Label className="required-asterisk">
                  {LABELS[language].name}
                </MyForm.Label>
                {console.log(errors)}
                <Field
                  name="name"
                  as={FormControl}
                  isInvalid={errors?.name}
                  onChange={handleChange}
                  //  placeholder={LABELS[language].name}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </MyForm.Group>
              <MyForm.Group className="col-md-6">
                <MyForm.Label>{LABELS[language].phoneNumber}</MyForm.Label>
                <Field
                  name="phoneNumber"
                  as={FormControl}
                  // placeholder={LABELS[language].phoneNumber}
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-danger"
                />
              </MyForm.Group>
              <MyForm.Group className="col-md-6">
                <MyForm.Label>{LABELS[language].introName}</MyForm.Label>
                <Field
                  name="introName"
                  as={FormControl}
                  // placeholder={LABELS[language].introName}
                />
                <ErrorMessage
                  name="introName"
                  component="div"
                  className="text-danger"
                />
              </MyForm.Group>

              <MyForm.Group className="col-md-6">
                <MyForm.Label>{LABELS[language].archanaiName}</MyForm.Label>
                <Field
                  name="archanaiName"
                  as={FormControl}
                  // placeholder={LABELS[language].archanaiName}
                />
              </MyForm.Group>
              <MyForm.Group className="col-md-6">
                <MyForm.Label>
                  {LABELS[language].archanaiPhoneNumber}
                </MyForm.Label>
                <Field
                  name="archanaiPhoneNumber"
                  as={FormControl}
                  // placeholder={LABELS[language].archanaiPhoneNumber}
                />
              </MyForm.Group>
              <MyForm.Group className="col-md-6">
                <MyForm.Label>{LABELS[language].archanaiDOB}</MyForm.Label>
                <MyForm.Select name="archanaiDOB">
                  <option>Select Month</option>
                  {TAMIL_MONTH.map(({ label, value }) => (
                    <Fragment key={value}>
                      <option value={value}>{label}</option>
                    </Fragment>
                  ))}
                </MyForm.Select>
              </MyForm.Group>

              <MyForm.Group className="col-md-6">
                <MyForm.Label>{LABELS[language].archanaiStar}</MyForm.Label>

                <MyForm.Select name="archanaiStar">
                  <option>Select Star</option>
                  {TAMIL_STARS.map(({ label, value }) => (
                    <Fragment key={value}>
                      <option value={value}>{label}</option>
                    </Fragment>
                  ))}
                </MyForm.Select>
              </MyForm.Group>
              <MyForm.Group className="col-md-12">
                <MyForm.Label>{LABELS[language].archanaiDetails}</MyForm.Label>
                <FormControl
                  name="archanaiDetails"
                  as="textarea"
                  rows={3}
                  // placeholder={LABELS[language].archanaiDetails}
                />
              </MyForm.Group>

              <MyForm.Group className="mb-3">
                <MyForm.Label>{LABELS[language].address}</MyForm.Label>
                <FormControl
                  name="address"
                  as="textarea"
                  rows={3}
                  // placeholder={LABELS[language].address}
                />
              </MyForm.Group>
              <MyForm.Group className="mb-3">
                <MyForm.Label>{LABELS[language].donation}</MyForm.Label>
                <Field
                  name="donation"
                  as={FormControl}
                  // placeholder={LABELS[language].donation}
                />
              </MyForm.Group>
              <MyForm.Group className="mb-3">
                <MyForm.Label>
                  {LABELS[language].addressForsendingDoantion}
                </MyForm.Label>
                <FormControl
                  name="addressForsendingDoantion"
                  as="textarea"
                  rows={2}
                  // placeholder={LABELS[language].addressForsendingDoantion}
                />
              </MyForm.Group>
              <MyForm.Group className="mb-3">
                <MyForm.Label>
                  {LABELS[language].transactionDetails}
                </MyForm.Label>
                <FormControl
                  name="transactionDetails"
                  as="textarea"
                  rows={3}
                  // placeholder={LABELS[language].transactionDetails}
                />
              </MyForm.Group>
              <MyForm.Group className="mb-3">
                <MyForm.Label>{LABELS[language].comments}</MyForm.Label>
                <FormControl
                  name="comments"
                  as="textarea"
                  rows={2}
                  // placeholder={LABELS[language].comments}
                />
              </MyForm.Group>
            </MyForm>
            {/* <div>
              <Button
                style={{ width: "200px" }}
                variant="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div> */}
          </div>
        )}
      </Formik>
    </div>
  );
};
export default GoushalaForm;
