# JavaScript-Project

# README
REQUIREMENTS: 
The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JAVASCRIPT PROJECT: FRESHLY BREWED

Model COFFEE
•   -Has many “drinks” (2nd model drink)

Model DRINK
•   -Belongs to a "coffee" 
•   -Attributes: Name and Image

o   -loading up: welcome to Freshly Brewed

   -will only send across attribute of drink name and an image
   

WHAT THE PROGRAM DOES
-When a user loads the webpage, they see a list of coffee drinks with images. 
-User can click on the coffee image to see that specific drink's recipe (or on version of it)
-User can submit a recipe for how they make that specific drink (type of dairy can vary, sugar, toppings, etc)

AJAX/FETCH REQUESTS
•       -reading categories initially (1st request) 
          o -Load all drinks/show page read 1st fetch request just get :id’s (reading all drinks)
-       if you click on a picture of a specific drink,  the user will be taken to a page that will have more information on the drink (ingredients for example) 2nd request via instance variable 
-make coffee drinks? Create 3nd fetch request(form)
^^^^^^^^^
-on initial page load, GET REQUEST is made to get all the coffee drinks
-GET FETCH REQUEST will be made to get all the recipe info 
-POST FETCH REQUEST to create a new recipe for the drink

SCHEMA/DATABASE
-Coffee Model
    - has many drinks
    - name
    - image url
-Recipe Model 
    - belongs to Coffee 
    - roast 
    - milk
    - sweetener
    - espresso 

STEPS: 
-set up database
    -generate tables for coffee and recipe
-configure controllers
    -coffee controller
        *index action
    -recipe controller
        *index (nested for specific coffee)
        *create
