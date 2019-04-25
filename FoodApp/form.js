$(function() {
// show entree form
    $("#addEntreeEntry").click(function(){
        $("#newEntree").toggle();
        $("#addDessertEntry").toggle();
        $("#addEntreeEntry").toggle();
    });

    // push to entree array on click of add new

    $("#newEntree").submit(function(e) {
        e.preventDefault();
        var newEntree = new Entree($("#entreeName").val(), $("#entreeCalories").val(), $("#entreeProtein").val());
        entrees.push(newEntree);
        console.log(entrees);
        $("#newEntree").toggle();
        $("#addEntreeEntry").toggle();
        $("#addDessertEntry").toggle();
        $("#entreeName").value = " ";
        //push entrees array to summary page
    });

// show dessert form
    $("#addDessertEntry").click(function(){
        $("#newDessert").toggle();
        $("#addEntreeEntry").toggle();
        $("#addDessertEntry").toggle();
    });

    // push to dessert array on click of add new

    $("#newDessert").submit( function(e) {
        e.preventDefault();
        var newDessert = new Dessert($("#dessertName").val(), $("#dessertCalories").val(), $(".dairyFree:checked").val(), $(".glutenFree:checked").val());
        desserts.push(newDessert);
        console.log(desserts);
        $("#newDessert").toggle();
        $("#addEntreeEntry").toggle();
        $("#addDessertEntry").toggle();
        $("#dessertName").value = " ";
        // push desserts array to summary page
    });

// hide entree form, show buttons
    $("#cancelEntree").click(function() {
        $("#newEntree").toggle();
        $("#addEntreeEntry").toggle();
        $("#addDessertEntry").toggle();
    });

    // hide dessert form, show buttons
    $("#cancelDessert").click(function() {
        $("#newDessert").toggle();
        $("#addEntreeEntry").toggle();
        $("#addDessertEntry").toggle();
    });
});
