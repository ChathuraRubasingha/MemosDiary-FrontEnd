import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";

const HandleDelete = (id) => {
  api.delete(`delete/${id}`)
  .then(res=>{
    window.location.reload(false);

  })
  .catch((error) => console.log(error));
};

function ReminderCol(props) {
  return (
    <Wrapper>
      <HeaderText>
        <h3>{props.EventName}</h3>
        <p>{props.date}</p>
      </HeaderText>
      <Buttons>
        <button
          onClick={() => {
            HandleDelete(props.id);
          }}
        >
          delete
        </button>
      </Buttons>
    </Wrapper>
  );
}

export default ReminderCol;

const Wrapper = styled.div`
  margin: 10px 20px;
  width: 350px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  display: grid;
  grid-template-columns: 200px 50px;


`;

const HeaderText = styled.div`
  h3 {
    padding: 10px 0 0 50px;
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
  }
  p {
    padding: 5px 0 0 50px;
    margin: 0;
    font-weight: 500;
  }
`;
const Buttons = styled.div``;
