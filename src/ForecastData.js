import React from 'react'
const { default: Item } = require("./Item")
const { default: LoadingList } = require("./LoadingList")

const ForecastData = ({isLoading, data: {city, forecast}}) => {
  return(
    <div className="mt-md-3">
      <div>
        <h2 style={{color:'#0055a5'}}>
          { isLoading ? <img src="loading3.svg" alt="loading"/> : city }
        </h2>
      </div>
      <div className="container">
        <div className="row">
          { isLoading
            ? <LoadingList />
            : forecast.map(item => <Item key={item.id} {...item}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default ForecastData
