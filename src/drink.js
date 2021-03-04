const newCoffee = document.querySelector("#new-coffee")
const coffeeForm = document.querySelector('#coffee-form')
const backbutton = document.querySelector('#backbutton')

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

    static createDrink(e) {
        e.preventDefault()
        let roast = document.querySelector("#roast").value
        let milk = document.querySelector("#milk").value
        let sweetener = document.querySelector("#sweetener").value
        let espresso = document.querySelector("#espresso").value
        let coffeeId = document.querySelector("#coffee_id").value

        coffeeForm.reset() 
        let drinkObj = {
            roast, milk, sweetener, espresso
        }

        let config = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json', 
            }, 
            body: JSON.stringify(drinkObj)
        }

        fetch(`http://localhost:3000/coffees/${coffeeId}/drinks`, config)
        .then(res => res.json())
        .then(res => {
            let d = new Drink(res)
            d.addToDom()
            newCoffee.style.display="block"
            coffeeForm.style.display="none"
        })
    }

    static listenForEvents() {
        newCoffee.addEventListener('click', this.showForm)
        coffeeForm.addEventListener('submit', (e) => Drink.createDrink(e))
    }

    static showForm() {
        newCoffee.style.display="none"
        coffeeForm.style.display="block"
    }

    static listenForBackBtn() {
        backbutton.addEventListener('click', this.goBack)
        
    }
    static goBack() {
        // backbutton.style.display="none"
        // document.querySelector("#coffee-show").innerHTML = " "
        document.querySelector("#drinks-list").innerHTML = " "
        // document.querySelector("#coffee-form").innerHTML = " "
        // document.querySelector("#new-coffee").remove = " "
        document.querySelector("#coffee-show").style.display = "none"
        document.querySelector("#coffees-list").style.display = "block"



        
        //back button is clicked
        //user is taken to the initial page upload which loads all the coffees 
        //will have to remove instance of drink on page (individual id)(check)
        //will have to add all instances of coffees (id, name, and img_url)
        //the back button has to disappear after (check)
        //
        //COMPLETE BUTTON CHALLENGE: both buttons (back and new) should not be seen on
        // the main page until we actuallyu click something, and then we want to see them
        // when we click something and when we click back we want them to disappear again. handling styles (try hidden field/hide). add 5 coffees back WITHOUT fetching them (hint: try accessing Coffee.all). 
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