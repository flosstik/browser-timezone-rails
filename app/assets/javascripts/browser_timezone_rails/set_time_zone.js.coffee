window.BrowserTZone ||= {}
BrowserTZone.setCookie = ->
  $.cookie "browser.timezone", Intl.DateTimeFormat().resolvedOptions().timeZone, { expires: 365, path: '/' }

jQuery ->
  BrowserTZone.setCookie()
