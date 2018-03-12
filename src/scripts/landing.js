/**
 * @class Landing
 *
 * Class for landing data
 */

// import Ajax from './ajax.es6'

export default class Landing {
  /**
   * @constructor
   */
  constructor() {
    this._accordions = document.querySelectorAll('.js-accordion')
  }

  init() {
    this._accordions.forEach(accordion =>
      accordion.addEventListener('click', this.collapseAccordion)
    )
    // this._buttons.forEach(btn => btn.addEventListener('click', evt => this.selectedBrand(evt, btn)));
  }

  get data() {
    return this._brands
  }

  collapseAccordion() {
    if (this.classList.contains('is-collapsed')) {
      this.classList.remove('is-collapsed')
    } else {
      this.classList.add('is-collapsed')
    }
  }
}
