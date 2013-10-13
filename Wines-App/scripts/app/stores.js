var app = app || {};

(function(a) {

    var viewModel = kendo.observable({
        stores:[],
        getWines: getByLocation
    });
    
    function init(e) {
       kendo.bind(e.view.element, viewModel);
        if (!checkConnection.check()) {
            navigator.notification.alert("Please connect to Internet", function() {
            })
        }
        else {
            getByLocation();
        }
    }
    
        function getByLocation() {
        cordovaExt.getLocation().
        then(function(location) {
            var locationString = "&lat="+location.coords.latitude + "&lng=" + location.coords.longitude;            
            return httpRequest.getJSON(app.servicesBaseUrl  + "stores/?akey=1omonq1a4dt2528sr1oc9kebgpdbv6dbhbk7k98wjdsiymmz" + locationString
            +"&n=100");     
        })
        .then(function(data) {
            viewModel.set("stores", data.stores); 
        });
    }
    
    a.stores= {
        init:init          
    };
}(app));