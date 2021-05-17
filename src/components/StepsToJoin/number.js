import React from "react"
import styled from "styled-components"

const Number = styled.div`
  font-family: Eczar;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 42px;
  text-align: center;
  position: absolute;
  color: ${props => props.color};
  top: calc(45%);
  left: -600px;
  right: 0;
  bottom: 0;

`

const Index = ({ n, color }) => {
  return <Number>{n}</Number>
}

export default Index
