$(function() {

    var inspecting = false;

    $("#entreeSummary").change(function () {
        if (this.checked) {
            var totalCaloriesEntree = 0;
            //Display entree summary
            for (i=0; i<entrees.length; i++) {
                (totalCaloriesEntree += parseInt(entrees[i]._calorie));
            }
            document.getElementById("displaySummary").innerHTML+=("<b>Total Entrees:</b> " + entrees.length + "<br> <br>" + "<b>Total Calories:</b> " + totalCaloriesEntree + "<br> <br>" + "<b>Average Calories:</b> " + (totalCaloriesEntree/entrees.length) + "<br> <br>");
        } else {
            document.getElementById("displaySummary").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });

    $("#dessertSummary").change(function () {
        if (this.checked) {
            var totalCaloriesDessert = 0;
            //Display dessert summary
            for (i=0; i<desserts.length; i++) {
                (totalCaloriesDessert += parseInt(desserts[i]._calorie));
            }
            document.getElementById("displaySummary").innerHTML+=("<b>Total Desserts:</b> " + desserts.length + "<br> <br>" + "<b>Total Calories:</b> " + totalCaloriesDessert + "<br> <br>" + "<b>Average Calories:</b> " + (totalCaloriesDessert/desserts.length) + "<br> <br>");
        } else {
            document.getElementById("displaySummary").innerHTML = "";
            inspectCheckBoxes(this);
        }
    });
    function inspectCheckBoxes(checkbox) {
        if(!inspecting) {
            inspecting = true;
            if (checkbox != $('#entreeSummary') && $('#entreeSummary')[0].checked) {
                $('#entreeSummary').change();
            }
            if (checkbox != $('#dessertSummary') && $('#dessertSummary')[0].checked) {
                $('#dessertSummary').change();
            }
            inspecting = false;
        }
    }
});

