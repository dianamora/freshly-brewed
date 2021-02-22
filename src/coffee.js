const baseURL = "http://localhost:3000/"
const coffeesList = document.querySelector("#coffees-list")

class Coffee {
    static all = []
    constructor({id, name, img_url}){
        this.id = id
        this.name = name
        this.img_url = img_url

        Coffee.all.push(this)
    }

    static fetchCoffees(){
        fetch(baseURL + "coffees")
        .then(res => res.json())
        .then(coffeeData => {
            coffeeData.forEach(coffee => {
                let covfefe = new Coffee(coffee)
                console.log(covfefe)
                covfefe.addToDom()
             })
        })
    } 

    static handleClick(e){
        coffeesList.style.display="none"
        let coffeeId = parseInt(e.target.id.split("-")[1])
        Drink.fetchDrinks(coffee.id)
    }

    addToDom(){
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
        coffeesList.appendChild(img)
        img.addEventListener('click', () => console.log(this))
    }
    
}