const baseURL = "http://localhost:3000/"
const coffeesList = document.querySelector("#coffees-list")
const coffeeShow = document.querySelector("#coffee-show")
const inputSearch = document.querySelector("#search")

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
             })
        })
    } 

    handleClick(e){
        coffeesList.style.display="none"
        coffeeShow.style.display="block"
        this.addToShow()
        let coffeeId = parseInt(e.target.id.split("-")[1])
        Drink.fetchDrinks(coffeeId)
    }

    addToDom(){
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
        img.className = 'coffee-size'
        coffeesList.appendChild(img)
        img.addEventListener('click',(e) => this.handleClick(e))
    }
    
    addToShow(){
        // let div = document.createElement('div');
        let div = document.querySelector('#drinks-list');
        let title = document.createElement('h2');
        title.innerText = this.name
        let img = document.createElement('img');
        img.src = this.img_url
        img.id = `coffee-${this.id}`
        div.appendChild(title)
        div.appendChild(img)
        coffeeShow.prepend(div)
        let input = document.createElement('input')
        input.type="hidden"
        input.value= this.id
        input.id= "coffee_id"
        coffeeForm.prepend(input)
    }

    static listenforKeyDown() {
        inputSearch.addEventListener('keydown', this.inputFilter)
    }
    static inputFilter() {
        const text = document.querySelector('#search').value 
        const filtered = Coffee.all.filter(coffee => coffee.name.includes(text))
        //when event is detected, recognize what input is and filter through Coffee.all
        //present relevant Coffee.all
        //hide everything else 
        //display only capp (ex.)
        document.querySelector("#coffees-list").innerHTML = ""
       filtered.forEach(coffee => coffee.addToDom())
       

        
    }    

}

// static goBack() {
//     document.querySelector("#drinks-list").innerHTML = " "
//     document.querySelector("#coffee-show").style.display = "none"
//     document.querySelector("#coffees-list").style.display = "block"


