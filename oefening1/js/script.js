// use strict;

let recipe = {
    name: "Spaghetti Bolognese",
    description: "Speghetti met bolognesesaus",
    persons: 4,
    ingredients: [
        {name: "pasta",quantity : "400 gram",price : 0.3},
        {name: "Gehakt",quantity : "500 gram",price : 6},
        {name: "Wortelen",quantity : "5 stuks",price : 0.5},
        {name: "Courgette",quantity : "1 stuk",price : 2}
    ]
}

// totaalprijs
let totalprice = 0;
for (let i = 0; i<recipe.ingredients.length;i++){

    totalprice += recipe.ingredients[i].price;

}

console.log(totalprice);
