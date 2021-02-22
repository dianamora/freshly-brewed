class Drink {
    constructor({roast, milk, sweetener, espresso}){
        this.roast = roast
        this.milk = milk
        this.sweetener = sweetener
        this.espresso = espresso
    }

    static fetchDrinks(id){
        fetch(`http://localhost:3000/coffees/${id}/drinks`)
        .then(res => res.json())
        .then(drinkData => {
            let drinksList = document.querySelector("#drinks-list")
            drinkData.forEach(review => {
                let ingrediants = new Drink(drink)
            })
        })
        
    }

    addToDom(){

    }
}