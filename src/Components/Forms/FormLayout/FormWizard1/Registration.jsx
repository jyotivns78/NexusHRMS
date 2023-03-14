import React, { Fragment } from 'react';
// import { useForm } from 'react-hook-form';
import { Row, Col, Form, Label } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
import "./FormWizard.scss";
import { useFormik } from 'formik';


const validateOrganization = orgData => {
    const errors = {};

    if (!orgData.organizationName) {
        errors.organizationName = "Please Enter Organization Name.";
    }
    
    if (!orgData.organizationEmail) {
        errors.organizationEmail = "Please Enter Organization Email";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(orgData.organizationEmail)) {
        errors.organizationEmail = "Invalid Email Address";
    }

    if (!orgData.organizationNumber) {
        errors.organizationNumber = "Please Enter Organization Number";
    }
    else if (!/^\+?[1-9][0-9]{7,14}$/i.test(orgData.organizationNumber)) {
        errors.organizationNumber = "Invalid Number";
    }

    if (!orgData.organizationAddress ) {
        errors.organizationAddress = "Please Enter Organization Address";
    }
}

const Registration = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = data => {
    // console.log(data);
    //     // if (data !== '') {
    //     //     alert('You submitted the form and stuff!');
    //     // } else {
    //     //     errors.showMessages();
    //     // }
    // };

    const formik = useFormik({
        initialValues : {
            organizationName : '',
            organizationEmail : '',
            organizationNumber : '',
            organizationAddress : ''
        },
        validate:validateOrganization,
        onSubmit:values => {
            alert(JSON.stringify(values));
        }
    });






    return (
        <Fragment>
        <HeaderCard title="Basic Information"/>
            <Row>
                <Col sm="10" className="organization-cards" style={{ marginLeft: "45px" }}>
                    <Form className="needs-validation" noValidate="" onSubmit={formik.handleSubmit} >
                        <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                            <Col md="4 mb-3">
                                <Label>Organization Name <span style={{ color: "red", fontSize: "20px" }}>*</span> </Label>
                                <input className="form-control" name="organizationName" type="text" value={formik.values.organizationName}
                                onChange={formik.handleChange}
                                required
                                />
                                {formik.touched.organizationName && formik.errors.organizationName ? <span style={{ color: "red" }}>{formik.errors.organizationName}</span> : null}
                                {/* {errors.organizationName && 'First name is required'} */}
                                {/* <div className="valid-feedback">{'Looks good!'}</div> */}
                            </Col>

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Organization Email <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="organizationEmail" type="email" value={formik.values.organizationEmail}
                                onChange={formik.handleChange} required />
                                {formik.touched.organizationEmail && formik.errors.organizationEmail ? <span style={{ color: "red" }}>{formik.errors.organizationEmail}</span> : null}
                               

                                {/* {errors.organizationEmail && 'First name is required'} */}
                                {/* <div className="valid-feedback">{'Looks good!'}</div> */}
                            </Col>
                          

                            <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                                <Label>Organization Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                                <input className="form-control" name="organizationNumber" type="number" value={formik.values.organizationNumber}
                                onChange={formik.handleChange} required/>
                                {formik.touched.organizationNumber && formik.errors.organizationNumber ? <span style={{ color: "red" }}>{formik.errors.organizationNumber}</span> : null}
                               
                                {/* {errors.organizationNumber && 'First name is required'} */}
                                {/* <div className="valid-feedback">{'Looks good!'}</div> */}
                            </Col>
                        </div>

                        <Col md="10 mb-3" style={{ width: "110%" }}>
                            <Label>Organization Address <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                            <input className="form-control" name="organizationAddress" type="text" value={formik.values.organizationAddress}
                                onChange={formik.handleChange} required />
                            {formik.touched.organizationAddress && formik.errors.organizationAddress ? <span style={{ color: "red" }}>{formik.errors.organizationAddress}</span> : null}
                               
                            {/* {errors.organizationAddress && 'First name is required'} */}
                            {/* <div className="valid-feedback">{'Looks good!'}</div> */}
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Registration;