import React from 'react'

function Header() {
  const sHeader = {
    color: '#0b4882'
  }

  return (
    <h1 className="d-flex justify-content-center" style={sHeader}>
      Weather Forecasting
    </h1>
  )
}

export default Header;
