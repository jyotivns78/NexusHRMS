import React, { Fragment } from 'react';
import { Row, Col, Form, Label, Button } from 'reactstrap'
import { Submit } from "../../../../Constant";
import HeaderCard from '../../../Common/Component/HeaderCard';
import "./FormWizard.scss";

const Birthdate = (props) => {
    const submitFun = (e) => {
        e.preventDefault();
        alert("successfully updated");
        window.location.reload();
    }
    return (
        <Fragment>
             <HeaderCard title="Company Details"/>
            <Row>
                <Col sm="10"  style={{ marginLeft: "20px" }} className="organization-card">
                    <Form className="needs-validation" noValidate>
                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                            <Col md="4 mb-3">
                                <Label>CLRA Registration <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="CLRARegistration" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>ISMW Registrations <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="ISMWRegistration" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Labour Welfare <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="labourWelfare" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                            <Col md="4 mb-3">
                                <Label>Business Unit <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="businessUnit" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Grades <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="grades" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Salary Grade <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="salaryGrade" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                            <Col md="4 mb-3">
                                <Label>Departments Name <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="departmentName" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="department" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Sub Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="subDepartment" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                            <Col md="4 mb-3">
                                <Label>Employee Category <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="employeeCategory" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ position: "absolute", right: "24%" }}>
                                <Label>Work Locations <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="workLocation" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                        </div>
                        <Button color="primary" className="pull-right" onClick={submitFun} style={{ position: "absolute", right: "-140px" }}>{Submit}</Button>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Birthdate;