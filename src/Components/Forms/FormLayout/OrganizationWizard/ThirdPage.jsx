import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from './Validate';
import renderField from './renderField';

import HeaderCard from '../../../Common/Component/HeaderCard';
import { Row, Col, Form, Label, Button } from 'reactstrap';

const ThirdPage = props => {


    const { handleSubmit, pristine, previousPage, submitting } = props

  return (
    <Fragment>
    <HeaderCard title="Company Details"/>
   <Row>
       <Col sm="10"  style={{ marginLeft: "20px" }} className="organization-card">
           <Form className="needs-validation" onSubmit={ handleSubmit }>
               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                   <Col md="4 mb-3">
                       <Label>CLRA Registration <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="CLRARegistration" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>ISMW Registrations <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="ISMWRegistration" type="text" component={ renderField }/>
                  </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Labour Welfare <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="labourWelfare" type="text" component={ renderField }/>
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                   <Col md="4 mb-3">
                       <Label>Business Unit <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="businessUnit" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Grades <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="grades" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Salary Grade <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="salaryGrade" type="text" component={ renderField }/>
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                   <Col md="4 mb-3">
                       <Label>Departments Name <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="departmentName" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="department" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Sub Departments <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="subDepartment" type="text" component={ renderField }/>
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginLeft: "60px" }}>

                   <Col md="4 mb-3">
                       <Label>Employee Category <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="employeeCategory" type="text" component={ renderField }/>
                   </Col>

                   <Col md="4 mb-3" style={{ position: "absolute", right: "24%" }}>
                       <Label>Work Locations <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="workLocation" type="text" component={ renderField }/>
                   </Col>

               </div>
               <button type='button' className='previous' onClick={previousPage}></button>
               <Button color="primary" className="pull-right" type="submit" disabled={ pristine || submitting }  style={{ position: "absolute", right: "-140px" }}>Submit</Button>
           </Form>
       </Col>
   </Row>
</Fragment>
  )
}

export default reduxForm({
    form : 'wizard',
    destroyOnUnmount : false,
    forceUnregisterOnUnmount : true,
    validate
})(ThirdPage)