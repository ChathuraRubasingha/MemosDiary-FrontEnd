import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavBar>
        <a href='/'>HOME</a>
        <a href='/'>MEMORIES</a>
        <a href='/'>PHOTOS</a>
        <a href='/'>VIDEOS</a>
        <a href='/'>SETTING</a>
        <a href='/'>MENU</a>
    </NavBar>
  )
}

export default Navbar

const NavBar = styled.div`
display: grid;
grid-template-columns: repeat(6, 150px);
padding-left: 50px;
padding-top: 10px;
text-align: center;
justify-items: center;
a{
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255,255,255,0.8);
    :hover{
        color: rgba(255,255,255,1);;
    }
}
`