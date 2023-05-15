import React, { useState } from "react";
import styled from "styled-components";
import api from "../api";
import axios from "axios";

function ReminderForm() {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");

  const PostData = () => {
    axios.post("http://localhost:5000/api/post", {
        eventName: eventName,
        date: date,
      })
      .then(() => {
        console.log("Event add successed");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Wrapper>
      <form>
        <div class="form-group">
          <label for="exampleInputEvent">Event Name:</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Event name"
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <button
          class="btn btn-primary"
          onClick={() => {
            PostData();
          }}
        >
          Save
        </button>
      </form>
    </Wrapper>
  );
}

export default ReminderForm;

const Wrapper = styled.div`
  form {
    padding: 0 10px 10px 60px;
  }
  padding: 20px;
  label {
    margin: 5px;
  }
  input {
    width: 400px;
    margin: 10px;
  }
  button {
    margin: 20px;
  }
`;


