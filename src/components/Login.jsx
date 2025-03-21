import React, { useEffect } from "react"
import styled from "styled-components"
import { signInAPI } from "./redux/actions"
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom"

const Login = (props) => {
  
    console.log(props.user)
   const navigate = useNavigate()
   useEffect(()=> {
    props.user && navigate("/home");
   },[props.user])



  return <Container>
   <Nav>
    <a href="/index.html">
        <img src="/images/login-logo.svg" alt="img"/>
    </a>
    <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
   </Nav>
   <Section>
    <Hero>
        <h1> Welcome to your professional community </h1>
        <img src="/images/login-hero.svg" alt="hero"/>
    </Hero>
    <Form>
        <Google onClick={() => props.SignIn()}>
            <img src="/images/google.svg" alt=""/>
            Sign in with Google
        </Google>
    </Form>

   </Section>
    </Container>
  
}

const Container = styled.div`
padding: 0px;`;
const Nav = styled.nav`
max-width: 1128px;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
& > a {
  width: 135px;
  height: 34px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
}
`;
const Join = styled.a`
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
border-radius: 4px;
color: rgba(0, 0, 0, 0.6);
margin-right: 12px;
&:hover {
  background-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
}
`;
const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
text-align: center;
background-color: rgba(0, 0, 0, 0);
&:hover {
  background-color: rgba(112, 181, 249, 0.15);
  color: #0a66c2;
  text-decoration: none;
}
`;
const Section = styled.section`
display: flex;
align-content: start;
min-height: 700px;
padding-bottom: 130px;
padding-top: 40px;
padding: 40px 0;
position: relative;
flex-wrap: wrap;
width: 100%;
max-width: 1128px;
margin: auto;
@media (max-width: 768px) {
  margin: auto;
  min-height: 0px;
}
`;
const Hero = styled.div`
width: 100%;
h1 {
  padding-bottom: 0;
  width: 55%;
  font-size: 56px;
  color: #2977c9;
  font-weight: 200;
  line-height: 70px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    width: 100%;
    line-height: 2;
  }
}
img {
  width: 700px;
  height: 670px;
  position: absolute;
  bottom: -2px;
  right: -150px;
  border-radius: 500px;
  @media (max-width: 768px) {
    top: 230px;
    width: initial;
    position: initial;
    height: initial;
  }
}
`;
const Form = styled.div`
margin-top: 100px;
width: 400px;
@media (max-width: 768px) {
  margin-top: 20px;
}
`;
const Google = styled.button`
display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const mapStateToProps = (state)=> {
  return {
    user:state.userState.user,//user 3ibara 3an props
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    SignIn: ()=> dispatch(signInAPI()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);