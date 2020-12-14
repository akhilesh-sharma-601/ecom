import React from "react"

import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, title, subtitle, heroclass }) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      <h2 className="text-white text-uppercase text-center display-4">
        {" "}
        {title}
      </h2>
      <div><h5 className="text-warning">{subtitle}</h5></div>
      
    </BackgroundImage>
  )
}
