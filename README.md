# JavaScript-Project

The inspiration for this idea came from browsing the coffee hashtag on TikTok in order to learn how to make different espresso drinks. There are users who dedicate their accounts to creating coffee favorites in the most visually aesthetic way possible. To stand out from the crowd, they add their own twist to have unique content and get the most views. I realized that there are so many ways to make the same coffee drink, and therefore I came up with “Freshly Brewed”. I wanted my application to serve as a space for fellow coffee adventurists to see the many different ways their favorite caramel iced latte is done, and offer up their version of the drink to share with others.

HOW TO USE APPLICATION: 

Run 'bundle install' and then 'rails db:seed' in your terminal to the gems and seed data for this application. Then open the index.html file and run your rails server. On initial load, a user will see a list of coffee drinks from the seed file as well as an image for that coffee drink. Click on the drink that you want to see more about, and you will be directed to that drink's show page. It will provide the name of the drink, the picture of the drink, and a variation of ingrediants for that drink. A user is then able to submit their own variation for how they make that specific drink. A user is able to enter the following: a type of roast (dark, light, decaf, etc), what kind of milk (if any, dairy or nondairy), sweetener, and espresso (if any). The page will then reload (DOM will update) to include that new submission. Thank you and enjoy! 

# README
REQUIREMENTS: 
The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

