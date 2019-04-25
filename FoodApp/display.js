$(function() {
    var inspecting = false;

    $("#allItems").change(function () {
        if (this.checked) {
            document.getElementById("displayFood").innerHTML = "";
            // uncheck all other boxes
            var checkboxes = $('.displayOptions');
            for (var i = 0; i < checkboxes.length; i++){
                if (this != checkboxes[i]){
                    checkboxes[i].checked = false;
                }
            }
            //Display all items
            for (i=0; i<entrees.length; i++) {
                document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + entrees[i]._name + "<br> <b>Calories: </b>" + entrees[i]._calorie + "<br> <b>Protein: </b>" + entrees[i]._protein + "<br> <br>");
            }
            for (i=0; i<desserts.length; i++) {
                document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + desserts[i]._name + "<br> <b>Calories: </b>" + desserts[i]._calorie + "<br> <b>Dairy Free: </b>" + desserts[i]._dairyFree + "<br> <b>Gluten Free: </b>" + desserts[i]._glutenFree + "<br> <br>");
            }
        } else {
            document.getElementById("displayFood").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });
    $("#allEntrees").change(function () {
        if (this.checked) {
            //Display all entrees
            for (i=0; i<entrees.length; i++) {
                document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + entrees[i]._name + "<br> <b>Calories: </b>" + entrees[i]._calorie + "<br> <b>Protein: </b>" + entrees[i]._protein + "<br> <br>");
            }
        } else {
            document.getElementById("displayFood").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });
    $("#allDesserts").change(function () {
        if (this.checked) {
            //Display all desserts
            for (i=0; i<desserts.length; i++) {
                document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + desserts[i]._name + "<br> <b>Calories: </b>" + desserts[i]._calorie + "<br> <b>Dairy Free: </b>" + desserts[i]._dairyFree + "<br> <b>Gluten Free: </b>" + desserts[i]._glutenFree + "<br> <br>");
            }
        } else {
            document.getElementById("displayFood").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });

    $("#allDairyFree").change(function () {
        if (this.checked) {
            //Display all dairy free desserts
            for (i=0; i<desserts.length; i++) {
                if (desserts[i]._dairyFree == true) {
                    document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + desserts[i]._name + "<br> <b>Calories: </b>" + desserts[i]._calorie + "<br> <b>Dairy Free: </b>" + desserts[i]._dairyFree + "<br> <b>Gluten Free: </b>" + desserts[i]._glutenFree + "<br> <br>");
                }
            }
        } else {
            document.getElementById("displayFood").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });

    $("#allGlutenFree").change(function () {
        if (this.checked) {
            //Display all gluten free desserts
            for (i=0; i<desserts.length; i++) {
                if (desserts[i]._glutenFree == true) {
                    document.getElementById("displayFood").innerHTML+=("<b>Name: </b>" + desserts[i]._name + "<br> <b>Calories: </b>" + desserts[i]._calorie + "<br> <b>Dairy Free: </b>" + desserts[i]._dairyFree + "<br> <b>Gluten Free: </b>" + desserts[i]._glutenFree + "<br> <br>");
                }
            }
        } else {
            document.getElementById("displayFood").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });

    function inspectCheckBoxes(checkbox){
        if (!inspecting){
            inspecting = true;
            if (checkbox != $('#allItems') && $('#allItems')[0].checked){
                $('#allItems').change();
            }
            if (checkbox != $('#allEntrees') && $('#allEntrees')[0].checked){
                $('#allEntrees').change();
            }
            if (checkbox != $('#allDesserts') && $('#allDesserts')[0].checked){
                $('#allDesserts').change();
            }
            if (checkbox != $('#allDairyFree') && $('#allDairyFree')[0].checked){
                $('#allDairyFree').change();
            }
            if (checkbox != $('#allGlutenFree') && $('#allGlutenFree')[0].checked){
                $('#allGlutenFree').change();
            }
            inspecting = false;
        }
    }
});
