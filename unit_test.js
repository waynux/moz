/*
 
Unit testing: This script checks out the DOM manipulation of related methods, show() and addToken().

*/

(function(){
  var suggestions = ["Taipei", "Barbados", "El_Salvador"];
  app.show(suggestions);
  suggestions.forEach(function(city,i){
    if(document.querySelectorAll("#results>div")[i].innerHTML !== city) {
      console.log("The method show(suggestions) is failed");
    }
  });
  
  app.addToken("Taipei");
  if(document.querySelector("#tokens>span").innerHTML !== "Taipei") {
    console.log("The method addToken(content) is failed");
  }

})();
