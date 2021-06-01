import styled from "styled-components";
import React from "react";

import { auth, provider } from "../Firebase";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <InnerContainer>
        <TrendingUpIcon />
        <h1>Trader Asx</h1>

        <p>Sign in to use the application</p>

        <button onClick={signIn}>Sign in with Google</button>
      </InnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: var(--main-color2);
  height: 100vh;
  display: grid;
  place-items: center;
`;

const InnerContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: var(--main-color1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 4px 2px var(--main-shadow);
  > img {
    height: 100px;
    object-fit: contain;
    margin: 40px;
  }

  > h1 {
    color: white;
  }

  > p {
    margin-top: 40px;
    color: white;
  }
  > button {
    font-size: 14px;
    color: var(--sub-color2);
    background: #b2b2ff;
    padding: 11px;
    border-radius: 8px;
    margin: 16px;
    box-shadow: 0px 0px 1px 1px white;
  }

  > .MuiSvgIcon-root {
    padding: 10px;
    color: var(--sub-color2);
    font-size: 90px;
    transition: 0.5s;
    background-color: #b2b2ff;
    border-radius: 999px;
    padding: 10px;
    margin: 16px;
  }
`;

//#fe90ff
