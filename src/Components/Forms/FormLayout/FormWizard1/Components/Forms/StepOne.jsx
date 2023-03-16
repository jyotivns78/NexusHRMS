import React from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import HeaderCard from '../../../../../Common/Component/HeaderCard';

var nameError = document.getElementById("name-error");
  var emailError = document.getElementById("email-error");
  var numberError = document.getElementById("number-error");
  var addressError = document.getElementById("address-error");
  
  
  // Function For Validate Name
  
  function validateName() {
    var name = document.getElementById("orgName").value;
    if (name.length === 0){
      nameError.innerHTML = "Organization Name is Required";
      return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
  }
  
  // Function For Validate Email
  
  function validateEmail() {
    var email = document.getElementById("orgEmail").value;
  
    if (email.length === 0)
    {
      emailError.innerHTML = "Organization Email is Required";
      return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
      emailError.innerHTML = "Email Must Contain Letters, and special Character @";
      return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
  }
  
  // Function For Validate Number
  
  function validateNumber() {
    var number = document.getElementById("orgNumber").value;
  
    if (number.length === 0)
    {
      numberError.innerHTML = "Organization Number is Required";
      return false;
    }
    if(!number.match(/^\d{10}$/))
    {
      numberError.innerHTML = "Organization Number Must Be Numeric and 10 Digit";
      return false;
    }
    numberError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
  }
  
  // Function For Validate Organization Address
  
  function validateAddress() {
    var address = document.getElementById("orgAddress").value;
  
    if (address.length === 0)
    {
      addressError.innerHTML = "Organization Address is Required";
      return false;
    }
   
    addressError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
  }
  


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, values }) => {
  //creating error state for validation

  var submitErrors = document.getElementById("submit-error");
  
 
  const submitFormData = (e) => 
  {
    e.preventDefault();
    if(!validateName() || !validateEmail() || !validateNumber() || !validateAddress())
    {
      submitErrors.innerHTML = "Please Fix Error To Continue";
      return false;
    }
    else{
    nextStep();
    }

  }

  return (
    <div>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <Form style={{ marginLeft : "20px", marginRight : "20px" }}>
          <HeaderCard title="Basic Information" />
          <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Organization Name <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
              <Form.Control
                name="orgName"
                id="orgName"
                defaultValue={values.firstName}
                type="text"
                onKeyUp={ validateName }
              />
              <span id="name-error" className="formerror"></span>
              </Col>


            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Organization Email <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
              <Form.Control
                name="orgEmail"
                id="orgEmail"
                defaultValue={values.lastName}
                type="email"
                onKeyUp={ validateEmail }
              />

<span id="email-error" className="formerror"></span>
            </Col>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Organization Number <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
              <Form.Control
                name="orgNumber"
                id="orgNumber"
                defaultValue={values.lastName}
                type="number"
                onKeyUp={ validateNumber }
              />

<span id="number-error" className="formerror"></span>
            </Col>
            </div>

            <Col md="mb-3" style={{ width: "100%", marginTop : "20px" }}>
              <Form.Label>Organization Address <span style={{ color: "red", fontSize: "15px" }}>*</span></Form.Label>
              <Form.Control
                name="orgAddress"
                id="orgAddress"
                type="text"
                onKeyUp={ validateAddress }
              />

<span id="address-error" className="formerror"></span>
            </Col>
            <Button variant="primary" type="submit" onClick={submitFormData} style={ { marginTop : "40px" } }>
              Continue
            </Button>
            <span id="submit-error" className="formerror"></span>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
