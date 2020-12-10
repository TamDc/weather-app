import moment from 'moment'
import {roundTemp, getDayOfWeek} from './index'

it('round temperature', () => {
  expect(roundTemp(35.09)).toEqual(35);
  expect(roundTemp(25.5)).toEqual(26);
});

it('format date', () => {
  const now = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, 'd').format("YYYY-MM-DD");
  expect(getDayOfWeek(now)).toEqual('Today');
  expect(getDayOfWeek(tomorrow)).toEqual('Tomorrow');
});
