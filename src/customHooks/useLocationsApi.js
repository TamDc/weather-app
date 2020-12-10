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
        return { 
          ...state,
          isLoading: false,
          isError: false,
          locations: action.payload,
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

// Handle redundant request when typing search
let cancelToken;

const useLocationsApi = (query, initialData) => {
    const [q, setQuery] = useState(query);
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      locations: initialData,
    });
   
    useEffect(() => {
      let didCancel = false;

      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });

        if (typeof cancelToken != typeof undefined) {
          cancelToken.cancel("Operation canceled due to new request.");
        }
        cancelToken = axios.CancelToken.source();
        try {
          const result = await axios.get(`https://cors-anywhere.herokuapp.com/http://metaweather.com/api/location/search/?query=${q}`, { 
            cancelToken: cancelToken.token
          });
          
          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE' });
          }
        }
      };

      if(q.trim() !== '') fetchData();
   
      return () => {
        didCancel = true;
      };
    }, [q]);
   
    return [state, setQuery];
  };

  export default useLocationsApi;
