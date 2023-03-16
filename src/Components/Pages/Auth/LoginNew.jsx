import React, { Fragment, useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Btn, H4 } from "../../../AbstractElements";
import { ForgotPassword } from "../../../Constant";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Images

import one from "../../../assets/images/dashboard/one.png";
import two from "../../../assets/images/dashboard/two.png";
import three from "../../../assets/images/dashboard/three.png";
import four from "../../../assets/images/dashboard/four.png";
import Nexus from "../../../assets/images/dashboard/round.png";

const LoginNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const loginAuth = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "https://api.nexushrms.com/login",
        data: {
          email: email,
          password: password,
        },
      });

      if (response.data.status === "success") {
        setLoginStatus(response.data.message);
        navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
      }
    } catch (err) {
      setLoginStatus("The Given Credential is Wrong !");
      console.log(err);
    }

   
  };

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div className="login-main login-tab">
              <TabContent className="content-login">
                <TabPane className="fade show">
                  <div className="login-wrapper">
                    <Fragment>
                      <Form className="theme-form">
                        <div className="contain">
                          <img src={Nexus} alt="" className="Logo" />
                          <H4>Welcome Back!</H4>

                          <FormGroup>
                            <Input
                              className="form-control"
                              type="email"
                              required=""
                              onChange={(e) => setEmail(e.target.value)}
                              defaultValue={email}
                              placeholder= "Email"
                            />
                          </FormGroup>
                          <FormGroup className="position-relative">
                            <Input
                              className="form-control"
                              type={togglePassword ? "text" : "password"}
                              onChange={(e) => setPassword(e.target.value)}
                              defaultValue={password}
                              required=""
                              placeholder="Password"
                            />
                            <div
                              className="show-hide"
                              onClick={() => setTogglePassword(!togglePassword)}
                            >
                              <span
                                className={togglePassword ? "" : "show"}
                              ></span>
                            </div>
                          </FormGroup>
                          <div className="form-group mb-0">
                            <div className="checkbox ms-3">
                              <Input id="checkbox1" type="checkbox" />
                            </div>
                            <a className="link" href="#javascript">
                              {ForgotPassword}
                            </a>
                          

                            <Btn
                              attrBtn={{
                                color: "primary",
                                className: "btn-block",
                              }}
                              onClick={loginAuth}
                            >
                              Login
                            </Btn>
                            {loginStatus && (
                              <h1
                                style={{
                                  color: "red",
                                  fontSize: "13px",
                                  marginTop: "210px",
                                  marginLeft: "85px",
                                }}
                              >
                                {loginStatus}
                              </h1>
                            )}
                          </div>
                        </div>
                      </Form>
                    </Fragment>

                    <div className="right-side">
                      <div className="carousel-contain">
                        <Carousel
                          interval={2500}
                          prevIcon={false}
                          nextIcon={false}
                          className="car"
                        >
                          <Carousel.Item
                            style={{ width: "300px", height: "300px" }}
                          >
                            <img className="d-block w-100" src={one} alt="" />
                          </Carousel.Item>
                          <Carousel.Item
                            style={{ width: "300px", height: "300px" }}
                          >
                            <img className="d-block w-100" src={two} alt="" />
                          </Carousel.Item>
                          <Carousel.Item
                            style={{ width: "300px", height: "300px" }}
                          >
                            <img className="d-block w-100" src={three} alt="" />
                          </Carousel.Item>

                          <Carousel.Item
                            style={{ width: "300px", height: "300px" }}
                          >
                            <img className="d-block w-100" src={four} alt="" />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginNew;
