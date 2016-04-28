$(document).ready(function(){
  var countCookies = document.getElementById("counter");
  var cookieJar = Cookies.get("cookiesCookie");
  var counter = parseInt(cookieJar);

  countCookies.innerHTML = counter;

    eatMe = function(flavor){
    if (cookieJar = null) {
      counter = 1;
      flavor = flavor;
    } else {
      counter += 1;
      flavor = flavor;
    };
    
    countCookies.innerHTML = counter;
    Cookies.set("cookiesCookie", counter);

    Cookies.set("current", flavor);
  };

    clearCookies = function(){
    counter = 0;
    countCookies.innerHTML = 0

    Cookies.set("cookiesCookie", 0);
    
    Cookies.set("current", 0)
  };

});
