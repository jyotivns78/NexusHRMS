import React from 'react';
import { Container, Row, Col, TabContent, TabPane } from 'reactstrap';
// import NavAuth from './Nav';
import LoginTab from './Tabs/LoginTab';
// import AuthTab from './Tabs/AuthTab';

const Logins = () => {
  // const [selected, setSelected] = useState('firebase');

  // const callbackNav = ((select) => {
  //   setSelected(select);
  // });

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div className="login-main login-tab">
              {/* <NavAuth callbackNav={callbackNav} selected={selected} /> */}
              <TabContent className="content-login">
                <TabPane className="fade show">
                  <LoginTab />
                </TabPane>
                {/* <TabPane className="fade show">
                  <AuthTab />
                </TabPane> */}
              </TabContent >
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Logins;