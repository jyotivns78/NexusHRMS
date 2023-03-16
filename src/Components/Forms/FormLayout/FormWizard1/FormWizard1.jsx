import React, { Fragment } from 'react';
import StepZilla from 'react-stepzilla';
import Registration from './Registration';
import Email from './Email';
import Birthdate from './Birthdate';
// import FirstPage from "../OrganizationWizard/FirstPage";
// import SecondPage from "../OrganizationWizard/SecondPage";
// import ThirdPage from "../OrganizationWizard/ThirdPage";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
// import HeaderCard from '../../../Common/Component/HeaderCard';

const FormWizard = () => {
    const steps =
        [
            { name: 'Step 1', component: <Registration /> },
            { name: 'Step 2', component: <Email /> },
            { name: 'Step 3', component: <Birthdate /> },

            // { name: 'Step 1', component: <FirstPage /> },
            // { name: 'Step 2', component: <SecondPage /> },
            // { name: 'Step 3', component: <ThirdPage /> }



        ];
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Organization Master Create-Lead" title="Organization Master Create-Lead" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card style={{ justifyContent: "center" }}>
                            {/* <HeaderCard title="Basic Information" /> */}
                            <CardBody style={{ justifyContent: "center" }}>
                                <StepZilla
                                    steps={steps}
                                    showSteps={true}
                                    showNavigation={true}
                                    stepsNavigation={true}
                                    prevBtnOnLastStep={true}
                                    dontValidate={false} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default FormWizard;