const baseURL = "http://localhost:3000/"
const coffeesList = document.querySelector("#coffees-list")
const coffeeShow = document.querySelector("#coffee-show")

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
                covfefe.addToDom(coffeesList)
                console.log(covfefe)
             })
        })
    } 

    static handleClick(e){
        coffeesList.style.display="none"
        coffeeShow.style.display=""

        let coffeeId = parseInt(e.target.id.split("-")[1])
        Drink.fetchDrinks(coffeeId)
    }

    addToDom(node){
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
       node.appendChild(img)
        img.addEventListener('click', (e) => this.handleClick(e))
    }
    
}