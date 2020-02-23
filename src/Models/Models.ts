class Trip {
  public days : Day[]
  public totalBudget: number

  constructor(props) {
    this.days = props.days
    this.totalBudget = props.totalBudget
  }
}

class Day {
  public dailyBudget : number
  public expenses : Expense[]

}

class Expense {

}