const baseURL = "http://localhost:3000/"
const coffeesList = document.querySelector("#coffees-list")





fetch(baseURL + "coffees")
.then(res => res.json())
.then(res => console.log(res))


document.addEventListener('DOMContentLoaded', function(){
    fetch(baseURL + "coffees")
    .then(res => res.json())
    .then(coffeeData => {
        coffeeData.forEach(coffee => {
            let img = document.createElement('img');
            img.src = coffee.img_url
            img.id = `coffee-${coffee.id}`
            coffeesList.appendChild(img)
        })
    })
})


// let config = {
//     method: 'POST', 
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         roast: "Dark roast",
//         milk: "Oat milk",
//         sweetener: "Caramel Syrup",
//         espresso: "1 shot"
//     })
// }

// fetch('http://localhost:3000/coffees/1/drinks', config)
//     .then( res => res.json() )
//     .then (res => console.log(res) )



    