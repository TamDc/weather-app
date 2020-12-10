import { renderHook, act } from '@testing-library/react-hooks'
import useForecastApi from './useForecastApi';
import axios from 'axios';

jest.mock('axios');


const returnData = [{a: 2},{a: 3}, {a: 4},{a: 5}, {a: 6}, {a: 7}]
const validData = [{a: 2},{a: 3}, {a: 4},{a: 5}, {a: 6}]

const mockData = {
  title: 'Ho Chi Minh',
  consolidated_weather: returnData,
}


test('should call api success with only 5 item', async () => {
  const mockAxiosGet = jest.spyOn(axios, "get");

  mockAxiosGet.mockImplementation(async () => ({data: mockData}));

  const expected = {
    isLoading: false,
    isError: false,
    data: {
      city: 'Ho Chi Minh',
      forecast: validData,
    }
  }

  const {result, waitForNextUpdate} = renderHook(() => useForecastApi('1252431', {
    city: '',
    forecast: []
  }))

  await waitForNextUpdate()

  expect(result.current[0]).toEqual(expected)
})


test('should throw error', async () => {
  const mockAxiosGet = jest.spyOn(axios, "get");

  mockAxiosGet.mockImplementation(async () => {throw new Error();});

  const expected = {
    isLoading: false,
    isError: true,
    data: {
      city: '',
      forecast: [],
    }
  }

  const {result, waitForNextUpdate} = renderHook(() => useForecastApi('1252431', {
    city: '',
    forecast: []
  }))

  await waitForNextUpdate()

  expect(result.current[0]).toEqual(expected)
})