import React from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import HeaderCard from '../../../../../Common/Component/HeaderCard';


var panError = document.getElementById("panNumber-error");
var tinError = document.getElementById("tinNumber-error");
var tanError = document.getElementById("tanNumber-error");
var gstError = document.getElementById("gstNumber-error");
var cinError = document.getElementById("cinNumber-error");
var factoryLicenceError = document.getElementById("factoryLicence-error");
var moaError = document.getElementById("moa-error");
var consentError = document.getElementById("consent-error");
var certificateError = document.getElementById("certificate-error");
var pfCodeError = document.getElementById("pfCode-error");
var esicCodeError = document.getElementById("ESIC-error");
var taxError = document.getElementById("tax-error");

// Function For Validate PAN Number

function validatePAN() {
  var panNumber = document.getElementById("panNumber").value;
  if (panNumber.length === 0){
    panError.innerHTML = "Organization PAN Number is Required";
    return false;
  }
  if (!panNumber.match(/^([A-Z]){3}(C|P|H|F|A|T|B|L|J|G){1}([A-Z]){1}([0-9]){4}([A-Z]){1}?$/))
  {
    panError.innerHTML = "Invalid PAN";
    return false;
  }
  panError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate TIN Number

function validateTIN() {
  var tinNumber = document.getElementById("tinNumber").value;
  if (tinNumber.length === 0){
    tinError.innerHTML = "TIN Number is Required";
    return false;
  }
  if (!tinNumber.match(/^(?![-])(?!.*[-]$)(?!.*[-]{2})[0-9-]+$/))
  {
    tinError.innerHTML = "Invalid TIN Number";
    return false;
  }
  tinError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate TIN Number

function validateTAN() {
  var tanNumber = document.getElementById("tanNumber").value;
  if (tanNumber.length === 0){
    tanError.innerHTML = "TAN Number is Required";
    return false;
  }
  if (!tanNumber.match(/^S4[0-9]{5}$^S1/))
  {
    tanError.innerHTML = "Invalid TAN Number";
    return false;
  }
  tanError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate GST Number

function validateGST() {
  var gstNumber = document.getElementById("gstNumber").value;
  if (gstNumber.length === 0){
    gstError.innerHTML = "GST Number is Required";
    return false;
  }
  if (!gstNumber.match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/))
  {
    gstError.innerHTML = "Invalid GST Number";
    return false;
  }
  gstError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate CIN Number

function validateCIN() {
  var cinNumber = document.getElementById("cinNumber").value;
  if (cinNumber.length === 0){
    cinError.innerHTML = "CIN Number is Required";
    return false;
  }
  if (!cinNumber.match(/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/))
  {
    cinError.innerHTML = "Invalid CIN Number";
    return false;
  }
  cinError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Factory Licence Number

function validateFactoryLicence() {
  var factoryLicenceNumber = document.getElementById("factoryLicence").value;
  if (factoryLicenceNumber.length === 0){
    factoryLicenceError.innerHTML = "CIN Number is Required";
    return false;
  }
  if (!factoryLicenceNumber.match(/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/))
  {
    factoryLicenceError.innerHTML = "Invalid CIN Number";
    return false;
  }
  factoryLicenceError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate MOA/AOA

function validateMOA() {
  var moaNumber = document.getElementById("moa").value;
  if (moaNumber.length === 0){
    moaError.innerHTML = "MOA/AOA is Required";
    return false;
  }
  if (!moaNumber.match(/^([LUu]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/))
  {
    moaError.innerHTML = "Invalid MOA/AOA";
    return false;
  }
  moaError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Pollution Consent

function validatePollutionConsent() {
  var pollutionConsent = document.getElementById("consent").value;
  if (pollutionConsent.length === 0){
    consentError.innerHTML = "Pollution Consent is Required";
    return false;
  }

  consentError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Organization Certificate No.

function validateCertificateNo() {
  var certificateNumber = document.getElementById("certificateNumber").value;
  if (certificateNumber.length === 0){
    certificateError.innerHTML = "Organization Certificate Number is Required";
    return false;
  }

  certificateError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate PF Code

function validatePfCode() {
  var pfCode = document.getElementById("pfCode").value;
  if (pfCode.length === 0){
    pfCodeError.innerHTML = "PF Code is Required";
    return false;
  }
  if (!pfCode.match(/^[A-Z]{2}[\s\/]?[A-Z]{3}[\s\/]?[0-9]{7}[\s\/]?[0-9]{3}[\s\/]?[0-9]{7}$/))
  {
    pfCodeError.innerHTML = "Invalid PF Code";
    return false;
  }
  pfCodeError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate ESIC Code

function validateEsicCode() {
  var esicNumber = document.getElementById("esicNumber").value;
  if (esicNumber.length === 0){
    esicCodeError.innerHTML = "ESIC Code is Required";
    return false;
  }
  if (!esicNumber.match(/^[0-9]{2}\p{Pd}[0-9]{2}\p{Pd}[0-9]{6}\p{Pd}[0-9]{3}\p{Pd}[0-9]{4}$/))
  {
    esicCodeError.innerHTML = "Invalid ESIC Code";
    return false;
  }
  esicCodeError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Professional Tax Code

function validateTaxCode() {
  var taxNumber = document.getElementById("taxNumber").value;
  if (taxNumber.length === 0){
    taxError.innerHTML = "Professional Tax Code is Required";
    return false;
  }
  
  taxError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}



// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, prevStep, values }) => {
   //creating error state for validation

   var submitErrors = document.getElementById("submit-error");


  //   // after form submit validating the form data using validator
  
  const submitFormData = (e) => 
  {
    e.preventDefault();
    if(!validateCIN() || !validateCertificateNo() || !validateEsicCode() || !validateFactoryLicence() || !validateGST() || !validateMOA() || !validatePAN() || !validatePfCode() || !validatePollutionConsent() || !validateTAN() || !validateTIN() || !validateTaxCode())
    {
      submitErrors.innerHTML = "Please Fix Error To Continue";
      return false;
    }
    else{
    nextStep();
    }

  }


  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
        <Form style={{ marginLeft : "20px", marginRight : "20px" }}>
          <HeaderCard title="Company Details"/>
          <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>PAN Of Organization <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="panNumber"
                id="panNumber"
              />
               <span id="panNumber-error" className="formerror"></span>
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>TIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="tinNumber"
                id="tinNumber"
              />
               <span id="tinNumber-error" className="formerror"></span>
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>TAN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="tanNumber"
                id="tanNumber"
              />
               <span id="tanNumber-error" className="formerror"></span>
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>GST Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="gstNumber"
                id="gstNumber"
              />
               <span id="gstNumber-error" className="formerror"></span>
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>CIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="cinNumber"
                id="cinNumber"
              />
               <span id="cinNumber-error" className="formerror"></span>
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Factory Licence No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="factoryLicence"
                id="factoryLicence"
              />
               <span id="factoryLicence-error" className="formerror"></span>
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>MOA/AOA <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="moa"
                id="moa"
              />
               <span id="moa-error" className="formerror"></span>
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Pollution Consent <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="consent"
                id="consent"
              />
               <span id="consent-error" className="formerror"></span>
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Organization Certificate No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="certificateNumber"
                id="certificateNumber"
              />
               <span id="certificate-error" className="formerror"></span>
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>PF Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="pfCode"
                id="pfCode"
              />
               <span id="pfCode-error" className="formerror"></span>
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>ESIC Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="esicNumber"
                id="esicNumber"
              />
               <span id="ESIC-error" className="formerror"></span>
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
                name="taxNumber"
                id="taxNumber"
              />
               <span id="tax-error" className="formerror"></span>
             </Col>
           
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop : "40px" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit" onClick={submitFormData}>
                Next
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
