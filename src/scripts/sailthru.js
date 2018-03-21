/**
 * @class Sailthru
 *
 * Class for adding users to the Sailthru Master List
 */

import Ajax from './ajax'

export default class Sailthru extends Ajax {
  /**
   * URL to post to Zapier
   * @constant
   * @returns {string}
   */
  static get ZAP_URL() {
    return 'https://hooks.zapier.com/hooks/catch/1591095/s3hbcv/'
  }

  /**
   * @constructor
   */
  constructor() {
    super()
    this._button = document.getElementById('btnNewsletter')
  }

  init() {
    this._button.addEventListener('click', evt => this.addUser(evt))
    this._button.addEventListener('touchstart', evt => this.addUser(evt))
  }

  addUser(evt) {
    evt.preventDefault()
    const email = document.getElementById('txtNewsletterEmail'),
      data = {
        email: email.value,
      }

    if (email.value.trim()) {
      super
        .post(Sailthru.ZAP_URL, data, 'text/plain')
        .then(res => {
          console.log(res)
          this._button.disabled = 'true'
        })
        .catch(e => new Error(e))
    }
  }
}
