import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileLinks from "../Componants/ProfileLinks";
import pic1 from "../Images/Avatar/Myself.png";

const Data = [
  { id: 1, Profilepic: pic1, alt: "profilepic", ProfileName: "Me" },
  { id: 2, Profilepic: pic1, alt: "profilepic", ProfileName: "MyFamilly" },
  { id: 3, Profilepic: pic1, alt: "profilepic", ProfileName: "MyLove" },
];

function LandingPage() {
  return (
    <Wrapper>
      <HeaderText>Welcome to the MemosDiary</HeaderText>
      <SubText>Choose a profile...</SubText>
      <Profiles>
        {Data.map((item) => {
          return (
            <Link to="/wallet">
              <ProfileLinks
                key={item.id}
                ProfileImg="../Images/Avatar/Myself.png"
                Alt={item.alt}
                ProfileName={item.ProfileName}
              />
            </Link>
          );
        })}
      </Profiles>
    </Wrapper>
  );
}

export default LandingPage;

const Wrapper = styled.div`
  background: #02073a;
  padding: 10px 60px;
`;

const HeaderText = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  padding-top: 50px;
`;
const SubText = styled.h3`
  color: white;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 20px;
`;

const Profiles = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 80px 0px;
  a {
    margin: 0;
    text-decoration: none;
  }
`;
