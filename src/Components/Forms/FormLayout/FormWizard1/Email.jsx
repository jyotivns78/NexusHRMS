import React, { Fragment } from 'react';
import { Row, Col, Form, Label } from 'reactstrap'
import HeaderCard from '../../../Common/Component/HeaderCard';
import "./FormWizard.scss";


const Emails = () => {
    return (
        <Fragment>
             <HeaderCard title="Company Details"/>
            <Row>
                <Col sm="10" style={{ marginLeft: "45px", marginBottom: "20px" }} className="organization-cards">

                    <Form className="needs-validation" noValidate>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                            <Col md="4 mb-3">
                                <Label>PAN Of Organization <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="pan" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>TIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="TINNumber" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>TAN Number</Label>
                                <input className="form-control" name="TANNumber" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                            <Col md="4 mb-3">
                                <Label>GST Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="GSTNumber" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>CIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="CINNumber" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Factory Licence No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="factoryLicenceNo" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                            <Col md="4 mb-3">
                                <Label>MOA/AOA <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="moa" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Pollution Consent <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="pollutionConsent" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Organization Certificate No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="certificateNo" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>

                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                            <Col md="4 mb-3">
                                <Label>PF Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="PFCode" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>ESIC Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="ESICCode" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px", marginBottom: "20px" }}>
                                <Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="professionalTaxCode" type="text" />
                                <div className="valid-feedback">{'Looks good!'}</div>
                            </Col>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Emails;