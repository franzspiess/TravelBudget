import { v4 as uuidv4 } from 'uuid';

export class Trip {
  public days : Day[]
  public totalBudget: number
  public startDate: number
  public endDate: number
  public duration: number

  constructor(startDate, endDate, totalBudget) {
    this.totalBudget = totalBudget
    this.startDate = startDate
    this.endDate = endDate
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
