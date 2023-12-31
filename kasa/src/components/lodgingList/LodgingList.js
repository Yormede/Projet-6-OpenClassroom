import './_lodgingList.scss'
import React from 'react'
import { getData } from '../../data'
import Card from '../card/Card'

const LodgingList = () => {
  const data = getData()
  return (
    <section className="lodgingList">
      <div className='cardList'>
        {data.map((lodgingData) => (
          <Card
            key={lodgingData.id}
            id={lodgingData.id}
            cover={lodgingData.cover}
            title={lodgingData.title}
          />
        ))}
      </div>
    </section>
  )
}

export default LodgingList
