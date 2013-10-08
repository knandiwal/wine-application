var app = app || {};

(function(a){
    function init(){
        httpRequest.getJSON(app.servicesBaseUrl+"categories")
            .then(function(categories){
                  $("#categories-holder").html(JSON.stringify(categories));              
            });
    }  
    a.categories={
      init:init  
      init:init  
    };
}(app));