

function menuButton(btn) {
    if(btn === "meals") {
        document.getElementById("mealsBtn").className = "btn-clicked";
        document.getElementById("drinksBtn").className = "";
        document.getElementById("dessertsBtn").className = "";

        document.getElementById("drinks-menu").className = "hide";
        document.getElementById("desserts-menu").className = "hide";
        document.getElementById("meals-menu").className = "show";
    } 
    else if (btn === "drinks") {
        document.getElementById("drinksBtn").className = "btn-clicked";
        document.getElementById("mealsBtn").className = "";
        document.getElementById("dessertsBtn").className = "";

        document.getElementById("meals-menu").className = "hide";
        document.getElementById("desserts-menu").className = "hide";
        document.getElementById("drinks-menu").className = "show";
    } 
    else if (btn === "desserts") {
        document.getElementById("dessertsBtn").className = "btn-clicked";
        document.getElementById("mealsBtn").className = "";
        document.getElementById("drinksBtn").className = "";

        document.getElementById("meals-menu").className = "hide";
        document.getElementById("drinks-menu").className = "hide";
        document.getElementById("desserts-menu").className = "show";
    }
}