import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../api";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmit = () => {
    try {
      api
        .post("/registration", {
          userName: userName,
          email: email,
          password: password,
        })
        .then((token) => {
          setToken(token.data.token);
          console.log("success");
          setError(token.data.message);
        })
        .catch((err) => {
          console.log("faild");
          setError(err.message);
        });
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(token);
  return (
    <Wrapper>
      <form>
        <h3>Sign Up</h3>
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          onChange={(event) => setemail(event.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          {" "}
          Sign Up
        </button>
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
        <Link to="/">Sign In</Link>
      </form>
    </Wrapper>
  );
}

export default Registration;

const Wrapper = styled.div`
  text-align: center;
  margin: 100px 0px;
  padding: 0px 550px;
  display: grid;
  form {
    display: grid;
    background-color: gray;
    padding: 50px 50px;
    border-radius: 30px;
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
