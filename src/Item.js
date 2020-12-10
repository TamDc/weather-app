import React from 'react';
import { roundTemp, getDayOfWeek } from './helpers'

function Item({id, applicable_date, min_temp, max_temp}) {
  const sWrapper = {
    minWidth: '132px',
    maxWidth: '160px'
  }
  const sInfoBox = {
    textAlign: 'center',
    minWidth: 'inherit',
    border: '1px solid #45aee7'
  }
  const sDay = {
    display: 'block',
    fontSize: '1.3rem'
  }
  const sTemp = {
    display: 'block',
    marginTop: '5px',
    fontSize: '0.9rem'
  }
  return (
    <div className="col-2" style={sWrapper}>
      <div key={id} className="p-3" style={sInfoBox}>
        <span style={sDay}>{getDayOfWeek(applicable_date)}</span>
        <span style={sTemp}>{`Min: ${roundTemp(min_temp)}°C`}</span>
        <span style={sTemp}>{`Max: ${roundTemp(max_temp)}°C`}</span >
      </div>
    </div>
  )
}

export default Item;
