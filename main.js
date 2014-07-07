var app = (function(data){
  function show(suggestions){
    document.getElementById("results").innerHTML = "";
    var fragment = document.createDocumentFragment();
    suggestions.forEach(function(suggestion){
      var result = document.createElement("div");
      result.className = "result";
      result.innerHTML = suggestion;
      result.addEventListener('click', function(e){
        addToken(suggestion);
      }, false);
      fragment.appendChild(result);
    });
    document.getElementById("results").appendChild(fragment);
  }
  
  function addToken(content){
    var token = document.createElement("span");
    token.className = "token";
    token.innerHTML = content;
    token.addEventListener('click', function(e){
      this.parentNode.removeChild(this);
    });
    document.getElementById("tokens").appendChild(token);
    document.getElementById("query").value = "";
    show(data);
  }
  
  // The first query is ""
  show(data);
  
  document.getElementById("query").addEventListener("input",function(e){
    var query = e.target.value;
    var regex = new RegExp(query,"i");
    var suggestions = [];
    data.forEach(function(datum){
      if(datum.match(regex)) {
        suggestions.push(datum);
      };
    });
    show(suggestions);
  }, false);
  
  // User should be blocked from submit(enter) the input unless the input matches one of the entries
  document.getElementById("query").addEventListener("keyup",function(e){
    if(e.keyCode === 13 ) { // Enter
      var query = e.target.value;
      var regex = new RegExp(query,"i");
      for(var i=data.length-1 ; i>0 ;i--){
        if(data[i].toLowerCase() === query.toLowerCase()) {
          return addToken(data[i]);
        }      
      }
    };
  }, false);

  return {show:show,addToken:addToken};  
})(TZ);
