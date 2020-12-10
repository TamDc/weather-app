import React, { Fragment } from 'react'

const sWrapper = {
  minWidth: '132px',
  maxWidth: '160px'
}

const sInfoBox = {
  minHeight: '120px',
  textAlign: 'center'
}

const LoadingItem = () => {
  return (
    <div className="col-2" style={sWrapper}>
      <div className="p-3 border" style={sInfoBox}>
        <img src="loading3.svg" alt="loading" className="mt-4"/>
      </div>
    </div>
  )
}

const LoadingList = () => {
  return (
    <Fragment>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </Fragment>
  )
}

export default LoadingList
