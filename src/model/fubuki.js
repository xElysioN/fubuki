/**
 * @author Maxime Cornet <xelysion@icloud.com>
 * @version 1.0.0
 */
class Fubuki {
  static get DIFFICULTY_EASY () { return 5 }
  static get DIFFICULTY_MEDIUM () { return 6 }
  static get DIFFICULTY_HARD () { return 7 }

  constructor () {
    /** Game Grid */
    this.grid = []

    /**  */
    this.results = []

    /** Available numbers */
    this.numberAvailable = []

    this.indexUpdatable = []

    /** List of all numbers available */
    this.baseNumbers = Array.from(new Array(9).keys())

    /** Configuration */
    this.config = {
      'difficulty': Fubuki.DIFFICULTY_EASY,
      'time': false,
      'type': 'addition'
    }
  }

  /**
   * Launch a new game
   */
  newGame () {}

  /**
   * Generate the result grid.
   */
  generateResultGrid () {
    this.results = this.shuffleArray(this.baseNumbers)
  }

  /**
   * Generate the grid.
   */
  generateGrid () {
    if (this.results.length === 0) {
      return false
    }

    let indexToRemove = this.config.difficulty
    let tmp = this.results.slice(0)

    while (indexToRemove > 0) {
      let index = Math.floor(Math.random() * 10)
      if (tmp[index] !== null) {
        this.numberAvailable.push(tmp[index])
        this.indexUpdatable.push(index)
        tmp[index] = null
        indexToRemove--
      }
    }

    this.grid = tmp
  }

  /**
   * Compare result and grid.
   */
  isGridValid () {
    return this.grid === this.results
  }

  clear () {
    this.grid = []
    this.results = []
    this.numberAvailable = []
  }

  /**
   * Set the difficulty.
   *
   * @param integer difficulty
   */
  setDifficulty (difficulty) {
    this.config.difficulty = difficulty
  }

  /**
   * Get the difficulty.
   *
   * @return integer
   */
  getDifficulty () {
    return this.config.difficulty
  }

  /**
   * Shuffle elements of the array
   *
   * @param array
   *
   * @return array
   */
  shuffleArray (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
}

export default Fubuki
