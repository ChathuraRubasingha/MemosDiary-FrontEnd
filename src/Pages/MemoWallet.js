import React from "react";
import styled from "styled-components";
import Fmemo from "../Componants/Fmemo";
import Navbar from "../Componants/Navbar";
import Reminder from "../Componants/Reminder";

function MemoWallet() {
  return (
    <Wrapper>
      <img
        alt="banner"
        className="banner"
        src={require("../Images/BannerImg/BannerImg.jpg")}
      />
      <img
        alt="avatar"
        className="avatar"
        src={require("../Images/Avatar/Myself.png")}
      ></img>
      <HeaderText>
        <Profname>Chathura Rubasingha</Profname>
        <ProfInfo>
          <p>25 memos</p>
          <p>50 Photos</p>
          <p>25 Videos</p>
        </ProfInfo>
        <hr />
        <Navbar />
      </HeaderText>
      <Content>
        <Reminder />
        <Fmemo />
      </Content>
    </Wrapper>
  );
}

export default MemoWallet;

const Wrapper = styled.div`
  margin: 0;
  .banner {
    width: 100%;
    height: 400px;
  }
  .avatar {
    position: absolute;
    top: 300px;
    left: 30px;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    border: 5px solid white;
  }
`;
const HeaderText = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.8);
`;
const Profname = styled.h1`
  margin: 0;
  color: white;
  margin-left: 250px;
  padding-top: 25px;
  font-size: 42px;
  font-weight: 700;
`;
const ProfInfo = styled.p`
  display: grid;
  padding: ;
  grid-template-columns: repeat(3, 150px);
  margin: 0px 0px 0px 250px;
  color: white;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

const Content = styled.div`
display: flex;
`
