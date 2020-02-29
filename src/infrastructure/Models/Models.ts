import faker from 'faker'

class Trip {
  public days : Day[]
  public totalBudget: number

  constructor(props) {
    this.days = props.days
    this.totalBudget = props.totalBudget
  }
}

class Day {
  public id: string
  public dailyBudget : number
  public expenses : Expense[]

}

class Expense {
  public id: string
  public type: ExpenseTypes
  public cost: number
}

type ExpenseTypes = 'food' | 'nightlife' | 'tourism' | 'transport'

