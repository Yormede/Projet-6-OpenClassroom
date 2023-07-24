import React from 'react'
import './_rating.scss'
import greyStar from '../../images/grey_star.svg'
import redStar from '../../images/red_star.svg'

const Rating = (props) => {
  const fullStars = Math.floor(props.data)
  const emptyStars = 5 - fullStars

  return (
    <div className="stars">
      {[...Array(fullStars)].map((z,index) => (
        <img src={redStar} key={index} alt='etoile rouge'/>
      ))}
      {[...Array(emptyStars)].map((z,index) => (
        <img src={greyStar} key={index} alt='etoile grise'/>
      ))}
    </div>
  )
}

export default Rating
