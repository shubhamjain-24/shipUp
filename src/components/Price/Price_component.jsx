import React from 'react'
import './Price_component.css'

const Price_component = () => {
  return (
    <>
     <div className="input-container">
      <label htmlFor="location" className="input-label">
        Origin
      </label>
      <div className="input-wrapper">
        <input
          type="text"
          id="location"
          className="location-input"
          placeholder=" "
        />
        <div className="placeholder-text">Origin</div>
      </div>
    </div>
    </>
  )
}

export default Price_component