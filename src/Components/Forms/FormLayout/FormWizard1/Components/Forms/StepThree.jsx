import React from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import HeaderCard from '../../../../../Common/Component/HeaderCard';



var clraError = document.getElementById("clra-error");
var ismwError = document.getElementById("ismw-error");
var labourWelfareError = document.getElementById("labourWelfare-error");
var businessUnitError = document.getElementById("businessUnit-error");
var gradesError = document.getElementById("grades-error");
var salaryGradeError = document.getElementById("salaryGrade-error");
var departementNameError = document.getElementById("departmentName-error");
var departmentError = document.getElementById("department-error");
var subDepartmentError = document.getElementById("subDepartment-error");
var employeeCategoryError = document.getElementById("employeeCategorry-error");
var workLocationError = document.getElementById("workLocation-error");




  
// Function For Validate CLRA Number

function validateClraNumber() {
  var clraNumber = document.getElementById("clraNumber").value;
  if (clraNumber.length === 0) {
    clraError.innerHTML = "CLRA Number is Required";
    return false;
  }

  clraError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate ISMW Number

function validateIsmwNumber() {
  var ismwNumber = document.getElementById("ismwNumber").value;
  if (ismwNumber.length === 0) {
    ismwError.innerHTML = "ISMW Number is Required";
    return false;
  }

  ismwError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate ISMW Number

function validateLabourWelfare() {
  var labourWelfare = document.getElementById("labourWelfare").value;
  if (labourWelfare.length === 0) {
    labourWelfareError.innerHTML = "Labour Welfare is Required";
    return false;
  }

  labourWelfareError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Business Unit

function validateBusinessUnit() {
  var businessUnit = document.getElementById("businessUnit").value;
  if (businessUnit.length === 0) {
    businessUnitError.innerHTML = "Business Unit is Required";
    return false;
  }

  businessUnitError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Business Unit

function validateGrades() {
  var grades = document.getElementById("grades").value;
  if (grades.length === 0) {
    gradesError.innerHTML = "Grades is Required";
    return false;
  }

  gradesError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Salary Grades

function validateSalaryGrades() {
  var salaryGrade = document.getElementById("salaryGrade").value;
  if (salaryGrade.length === 0) {
    salaryGradeError.innerHTML = "Salary Grades is Required";
    return false;
  }

  salaryGradeError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Department Name

function validatedepartmentName() {
  var departmentName = document.getElementById("departmentName").value;
  if (departmentName.length === 0) {
    departementNameError.innerHTML = "Department Name is Required";
    return false;
  }

  departementNameError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Department

function validateDepartment() {
  var department = document.getElementById("department").value;
  if (department.length === 0) {
    departmentError.innerHTML = "Department is Required";
    return false;
  }

  departmentError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Sub Department

function validateSubDepartment() {
  var subDepartment = document.getElementById("subDepartment").value;
  if (subDepartment.length === 0) {
    subDepartmentError.innerHTML = "Sub Department is Required";
    return false;
  }

  subDepartmentError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// Function For Validate Employee Category

function validateEmployeeCategory() {
  var employeeCategorry = document.getElementById("employeeCategorry").value;
  if (employeeCategorry.length === 0) {
    employeeCategoryError.innerHTML = "Employee Category is Required";
    return false;
  }

  employeeCategoryError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}

// Function For Validate Work Location

function validateWorkLocation() {
  var workLocation = document.getElementById("workLocation").value;
  if (workLocation.length === 0) {
    workLocationError.innerHTML = "Work Location is Required";
    return false;
  }

  workLocationError.innerHTML = '<i class="fa fa-check-circle"></i>';
  return true;
}


// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, prevStep, values, handleFormData }) => {
  //creating error state for validation
  //   // after form submit validating the form data using validator
  var submitErrors = document.getElementById("submit-error");




  //   // after form submit validating the form data using validator
  function submitFormData(e) {
    e.preventDefault();
    if (!validateClraNumber() || !validateIsmwNumber() || !validateLabourWelfare() || !validateBusinessUnit() || !validateGrades() || !validateSalaryGrades() || !validatedepartmentName() || !validateDepartment() || !validateSubDepartment() || !validateWorkLocation() || !validateEmployeeCategory()) {
      submitErrors.innerHTML = "Please Fix Error To Continue";
      return false;
    }
    else {
      nextStep();
    }

  }








  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
          <Form style={{ marginLeft: "20px", marginRight: "20px" }}>
            <HeaderCard title="Company Details" />
            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>CLRA Registration <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="clraNumber"
                  id="clraNumber"
                  defaultValue={values.clraNumber}
                  onChange={handleFormData("clraNumber")}
                  onKeyUp={validateClraNumber}
                />
                <span id="clra-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>ISMW Registrations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="ismwNumber"
                  id="ismwNumber"
                  defaultValue={values.ismwNumber}
                  onChange={handleFormData("ismwNumber")}
                  onKeyUp={validateIsmwNumber}
                />
                <span id="ismw-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Labour Welfare <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="labourWelfare"
                  id="labourWelfare"
                  defaultValue={values.labourWelfare}
                  onChange={handleFormData("labourWelfare")}
                  onKeyUp={validateLabourWelfare}
                />
                <span id="labourWelfare-error" className="formerror"></span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Business Unit <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="number"
                  name="businessUnit"
                  id="businessUnit"
                  defaultValue={values.businessUnit}
                  onChange={handleFormData("businessUnit")}
                  onKeyUp={validateBusinessUnit}
                />
                <span id="businessUnit-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Grades <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="grades"
                  id="grades"
                  defaultValue={values.grades}
                  onChange={handleFormData("grades")}
                  onKeyUp={validateGrades}
                />
                <span id="grades-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Salary Grade <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="salaryGrade"
                  id="salaryGrade"
                  defaultValue={values.salaryGrade}
                  onChange={handleFormData("salaryGrade")}
                  onKeyUp={validateSalaryGrades}
                />
                <span id="salaryGrade-error" className="formerror"></span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Departments Name <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  defaultValue={values.departmentName}
                  onChange={handleFormData("departmentName")}
                  onKeyUp={validatedepartmentName}
                />
                <span id="departmentName-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="department"
                  id="department"
                  defaultValue={values.department}
                  onChange={handleFormData("department")}
                  onKeyUp={validateDepartment}
                />
                <span id="department-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Sub Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="subDepartment"
                  id="subDepartment"
                  defaultValue={values.subDepartment}
                  onChange={handleFormData("subDepartment")}
                  onKeyUp={validateSubDepartment}
                />
                <span id="subDepartment-error" className="formerror"></span>
              </Col>

            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Employee Category <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="employeeCategorry"
                  id="employeeCategorry"
                  defaultValue={values.employeeCategorry}
                  onChange={handleFormData("employeeCategorry")}
                  onKeyUp={validateEmployeeCategory}
                />
                <span id="employeeCategorry-error" className="formerror"></span>
              </Col>

              <Col md="mb-3" style={{ width: "32%" }}>
                <Form.Label>Work Locations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="workLocation"
                  id="workLocation"
                  defaultValue={values.workLocation}
                  onChange={handleFormData("workLocation")}
                  onKeyUp={validateWorkLocation}
                />
                <span id="workLocation-error" className="formerror"></span>
              </Col>

              {/* <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
              />
             </Col> */}

            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="button" onClick={submitFormData}>
                Submit
              </Button>
              <span id="submit-error" className="formerror"></span>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
