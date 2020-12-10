import React from 'react';
import useForecastsApi from './customHooks/useForecastApi';
import SearchBox from './SearchBox';
import Header from './Header';
import ForecastData from './ForecastData';
 
function App() {
  const [{ data, isLoading, isError}, getForeCast] = useForecastsApi('1252431', {
    city: '',
    forecast: []
  })

  if(isError) return <div style={{ color:'red' }}>Oops! Something went wrong!</div>

  return (
    <div className="container mt-4">
      <Header />

      <SearchBox getForeCast={getForeCast} />
        
      <ForecastData data={data} isLoading={isLoading}/>
    </div>
  );
}
 
export default App;
