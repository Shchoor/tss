import React, { useMemo } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import warr from "../../images/class/1_class.png"
import pala from "../../images/class/2_class.png"
import hunter from "../../images/class/3_class.png"
import rogue from "../../images/class/4_class.png"
import priest from "../../images/class/5_class.png"
import dk from "../../images/class/6_class.png"
import sham from "../../images/class/7_class.png"
import mage from "../../images/class/8_class.png"
import lock from "../../images/class/9_class.png"
import monk from "../../images/class/10_class.png"
import druid from "../../images/class/11_class.png"
import dh from "../../images/class/12_class.png"

const ClassImage = ({ id }) => {
  let imageLink

  switch (id) {
    case 1:
      imageLink = warr
      break
    case 2:
      imageLink = pala
      break

    case 3:
      imageLink = hunter
      break

    case 4:
      imageLink = rogue
      break

    case 5:
      imageLink = priest
      break

    case 6:
      imageLink = dk
      break

    case 7:
      imageLink = sham
      break

    case 8:
      imageLink = mage
      break

    case 9:
      imageLink = lock
      break

    case 10:
      imageLink = monk
      break

    case 11:
      imageLink = druid
      break

    case 12:
      imageLink = dh
      break

    default:
      console.log("no such class id: " + id)
  }

  return <img src={imageLink} />
}

export default ClassImage
