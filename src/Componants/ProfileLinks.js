import React from "react";
import styled from "styled-components";

function ProfileLinks(props) {
  return (
    <Wrapper>
      <img src={require("../Images/Avatar/Myself.png")} alt={props.Alt}/>
      <HeaddingText>{props.ProfileName}</HeaddingText>
    </Wrapper>
  );
}

export default ProfileLinks;

const Wrapper = styled.div`
  width: 250px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 60px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-align: center;
  align-items: center;
  margin-bottom: 60px;
  img {
    height: 150px;
    width: 150px;
    border-radius: 90px;
    margin-top: 30px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  :hover {
    transform: scale(1.05);
    img{
      transform: scale(1.07);
    }
  }
`;
const HeaddingText = styled.h1`
  color: white;
  font-size: 24px;
  padding-top: 30px;
`;
