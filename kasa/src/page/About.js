import React from 'react'
import Collapse from '../components/collapse/Collapse'
import { getDataAbout } from '../data'

const About = () => {
  const data = getDataAbout()
  console.log(data)
  return (
    <main>
       {data.map((x) => (
             <Collapse key={x.id} title={x.title} description={x.description} equip="true"/>
          ))} 
    </main>
  )
}

export default About
