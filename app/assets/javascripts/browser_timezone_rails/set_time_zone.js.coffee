window.BrowserTZone ||= {}

local_time_zone = () ->
  if Intl?
    Intl.DateTimeFormat().resolvedOptions().timeZone
  else
    jstz.determine().name()

BrowserTZone.setCookie = ->
  $.cookie "browser.timezone", local_time_zone, { expires: 365, path: '/' }

jQuery ->
  BrowserTZone.setCookie()
