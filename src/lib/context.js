export class Context {
  data = $state({})

  constructor(data) {
    this.data = data

    // event categories
    this.data.eventCategories = [
      'Party',
      'Dining',
      'Excursion',
      'Get-Together',
      'Sports/Games',
    ]


  }

  get data() {
    return this.data
  }

  get eventCategories() {
    return this.data.eventCategories
  } 
}