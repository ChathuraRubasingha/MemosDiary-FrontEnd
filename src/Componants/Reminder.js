import styled from "styled-components";
import CalendeR from "./Calender";
import ReminderCol from "./ReminderCol";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ReminderForm from "./ReminderForm";
import React, { useEffect, useState } from "react";
import api from "../api";

function Reminder() {
  const [item, setItems] = useState([]);

  console.log('')

  useEffect(() => {
    api
      .get('/get')
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  }, []);
 
  return (
    <Wrapper>
      <CalendeR />
      <hr />
      <Rheader>
        <h1>Reminder</h1>
        <Popup trigger={<button className="btn btn-primary">Add</button>} modal>
          <div className="pop-up">
            <ReminderForm />
          </div>
        </Popup>
      </Rheader>
      <ReminderCols key={item.id}>
        {item.map((items) => {
          return <ReminderCol EventName={items.eventName} date={items.date} id={items._id} />;
        })}
      </ReminderCols>
    </Wrapper>
  );
}

function Check(){
  console.log('button working')
}

export default Reminder;

const Wrapper = styled.div`
  width: 25%;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  margin: 2px 0 0 0;
  h1 {
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 28px;
    button {
      margin-left: 0px;
    }
  }
  .popup-content {
    border-radius: 30px !important;
  }
`;
const ReminderCols = styled.div`
  align-items: center;
  justify-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;
`;
const Rheader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  .pop-up {
    padding: 20px;
  }
`;
