import { v4 as uuidv4 } from 'uuid';

export class Trip {
  public days : Day[]
  public totalBudget: number
  public startDate: Date
  public endDate: Date
  public duration: number

  constructor(days, totalBudget, duration) {
    this.days = days
    this.totalBudget = totalBudget
    this.startDate = days[0].date
    this.endDate = days[-1].date
    this.duration = duration
  }
}

export class Day {
  public id: string
  public dailyBudget : number
  public date: Date
  public expenses : Expense[]

  constructor(dailyBudget, date) {
    this.id = uuidv4()
    this.dailyBudget = dailyBudget
    this.date = date
  }

}

export class Expense {
  public type: ExpenseTypes
  public expenses: {
    cost: number
    description: string
  }
}

type ExpenseTypes = 'food' | 'nightlife' | 'tourism' | 'transport'

