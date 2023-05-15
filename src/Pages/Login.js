import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import styled from "styled-components";
import api from "../api";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/login',{email, password});
      const token = response.data.token;
      onLogin(token)
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Wrapper>
      <CoverPhoto></CoverPhoto>
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <button type="submit"> Submit</button>
        {error && (
          <p
            style={{
              color: "rgba(255,0,0,0.8)",
              padding: "0px",
              margin: "10px",
            }}
          >
            {error}
          </p>
        )}
        <Link to="/registration">Sign up</Link>
      </form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  text-align: center;
  margin: 100px 400px;
  background-color: black;
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr;
  border-radius: 30px;
  form {
    display: grid;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 50px 50px;
    border-radius: 0 30px 30px 0;
  }
  label {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-weight: bold;
    padding: 10px;
  }
  input {
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 500;
  }
  button {
    margin: 30px 10px;
    border-radius: 10px;
    border: none;
    padding: 5px;
    background-color: #0062ff;
    color: white;
    font-weight: bold;
    :hover {
      background-color: #2e2ef2;
    }
  }
  a {
    margin: 10px;
    color: white;
  }
  h3 {
    color: white;
    font-weight: bolder;
    font-size: 38px;
    padding: 10px;
  }
`;

const CoverPhoto = styled.div`
  width: 400px;
  border-radius: 30px 0 0 30px;
  background-color: blue;
`;
