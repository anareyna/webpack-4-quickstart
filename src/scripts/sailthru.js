/**
 * @class Sailthru
 *
 * Class for adding users to the Sailthru Master List
 */

const apiKey = 'd70a3ed7a73234fe65cd775dd49e7217'
const apiSecret = '5f7d9648f34878e18773f574b3319fd8'
const sailthru = require('sailthru-client').createSailthruClient(
  apiKey,
  apiSecret
)

export default class Sailthru {
  /**
   * @constructor
   */
  constructor() {
    this._button = document.getElementById('btnNewsletter')
    this._email = document.getElementById('txtNewsletterEmail')
  }

  init() {
    this._button.addEventListener('click', e => this.addUser(e))
    this._button.addEventListener('touchstart', e => this.addUser(e))
  }

  addUser(e) {
    e.preventDefault()
    var data = {
      email: this._email.value,
    }
    if (this._email.validity.valid) {
      sailthru.apiPost('email', data, function(err, response) {
        if (!err) {
          console.log('response ', response)
        } else {
          console.log('Error!')
          console.log(err)
        }
      })
    }

    // const objUser = {"id": this._email.value}
    // const hash = `${this._apiKey}${this._secret}${this._format}${JSON.stringify(objUser)}`
    // const sig = md5(hash)

    // console.log('objUser', JSON.stringify(objUser))
    // console.log('this._apiKey', this._apiKey)
    // console.log('this._secret', this._secret)
    // console.log('this._format', this._format)
    // console.log('hash', hash)
    // console.log('sig', sig)

    // const url = `https://api.sailthru.com/user?sig=${sig}&api_key=${this._apiKey}&format=${this._format}&json=${encodeURI(JSON.stringify(objUser))}`

    // if (this._email.validity.valid) {
    //     axios.post(url, {
    //         id: this._email.value,
    //         })
    //         .then(function (response) {
    //         console.log('response', response);
    //         })
    //         .catch(function (error) {
    //         console.log(error);
    //         });

    // }
  }
}
