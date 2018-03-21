/**
 * @class Ajax
 *
 * Class for AJAX calls
 */
export default class Ajax {
  /**
   * Get data from API using the pre-set URL
   * @param {string} url - resource url
   */
  get({ url, contentType = 'application/json' }) {
    return new Promise((resolve, reject) => {
      this.httpRequest = new XMLHttpRequest()
      this.httpRequest.open('GET', url, true)
      this.httpRequest.setRequestHeader('Content-Type', contentType)
      this.httpRequest.onload = () => resolve(this.httpRequest.responseText)
      this.httpRequest.onerror = () => reject(this.httpRequest.statusText)
      this.httpRequest.send()
    })
  }

  /**
   * Send data to API
   * @param {string} url - resource url
   * @param {object} data - data to be sent to API
   * @param {string} contentType - contentType of the request
   */
  post(url, data, contentType = 'application/json') {
    return new Promise((resolve, reject) => {
      this.httpRequest = new XMLHttpRequest()
      this.httpRequest.open('POST', url)
      this.httpRequest.setRequestHeader('Content-Type', contentType)
      this.httpRequest.onload = () => resolve(this.httpRequest.responseText)
      this.httpRequest.onerror = () => reject(this.httpRequest.statusText)
      this.httpRequest.send(JSON.stringify(data))
    })
  }
}
