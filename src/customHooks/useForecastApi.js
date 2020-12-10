import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return { 
          ...state,
          isLoading: true,
          isError: false 
        };
      case 'FETCH_SUCCESS':
        const { consolidated_weather, title } = action.payload
        const fiveDaysForecast = consolidated_weather.filter((_f, idx) => idx > 0 && idx < 6)

        return { 
          ...state,
          isLoading: false,
          isError: false,
          data: {
            city: title,
            forecast: fiveDaysForecast
          },
        };
      case 'FETCH_FAILURE':
        return { 
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

const useForecastApi = (query, initialData) => {
    const [code, setQuery] = useState(query);
   
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
   
    useEffect(() => {
      let didCancel = false;
   
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
   
        try {
          const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://metaweather.com/api/location/${code}`);
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE' });
          }
        }
      };
   
      if(code) fetchData();
   
      return () => {
        didCancel = true;
      };
    }, [code]);
    return [state, setQuery];
  };
  

  export default useForecastApi;

