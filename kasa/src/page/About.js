import React from 'react'
import Collapse from '../components/collapse/Collapse'
import Banner from '../components/banner/Banner'
import { getDataAbout } from '../data'
import bannerImage from "../images/about_banner.webp"

const About = () => {
  const data = getDataAbout()
  return (
    <main>
      <Banner src={bannerImage} alt="Image de montagne enneigés avec rivières"/>
       {data.map((x) => (
             <Collapse key={x.id} title={x.title} data={x.description} equip="true"/>
          ))} 
    </main>
  )
}

export default About
