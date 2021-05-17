import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import Footer from "./components/Footer"


import "./layout.scss"

const Layout = ({ children, location }) => {
  return (
    <>
  

      <Header location={location} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
