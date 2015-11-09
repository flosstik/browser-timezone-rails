window.BrowserTZone || (window.BrowserTZone = {});

function get_tz_name(){
    if(typeof Intl !== "undefined" && Intl !== null){
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    else{
        return jstz.determine().name();
    }
}

BrowserTZone.setCookie = function() {
  return $.cookie("browser.timezone", get_tz_name(), {
    expires: 365,
    path: '/'
  });
};

jQuery(function() {
  return BrowserTZone.setCookie();
});