import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const ContainerWrapper = styled(Container)``
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.25) 100%);
  z-index: 30;
`

const Gimg = styled(GatsbyImage)`
  max-width: 110px;
  margin: 5px;
  display: flex;
`
const Linkn = styled(Link)`
  text-decoration: none;
  color: white;
  transition: all 0.2s;
  display: block;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  padding-left: 30px;
  padding-right: 30px;
  /* or 185% */

  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  justify-content:center;
  align-items:center;

  svg {
    margin-right: 6px;
  }

  &:hover {
    color: #823b3b;

    svg {
      path {
        transition: all 0.2s;

        fill: #823b3b;
      }
    }
  }
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ColInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Coll = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Colr = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "tss_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200, placeholder: BLURRED)
        }
      }
    }
  `)

  const image = getImage(data.logo)

  return (
    <Wrapper>
      <ContainerWrapper>
        <Row>
          <Coll lg={5}>
            <ColInner>
              <LinkWrapper>
                <Linkn to="/about">ABOUT</Linkn>
                <Linkn to="/roster">ABOMINATIONS</Linkn>
                <Linkn to="/official-tmog">OFFICIAL TMOG</Linkn>
              </LinkWrapper>
            </ColInner>
          </Coll>
          <Col lg={2}>
            <ColInner>
              <Linkn to="/">
                <Gimg image={image} alt="Logo" />
              </Linkn>
            </ColInner>
          </Col>
          <Colr lg={5}>
            <ColInner>
              <LinkWrapper>
                <Linkn to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.0843 1.33577C14.8733 0.769483 13.5747 0.352265 12.2169 0.113307C12.1922 0.108695 12.1675 0.12022 12.1548 0.143271C11.9877 0.446002 11.8027 0.840938 11.6732 1.15136C10.2128 0.928538 8.75994 0.928538 7.3295 1.15136C7.19993 0.834038 7.00822 0.446002 6.84046 0.143271C6.82772 0.12099 6.80302 0.109464 6.77829 0.113307C5.42126 0.351502 4.12265 0.76872 2.91091 1.33577C2.90042 1.34038 2.89143 1.34807 2.88546 1.35806C0.422268 5.10844 -0.252502 8.76664 0.0785176 12.3795C0.0800154 12.3972 0.0897511 12.4141 0.103232 12.4248C1.72837 13.6411 3.3026 14.3795 4.8476 14.869C4.87232 14.8767 4.89852 14.8674 4.91426 14.8467C5.27973 14.338 5.60551 13.8017 5.88484 13.2377C5.90132 13.2047 5.88558 13.1655 5.85189 13.1524C5.33515 12.9527 4.8431 12.7091 4.36979 12.4325C4.33235 12.4102 4.32935 12.3556 4.36379 12.3295C4.46339 12.2535 4.56302 12.1743 4.65813 12.0944C4.67534 12.0798 4.69932 12.0767 4.71955 12.0859C7.82902 13.5328 11.1954 13.5328 14.2682 12.0859C14.2884 12.076 14.3124 12.079 14.3303 12.0936C14.4255 12.1735 14.5251 12.2535 14.6254 12.3295C14.6599 12.3556 14.6576 12.4102 14.6202 12.4325C14.1469 12.7145 13.6548 12.9527 13.1373 13.1517C13.1036 13.1647 13.0886 13.2047 13.1051 13.2377C13.3905 13.8009 13.7162 14.3373 14.075 14.8459C14.0899 14.8674 14.1169 14.8767 14.1416 14.869C15.6941 14.3795 17.2683 13.6411 18.8935 12.4248C18.9077 12.4141 18.9167 12.3979 18.9182 12.3802C19.3144 8.2034 18.2546 4.5752 16.109 1.35882C16.1038 1.34807 16.0948 1.34038 16.0843 1.33577ZM6.34918 10.1796C5.41302 10.1796 4.64165 9.30372 4.64165 8.228C4.64165 7.15228 5.39806 6.27636 6.34918 6.27636C7.30777 6.27636 8.07168 7.15997 8.0567 8.228C8.0567 9.30372 7.30028 10.1796 6.34918 10.1796ZM12.6625 10.1796C11.7264 10.1796 10.955 9.30372 10.955 8.228C10.955 7.15228 11.7114 6.27636 12.6625 6.27636C13.6211 6.27636 14.385 7.15997 14.37 8.228C14.37 9.30372 13.6211 10.1796 12.6625 10.1796Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="19" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  DISCORD
                </Linkn>
              </LinkWrapper>
              <LinkWrapper>
                <Linkn to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                  >
                    <path
                      d="M18.5716 2.08091C18.3343 1.308 17.7409 0.654001 16.9102 0.416183C15.4269 -1.06313e-07 9.49347 0 9.49347 0C9.49347 0 3.56005 -1.06313e-07 2.0767 0.416183C1.24602 0.654001 0.652676 1.24855 0.415339 2.08091C0.118668 3.56728 0 5.1131 0 6.65892C0 8.20474 0.118668 9.75057 0.415339 11.2369C0.652676 12.0098 1.24602 12.6638 2.0767 12.9017C3.56005 13.3178 9.49347 13.3178 9.49347 13.3178C9.49347 13.3178 15.4269 13.3178 16.9102 12.9017C17.7409 12.6638 18.3343 12.0693 18.5716 11.2369C18.8683 9.75057 18.9869 8.20474 18.9869 6.65892C18.9869 5.1131 18.8683 3.56728 18.5716 2.08091ZM7.59478 9.51275V3.8051L12.5195 6.65892L7.59478 9.51275Z"
                      fill="white"
                    />
                  </svg>
                  YOUTUBE
                </Linkn>
              </LinkWrapper>
              <LinkWrapper>
                <Linkn to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                  >
                    <path
                      d="M5.8714 16.1191C13.0434 16.1191 16.9662 10.177 16.9662 5.02427C16.9662 4.85554 16.9662 4.68744 16.9548 4.52019C17.718 3.96817 18.3767 3.2848 18.9002 2.50175C18.1885 2.81704 17.4336 3.024 16.6605 3.11523C17.4745 2.62783 18.0838 1.86146 18.3748 0.95847C17.6093 1.41271 16.772 1.73286 15.8987 1.90497C14.422 0.334652 11.9518 0.258839 10.3815 1.7356C9.36871 2.68801 8.93917 4.10713 9.25341 5.46141C6.11848 5.30408 3.19726 3.8233 1.21726 1.38716C0.182275 3.16886 0.710852 5.44831 2.42456 6.59247C1.80391 6.5741 1.19698 6.40664 0.654679 6.10444C0.654679 6.12049 0.654679 6.13717 0.654679 6.15386C0.655101 8.01011 1.96356 9.60872 3.78306 9.97638C3.20908 10.1329 2.60659 10.1559 2.02226 10.0433C2.5331 11.6318 3.99699 12.72 5.66529 12.7513C4.2844 13.8365 2.57872 14.4255 0.822565 14.4238C0.512345 14.4231 0.202548 14.4043 -0.10556 14.3674C1.67762 15.5118 3.75265 16.1187 5.8714 16.1159"
                      fill="white"
                    />
                  </svg>
                  TWITTER
                </Linkn>
              </LinkWrapper>
            </ColInner>
          </Colr>
        </Row>
      </ContainerWrapper>
    </Wrapper>
  )
}

export default Header
