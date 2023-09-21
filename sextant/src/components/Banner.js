import React from 'react'
import '../styles/Banner.css';

const Banner = (props) => {
  return (
    <div className='Banner'>
        <h1>{props.bannerText}</h1>
    </div>
  )
}

export default Banner