import React from 'react'

const LocationOption = ({woeid, title, getForeCast, setQuery}) => {
  const sLocationItem = {
    width: '100%',
    padding: '5px 10px',
    borderBottom: '1px solid #d4d4d4',
  }

  const hovered = e => {
    e.target.style.background = '#e9e9e9';
  }

  const notHovered = e => {
    e.target.style.background = '#fff';
  }

  return(
    <div
      style={sLocationItem}
      onMouseEnter={hovered}
      onMouseLeave={notHovered}
      onClick={() => {
        getForeCast(woeid)
        setQuery('')
      }}
    >
      {title}
    </div>
  )
}

export default LocationOption;
