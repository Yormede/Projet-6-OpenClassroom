import React, { useState } from 'react'
import Gallery from '../components/gallery/Gallery'
import Collapse from '../components/collapse/Collapse'
import Rating from '../components/rating/Rating'
import Tag from '../components/tag/Tag'
import '../styles/_lodging.scss'

const Lodging = (props) => {
  return (
    <main>
      <Gallery alt={props.data.title} pictures={props.data.pictures} />
      <div className="lodgingInfo">
        <div className="lodgingTitle">
          <h1>{props.data.title}</h1>
          <h2>{props.data.location}</h2>
          <div className="tagsContainer">
            {props.data.tags.map((tags) => (
              <Tag key={tags} data={tags} />
            ))}
          </div>
        </div>
        <div className="hostInformation">
          <div className='hostNameAndPicture'>
            <p>
              {props.data.host.name.split(' ').map((x, z) => (
                <React.Fragment key={z}>
                  {x}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <img src={props.data.host.picture} />
          </div>
          <Rating data={props.data.rating} />
        </div>
      </div>

      <div className="lodgingCollapse">
        <div>
          <Collapse title="Description" data={props.data.description} />
        </div>
        <div>
          <Collapse title="Equipements" data={props.data.equipments} />
        </div>
      </div>
    </main>
  )
}

export default Lodging
