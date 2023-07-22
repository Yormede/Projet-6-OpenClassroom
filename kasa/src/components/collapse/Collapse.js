import React, { useState } from 'react'
import './_collapse.scss'

const Collapse = (props) => {
  const [underCollapse, setOpen] = useState('hidden')
  const [rotation, rotate] = useState('')
  return (
    <div className="collapseParent">
      <div className="collapse">
        <p>{props.title}</p>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            underCollapse === 'hidden' && props.data instanceof Array
              ? setOpen('displayedGreat')
              : underCollapse === 'hidden'
              ? setOpen('displayed')
              : setOpen('hidden')
            underCollapse === 'hidden' ? rotate('rotate') : rotate('')
          }}
          className={rotation}
        >
          <path
            d="M7.19313 0.502922C7.63941 0.0566427 8.36416 0.0566427 8.81044 0.502922L15.6653 7.35777C16.1116 7.80405 16.1116 8.52881 15.6653 8.97509C15.219 9.42137 14.4943 9.42137 14.048 8.97509L8 2.92711L1.95203 8.97152C1.50575 9.4178 0.780989 9.4178 0.33471 8.97152C-0.111569 8.52524 -0.111569 7.80048 0.33471 7.3542L7.18956 0.499352L7.19313 0.502922Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={underCollapse + ' openedCollapse'}>
        {props.data instanceof Array ? (
          props.data.map((x) => {
            return <p key={x}>{x}</p>
          })
        ) : (
          <p>{props.data}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
