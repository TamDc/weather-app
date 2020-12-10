import React, {useState} from 'react'
import useLocationsApi from './customHooks/useLocationsApi'
import LocationOption from './LocationOption'

function SearchBox({getForeCast}) {
  const [query, setQuery] = useState('')
  const [{locations, isLoading, isError}, getLocations] = useLocationsApi(query, [])

  const handleSearch = keyword => {
    setQuery(keyword)
    getLocations(keyword)
  }

  const sSugestionBox = {
    position: 'absolute',
    border: '1px solid #45aee7',
    borderTop: 'none',
    zIndex: '99',
    top: '102%',
    left: '0',
    right: '0',
    maxHeight: '300px',
    overflow: 'scroll',
    padding: '5px',
    backgroundColor: '#fff'
  }

  const sSearchInput = {
    minWidth: '320px',
    border: '1px solid #45aee7',
    borderRadius: '5px'
  }

  return(
    <div className="row">
      <div className="position-relative d-flex col-4" style={sSearchInput}>
        <span style={{ padding:'7px' }} >
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </span>
        <input
          placeholder="Search"
          style={{width: '100%', border: 'none'}}
          value={query}
          onChange={event => handleSearch(event.target.value)}
        />
        { query &&
          <div style={sSugestionBox}>
            { isLoading ?
              <img src="loading.svg" alt="loading" style={{paddingLeft: '20px'}}/> :
              locations.map(item => (
                <LocationOption
                  key={item.woeid}
                  {...item}
                  setQuery={setQuery}
                  getForeCast={getForeCast}
                />
            ))}
          </div>
        }
      </div>
      
      { isError && <div style={{color: 'red'}}> Oops! Something went wrong.</div> }
    </div>
  )
}

export default SearchBox
