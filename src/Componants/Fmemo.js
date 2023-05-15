import React from 'react'
import styled from 'styled-components'

function Fmemo() {
  return (
    <Wrapper>
        this is for favorite memos
    </Wrapper>
  )
}

export default Fmemo

const Wrapper = styled.div`
margin: 2px 0 0 2px;
width: 80%;
height: 800px;
background-color: rgba(0,0,0,.2);
transition: cubic-bezier(0.075, 0.82, 0.165, 1);
`