import React from "react"
import Layout from "../layout"
import InnerHero from "../components/InnerHero"
import Seo from "../components/seo"

const Author = () => {
  return (
    <Layout>
      <Seo  customTitle={'Author | The Scarlet Scourge'} />
      <InnerHero title="About author" />
    
    </Layout>
  )
}

export default Author
