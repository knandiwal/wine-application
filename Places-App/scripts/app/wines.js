var app = app || {};

(function(a) {

    function getWines() {
        httpRequest.getJSON(app.servicesBaseUrl  + "wines/?akey=1omonq1a4dt2528sr1oc9kebgpdbv6dbhbk7k98wjdsiymmz&n=100")
        .then(function(wines) {
            viewModel.set("wines", wines.wines); 
        });
    }

    var viewModel = kendo.observable({
        wines:[],
        getWines: getWines
    });
    
    function init(e) {
       kendo.bind(e.view.element, viewModel);
        if (!checkConnection.check()) {
            navigator.notification.alert("Please connect to Internet", function() {
            })
        }
        else {
            getWines();
        }
    }   
    
    a.wines= {
        init:init          
    };
}(app));