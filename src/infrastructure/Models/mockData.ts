import faker from 'faker'
import { Trip, Day } from './Models';

const days = new Array(10).map((el, i)=> {
  const date = new Date()
  date.setDate(date.getDate() + i)
    return new Day(50, date)}
  )

export const myTrip = new Trip(days, 500, 10)