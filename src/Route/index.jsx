import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { routes } from "./Routes";
// import Default from "../Components/Dashboard/Default";
// import { firebase_app, auth0 } from '../Config/Config';

// import {
// configureFakeBackend,
// authHeader,
// handleResponse,
// } from '../Services/fack.backend';
import Callback from '../Auth/Callback';
import Loader from "../Layout/Loader";
import { authRoutes } from "./AuthRoutes";
import LayoutRoutes from '../Route/LayoutRoutes';
// import Signin from '../Auth/Signin';
import LoginNew from "../Components/Pages/Auth/LoginNew";
// import { Suspense } from "react";
// import PrivateRoute from './PrivateRoute';

// setup fake backend
// configureFakeBackend();
const Routers = () => {
  // const [currentUser, setCurrentUser] = useState(false);
  // const [authenticated, setAuthenticated] = useState(false);
  // const jwt_token = localStorage.getItem('token');

  // useEffect(() => {
  //         let abortController = new AbortController();
  //         const requestOptions = { method: 'GET', headers: authHeader() };
  //         fetch('/users', requestOptions).then(handleResponse);
  //         firebase_app.auth().onAuthStateChanged(setCurrentUser);
  //         setAuthenticated(JSON.parse(localStorage.getItem('authenticated')));
  //         console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  //         console.disableYellowBox = true;
  //         return () => {
  //                 abortController.abort();
  //         };

  // }, []);
  console.log("path", process.env.PUBLIC_URL);

  return (
    // <BrowserRouter basename={"/"}>
    //   <>
    //     <Suspense fallback={<Loader />}>
    //     <Routes>
         
    //       <Route
    //         exact
    //         path={`${process.env.PUBLIC_URL}/login`}
    //         element={<LoginNew />}
    //       />
         
    //       <Route path={`/*`} element={<LayoutRoutes />} />
    //       <Route path={`${process.env.PUBLIC_URL}/dashboard/default`} element= { <Default /> } />
    //       {authRoutes.map(({ path, Component }, i) => (
    //         <Route path={path} element={Component} key={i} />
    //       ))}
    //     </Routes>
    //     </Suspense>
    //   </>
    // </BrowserRouter>

    <BrowserRouter basename={'/'}>
    <>
            <Suspense fallback={<Loader />}>
                    <Routes>
                            {/* <Route path={'/'} element={<PrivateRoute />}> */}
                                    {/* {currentUser !== null || authenticated || jwt_token ? */}
                                             {/* <> */}
                                                    {/* <Route exact */}
                                                             {/* path={`${process.env.PUBLIC_URL}`} */}
                                                             {/* element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />} */}
                                                    {/* /> */}
                                                    <Route exact
                                                            path={`/`}
                                                            element={<Navigate to={`${process.env.PUBLIC_URL}/dashboard/default`} />}
                                                    />
                                            {/* </> : ''} */}
                                    <Route path={`/*`} element={<LayoutRoutes />} />
                            {/* </Route> */}
                            <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
                            <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<LoginNew />} />
                            {authRoutes.map(({ path, Component }, i) => (
                                    <Route path={path} element={Component} key={i} />
                            ))}
                    </Routes>
            </Suspense>
    </>
</BrowserRouter>
   
  );
};

export default Routers;
