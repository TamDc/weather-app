import moment from 'moment'

const roundTemp = temp => Math.round(temp)
const getDayOfWeek = date => moment(date).calendar().split(' ')[0]


export {
  roundTemp,
  getDayOfWeek
}
