import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ClassImage from "../ClassImage"
import styled from "styled-components"
import SpecImage from "../SpecImage"

const ListItem = styled.li`
  display: flex;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 20px 25px;
  position: relative;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 12px 8px;
  }
`
const Cell = styled.div`
  h5 {
    margin-bottom: 10px;
  }

  h6 {
    margin-bottom: 10px;
    color: #f8b700;
    min-height: 15px;
  }

  p {
    margin-bottom: 0;
  }
  color: white;
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`
const CellImg = styled(Cell)`
  line-height: 0;
  position: relative;
`
const CellLeft = styled(Cell)`
  display: flex;
  width: calc(80% - 80px);

  > div:nth-child(1) {
    width: 40%;
  }
  > div:nth-child(2) {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 11px;
  }

  @media (max-width: 991px) {
    > div:nth-child(1) {
      width: 100%;
    }
  }
`

const CellRight = styled(Cell)`
  justify-content: center;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: calc(20%);
`

const Gimg = styled(GatsbyImage)`
  max-width: 80px;
  margin-bottom: 0;
  padding-bottom: 0;
  margin-right: 16px;

  img {
    margin-bottom: 0px;
  }
`

const Gbackground = styled(GatsbyImage)`
  position: absolute !important;
  top: 0;
  right: 0;
  left: 0;
  /* bottom: 0; */
  z-index: -1;

  img {
    margin-bottom: 0px;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: rgba(30, 109, 227, 1);
  padding: 5px 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  border: solid 1px transparent;
  transition: all 0.3s;
  display: block;
  min-width: 105px;
  text-align: center;

  &::first-child {
    margin-bottom: 5px;
  }

  &:hover {
    color: black;
    background-color: white;
  }

  @media (max-width: 991px) {
    padding: 3px 10px;
    min-width: unset;
    font-size: 9px;
  }
`

const ButtonWrapper = styled.div`
  box-shadow: -3px 3px 19px rgb(255 255 255 / 20%);

  &:first-child {
    margin-bottom: 5px;
  }
`

const ClassSpec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    margin-right: 5px;
  }
`
const Ilvl = styled.div`
  font-size: 10px;
`

const Level = styled.div`
  font-size: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`

const Rank = styled.div`
  @media (max-width: 991px) {
    display: none !important;
  }
`

const ranks = [
  "",
  "Scourgelord",
  "Quartermaster",
  "Paragon",
  "Exalted",
  "Revered",
  "Honored",
  "Friendly",
  "Neutral",
  "Unfriendly",
]
const classColors = [
  "", //0
  "#c69b6d", //1
  "#f48cba", //2
  "#aad372", //3
  "#fff468", //4
  "#f0ebe0", //5
  "#c41e3b", //6
  "#201e21", //7
  "#68ccef", //8
  "#9382c9", //9
  "#00ffba", //10
  "#ff7c0a", //11
  "#a330c9", //12
]

const LItem = ({ imageBg, image, v }) => {
  return (
    <ListItem>
      <Gbackground image={imageBg} alt="bg" />

      <CellImg>
        <Gimg image={image} alt={v.name} />
      </CellImg>
      <CellLeft>
        <div>
          <h5 style={{ color: classColors[v.classId] }}>{v.name}</h5>
          <h6>{v.note ? `${v.note}` : " "}</h6>
          <ClassSpec>
            <ClassImage
              style={{ marginRight: 5 }}
              src={`class/${v.classId}_class.png`}
            />
            <SpecImage src={`spec/${v.specId}.jpg`} />
            <Level>{v.level}</Level>
            <Ilvl>Item level: {v.ilvl}</Ilvl>
          </ClassSpec>
        </div>
        <Rank>{ranks[v.rank]}</Rank>
      </CellLeft>

      <CellRight>
        <ButtonWrapper>
          <Link
            target="_blank"
            href={`https://check-pvp.fr/eu/Ravencrest/${v.name}?add=true`}
          >
            Check PvP
          </Link>
        </ButtonWrapper>
        <ButtonWrapper>
          <Link
            target="_blank"
            href={`https://worldofwarcraft.com/en-gb/character/eu/ravencrest/${v.name}`}
          >
            WoW Profile
          </Link>
        </ButtonWrapper>
      </CellRight>
    </ListItem>
  )
}

export default LItem
