import React from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
import HeaderCard from '../../../../../Common/Component/HeaderCard';


// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  // const [error, setError] = useState(false);

  //   // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    //   setError(true);
    // } else {
      nextStep();
    // }
  };
  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <Card.Body>
        <Form style={{ marginLeft : "20px", marginRight : "20px" }}>
          <HeaderCard title="Company Details"/>
          <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>CLRA Registration <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
              />
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>ISMW Registrations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Labour Welfare <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Business Unit <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
              />
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Grades <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Salary Grade <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Departments Name <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
              />
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Sub Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            </div>

            <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>

            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Employee Category <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="number"
              />
              </Col>
           
            <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Work Locations <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
              />
             </Col>
           
            {/* <Col md="mb-3" style={{ width: "32%" }}>
              <Form.Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
              />
             </Col> */}
           
            </div>

            <div style={{ display: "flex", justifyContent: "space-around", marginTop : "40px" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit" onClick={submitFormData}>
                Submit
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
