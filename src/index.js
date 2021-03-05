document.addEventListener('DOMContentLoaded', function(){
   Coffee.fetchCoffees()
   Drink.listenForEvents()
   Drink.listenForBackBtn()
   Coffee.listenforKeyDown()
})



// let config = {
//     method: 'POST', 
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         roast: "Light roast",
//         milk: "1% Low fat milk, just a light foam on top",
//         sweetener: "None",
//         espresso: "2 shot"
//     })
// }

// fetch('http://localhost:3000/coffees/2/drinks', config)
//     .then( res => res.json() )
//     .then (res => console.log(res) )



    