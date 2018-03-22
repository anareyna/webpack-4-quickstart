/**
 * @class Tracking
 *
 * Class for Tracking data
 */

export default class Tracking {
  /**
   * @constructor
   */

  constructor() {
    this._visitLinks = document.querySelectorAll('.js-track-link')
    this._btnCallBrands = document.querySelectorAll('.js-track-call')
  }

  init() {
    document.addEventListener('DOMContentLoaded', this.onLoadPage)

    this._visitLinks.forEach(link =>
      link.addEventListener('click', this.onVisitLinks)
    )
    this._btnCallBrands.forEach(btn =>
      btn.addEventListener('click', this.onCallBrand)
    )
  }

  onLoadPage() {
    gtag('event', 'conversion', { send_to: 'AW-947960761/Z151CLj0oX8QufeCxAM' })
  }

  onVisitLinks() {
    function gtag_report_conversion(url) {
      var callback = function() {
        if (typeof url != 'undefined') {
          window.location = url
        }
      }
      gtag('event', 'conversion', {
        send_to: 'AW-947960761/m74dCLDypX8QufeCxAM',
        value: 1.0,
        currency: 'USD',
        event_callback: callback,
      })
      return false
    }
    gtag_report_conversion()
  }

  onCallBrand() {
    function gtag_report_conversion(url) {
      var callback = function() {
        if (typeof url != 'undefined') {
          window.location = url
        }
      }
      gtag('event', 'conversion', {
        send_to: 'AW-947960761/rUcsCO77lX8QufeCxAM',
        value: 1.0,
        currency: 'USD',
        event_callback: callback,
      })
      return false
    }
    gtag_report_conversion()
  }
}
