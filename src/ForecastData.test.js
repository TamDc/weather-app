import React from 'react';
import renderer from 'react-test-renderer';
import ForecastData from './ForecastData';

const mock = {
  city: "San Joe",
  forecast: [
    {
      id: 1, 
      applicable_date: '2020-12-11', 
      min_temp: 20, 
      max_temp: 30
    },
    {
      id: 2, 
      applicable_date: '2020-12-12', 
      min_temp: 20, 
      max_temp: 30
    },
    {
      id: 3, 
      applicable_date: '2020-12-13', 
      min_temp: 20, 
      max_temp: 30
    },
    {
      id: 4, 
      applicable_date: '2020-12-14', 
      min_temp: 20, 
      max_temp: 30
    },
    {
      id: 5, 
      applicable_date: '2020-12-15', 
      min_temp: 20, 
      max_temp: 30
    }
  ]
}

test('renders loading phase', () => {
  const tree = renderer
    .create(<ForecastData isLoading data={mock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders with data', () => {
  const tree = renderer
    .create(<ForecastData isLoading={false} data={mock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
