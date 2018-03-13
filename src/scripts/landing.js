/**
 * @class Landing
 *
 * Class for landing data
 */

import { tns } from 'tiny-slider/src/tiny-slider.module'

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
    document.addEventListener('DOMContentLoaded', this.runSliders)
  }

  collapseAccordion() {
    if (this.classList.contains('is-collapsed')) {
      this.classList.remove('is-collapsed')
    } else {
      this.classList.add('is-collapsed')
    }
  }
  runSliders() {
    /* eslint-disable no-unused-vars */
    let forEach = function(array, callback, scope) {
      for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]) // passes back stuff we need
      }
    }

    let sliders = document.querySelectorAll('.js-slider')
    forEach(sliders, function(index, value) {
      // now fetch YOUR-SLUG from html (use value.getAttribute('data-name') for < IE10 support)
      let thumbnail = value.dataset.name
      let slider = tns({
        container: value,
        navContainer: '.thumbnails-' + thumbnail,
        navAsThumbnails: true,
        mouseDrag: true,
        // more options ..
      })
    })
  }
}
