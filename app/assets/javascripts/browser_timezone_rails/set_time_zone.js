window.BrowserTZone || (window.BrowserTZone = {});

BrowserTZone.setCookie = function() {
  return $.cookie("browser.timezone", Intl.DateTimeFormat().resolvedOptions().timeZone, {
    expires: 365,
    path: '/'
  });
};

jQuery(function() {
  return BrowserTZone.setCookie();
});