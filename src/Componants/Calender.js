import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

function CalendeR() {
  const [value, onChange] = useState(new Date());

  return (
    <Cal>
      <Calendar
        className="Calender"
        onChange={onChange}
        value={value}
        style={{ padding: "20px" }}
      />
    </Cal>
  );
}

export default CalendeR;

const Cal = styled.div`
  .Calender {
    padding: 10px;
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
  }
`;
