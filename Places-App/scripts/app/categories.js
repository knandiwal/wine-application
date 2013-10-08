var app = app || {};

(function(a) {
    function init(e) {
        var dataSource = new kendo.data.DataSource({
            data:[
                {Name:"sample", Id:1},
                {Name:"sample 2", Id:2}, 
                {Name: "sample 3", Id :3}
            ],
            change:onCategoryChanged
        });
        var viewModel = kendo.observable({
            categories:dataSource           
        });
        
        kendo.bind(e.view.element, viewModel);
    }
    
    function onCategoryChanged() {
        var categoryId = $("#categories-list").val();
        /*httpRequest.getJSON("http://localhost:62354/api/" + "categories/"+categoryId)
        .then(function(categoryInfo){
        $("#category-info").html(JSON.stringify(categoryInfo)); 
        });
        */
        navigator.notification.alert(categoryId);
    }
    
    a.categories = {
        init:init          
    };
}(app));