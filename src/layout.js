import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import AddedToCard from "../components/AddedToCard/AddedToCard"
// import Cookies from "./Cookies/Cookies"
// import { Helmet } from "react-helmet"

import "./layout.scss"

const Layout = ({ children, location }) => {
  return (
    <>
      {/* <Helmet>
        <meta name="robots" content="noindex" />
        <meta
          name="google-site-verification"
          content="zpqsAZPADM9jbKsvddWQrIXZJ0aU86cEQQGuqXSJV4o"
        />
      </Helmet>

      <AddedToCard />

      <Cookies /> */}

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
