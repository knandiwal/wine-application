var app = app || {};

(function(a) {
    function getWines() {
        var area = $("#inputText").val();
           
        var ingrid = area.toString();
        var testDiv = $("#results");
        if (!checkConnection.check()) {
            navigator.notification.alert("Please connect to internet!", function() {
            })
        }
        else {
            httpRequest.getJSON("http://api.snooth.com/wines/?akey=1omonq1a4dt2528sr1oc9kebgpdbv6dbhbk7k98wjdsiymmz&n=100&q="+ ingrid)
            .then(function(data) {
                var stringified = JSON.stringify(data.wines);
                window.localStorage.setItem("data", data.wines);
                var obj = jQuery.parseJSON(stringified);
                var content = "<p>";
                obj.forEach(function(each) {  
                    var testy = JSON.stringify(each);
                    var obj = jQuery.parseJSON(testy);
                    var wineName ="<h4>" +each.name+"</h4>"
                    content = content + wineName;
                });
                content = content+"</p>"
                testDiv.html(content);
            });
        }
    }
    
    var viewModel = kendo.observable({
        getWines: getWines
    });
    
    function init(e) {
        kendo.bind(e.view.element, viewModel);
    }   
    
    a.result = {
        init:init          
    };
}(app));