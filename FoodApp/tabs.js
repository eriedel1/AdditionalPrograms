function openTab(evt, tabName) {
    // Declare all variables
    var i;
    var tabcontent;
    var  tablinks;
    var listCheckboxes = document.getElementsByClassName("displayOptions");
    var summaryCheckboxes = document.getElementsByClassName("displayResults")

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    for (i = 0; i < listCheckboxes.length; i++) {
        listCheckboxes[i].checked = false;
    }
    for (i = 0; i < summaryCheckboxes.length; i++) {
        summaryCheckboxes[i].checked = false;
    }

    document.getElementById("displayFood").innerHTML = "";
    document.getElementById("displaySummary").innerHTML = "";
}
