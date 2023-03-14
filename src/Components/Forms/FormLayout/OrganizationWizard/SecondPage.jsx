import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from './Validate';
import renderField from './renderField';

import HeaderCard from '../../../Common/Component/HeaderCard';
import { Row, Col, Form, Label } from 'reactstrap';

const SecondPage = props => {
 
    const { handleSubmit, previousPage } = props

  return (
    <Fragment>
    <HeaderCard title="Company Details"/>
   <Row>
       <Col sm="10" style={{ marginLeft: "45px", marginBottom: "20px" }} className="organization-cards">

           <Form className="needs-validation" onSubmit={ handleSubmit }>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                   <Col md="4 mb-3">
                       <Label>PAN Of Organization <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="pan" type="text" component={ renderField } />
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>TIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="TINNumber" type="text" component={ renderField }/>
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>TAN Number</Label>
                       <Field className="form-control" name="TANNumber" type="text" component={ renderField }/>
                      
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                   <Col md="4 mb-3">
                       <Label>GST Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="GSTNumber" type="text" component={ renderField } />
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>CIN Number <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="CINNumber" type="text" component={ renderField }/>
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Factory Licence No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="factoryLicenceNo" type="text" component={ renderField }/>
                     
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                   <Col md="4 mb-3">
                       <Label>MOA/AOA <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="moa" type="text" component={ renderField }/>
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Pollution Consent <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="pollutionConsent" type="text" component={ renderField }/>
                     
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>Organization Certificate No. <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="certificateNo" type="text" component={ renderField }/>
                      
                   </Col>
               </div>

               <div className="form-row" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                   <Col md="4 mb-3">
                       <Label>PF Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="PFCode" type="text" component={ renderField } />
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px" }}>
                       <Label>ESIC Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="ESICCode" type="text" component={ renderField }/>
                      
                   </Col>

                   <Col md="4 mb-3" style={{ marginLeft: "50px", marginBottom: "20px" }}>
                       <Label>Professional Tax Code <span style={{ color: "red", fontSize: "20px" }}>*</span></Label>
                       <Field className="form-control" name="professionalTaxCode" type="text" component={ renderField }/>
                      
                   </Col>
               </div>

               <button type='button' className='previous' onClick={previousPage}>Previous</button>
               <button type='submit' className='next'>Next</button>
          
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
})(SecondPage)