// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require jstz


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