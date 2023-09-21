import React from 'react'
import '../styles/Exhibit.css'

const Exhibit = (props) => {
  return (
    <div className='Exhibit'>
        <h2 className='ExhibitHeading'>{props.name}</h2>
        <div className='ExhibitContent'>
            {props.children}
        </div>
    </div>
  )
}

export default Exhibit