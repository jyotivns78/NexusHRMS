import React, { Fragment } from 'react';
import { Row, Col, Form, Label } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
import validate from './Validate';
import renderField from './renderField';
import { reduxForm, Field } from 'redux-form';

const FirstPage = props => {
    const { handleSubmit } = props

  return (
    <Fragment>
    <HeaderCard title="Basic Information"/>
        <Row>
            <Col sm="10" className="organization-cards" style={{ marginLeft: "45px" }}>
                <Form className="needs-validation" onSubmit={handleSubmit} >
                    <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        <Col md="4 mb-3">
                            <Label>Organization Name <span style={{ color: "red", fontSize: "20px" }}>*</span> </Label>
                            <Field className="form-control" name="organizationName" type="text" component={renderField} />
                             </Col>

                        <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                            <Label>Organization Email <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                            <Field className="form-control" name="organizationEmail" type="email" component={ renderField } />
                             </Col>
                      

                        <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                            <Label>Organization Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                            <Field className="form-control" name="organizationNumber" type="number" component={ renderField } />
                          
                        </Col>
                    </div>

                    <Col md="10 mb-3" style={{ width: "110%" }}>
                        <Label>Organization Address <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                        <Field className="form-control" name="organizationAddress" type="text" component={ renderField } />
                    </Col>
                    <button>Next</button>
                </Form>
            </Col>
        </Row>
    </Fragment>
  )
}

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
}) (FirstPage)