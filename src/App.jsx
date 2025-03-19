
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux"
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./components/redux/actions"
import RequireAuth from "./components/requireAuth";

const App = (props) => {

  // if user change in Redux store on utlise useEffect
  useEffect(() => {
    props.getUserAuth();
  }, []);


  return (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/home" element={
        <RequireAuth>
        <Header/>
        <Home/>
        </RequireAuth>
        } />

      </Routes>
    </Router>
    </div>
   
    );
    
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);