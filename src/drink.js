const newCoffee = document.querySelector("#new-coffee")
const coffeeForm = document.querySelector('#coffee-form')

class Drink {
    constructor({id, roast, milk, sweetener, espresso}){
        this.roast = roast
        this.milk = milk
        this.sweetener = sweetener
        this.espresso = espresso

        this.element = document.createElement("div")
        this.element.id = `drink-${id}`
        this.drinksList = document.querySelector("#drinks-list")
    }

    static fetchDrinks(id){
        fetch(`http://localhost:3000/coffees/${id}/drinks`)
        .then(res => res.json())
        .then(drinkData => {
            drinkData.forEach(drink => {
                let ingrediants = new Drink(drink)
                ingrediants.addToDom()
            })
        })
        
    }

    static createDrink(e){
        e.preventDefault()
        let roast = document.querySelector("#roast").value
        let milk = document.querySelector("#milk").value
        let sweetener = document.querySelector("#sweetener").value
        let espresso = document.querySelector("#espresso").value
        debugger;
    }

    static listenForEvents() {
        newCoffee.addEventListener('click', this.showForm)
        coffeeForm.addEventListener('submit', (e) => Drink.createDrink)
    }

    static showForm() {
        newCoffee.style.display="none"
        coffeeForm.style.display=""
    }


    addToDom(){
        this.drinksList.appendChild(this.setElementHTML())
    }
    
    setElementHTML(){
        this.element.innerHTML = `
        <h2>Coffee Ingrediants</h2>
        <p>${this.roast}</p>
        <p>${this.milk}</p>
        <p>${this.sweetener}</p>
        <p>${this.espresso}</p>
        `
        return this.element
    }
}