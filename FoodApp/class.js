// Initialize a class
class Food {
    constructor(name, calories){
        this._name = name;
        this._calorie = calories;
    }
    get name() {
        return this._name;
    }
    get calorie() {
        return this._calorie;
    }
    set name(newName) {
        this._name = newName;
    }
    set calorie(newCalorie) {
        this._calorie = newCalorie;
    }
}
// Create a new class from the parent
class Entree extends Food {
    constructor(name, calories, protein) {
        // Chain constructor with super
        super(name, calories);
        // Add a new property
        this._protein = protein;
    }

    get protein() {
        return this._protein;
    }
    set protein(newProtein) {
        this._protein = newProtein;
    }
}
// Create a new class from the parent
class Dessert extends Food {
    constructor(name, calories, dairyFree, glutenFree) {
        // Chain constructor with super
        super(name, calories);
        // Add new properties
        this._dairyFree = dairyFree;
        this._glutenFree = glutenFree;
    }

    get dairyFree() {
        return this._dairyFree;
    }
    get glutenFree() {
        return this._glutenFree;
    }
    set dairyFree(newDairyFree) {
        this._dairyFree = newDairyFree;
    }
    set glutenFree(newGlutenFree) {
        this._glutenFree = newGlutenFree;
    }
}

// Entree array
var entree1 = new Entree("Steak", 679, "Beef");
var entree2 = new Entree("Bratwurst", 196, "Pork");
var entree3 = new Entree("Meatloaf", 149, "Beef and Pork");
var entree4 = new Entree("Turkey Leg", 192, "Poultry");
var entree5 = new Entree("Chicken Breast", 231, "Poultry");


var entrees = [];

entrees.push(entree1);
entrees.push(entree2);
entrees.push(entree3);
entrees.push(entree4);
entrees.push(entree5);

//entrees.forEach(function (entrees) {
    //console.log(entrees);
//});

//Dessert array
var dessert1 = new Dessert("Brownie", 132, true, false);
var dessert2 = new Dessert("Ice Cream", 137, false, true);
var dessert3 = new Dessert("Apple Pie", 67, true, false);
var dessert4 = new Dessert("Chocolate Chip Cookie", 78, true, true);
var dessert5 = new Dessert("Slice of Yellow Cake, with Vanilla Frosting", 106, false, false);

var desserts = [];

desserts.push(dessert1);
desserts.push(dessert2);
desserts.push(dessert3);
desserts.push(dessert4);
desserts.push(dessert5);

//desserts.forEach(function (desserts) {
    //console.log(desserts);
    //});
