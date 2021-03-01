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
                covfefe.addToDom()
                console.log(covfefe)
             })
        })
    } 

    handleClick(e){
        coffeesList.style.display="none"
        coffeeShow.style.display=""
        this.addToShow()
        let coffeeId = parseInt(e.target.id.split("-")[1])
        Drink.fetchDrinks(coffeeId)
    }

    addToDom(){
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
        coffeesList.appendChild(img)
        img.addEventListener('click',(e) => this.handleClick(e))
    }
    
    addToShow(){
        let div = document.createElement('div');
        let title = document.createElement('h2');
        title.innerText = this.name
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
        div.appendChild(title)
        div.appendChild(img)
        coffeeShow.prepend(div)
    }

}