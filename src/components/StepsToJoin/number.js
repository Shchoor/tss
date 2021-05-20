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
  top: calc(45%);
  left: calc(50% - 682px);
  right: 0;
  bottom: 0;
  width: 139px;
`

const Index = ({ n, color }) => {
  return <Number>{n}</Number>
}

export default Index
