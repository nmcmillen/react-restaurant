Restaurant Name: Gusto

## Overview
You've been asked to design a menu website for a new restaurant opening at 348 E Main St, Lexington, KY. The owners are busy working on their recipes and haven't picked a name yet, so they've asked you to suggest one and use it in your design.

The owners are still working on their recipes. They've populated an API with many possible choices. You are to use the API to generate a sample menu to add to your website. The API URL is: https://sheltered-refuge-85246.herokuapp.com/api/json

## Goals
1. Generate the restaurant's name, address, and hours of operation
2. Fetch data using Axios from the API https://sheltered-refuge-85246.herokuapp.com/api/json
3. Create a dynamic menu
    - Choose a specific menu selection to display
    - Dynamically render at least 15 items
    - Display them in sections as an organism such as accordion, nav tab, etc.
    - Each item to be a molecule (ex: bootstrap card or list item with pic, name, price, etc.)
4. Be able to manage React component state
5. Website must be responsive and styled

### Stretch Goals
(Insert at later point once initial is finished)

## Page Outline
1. App.js
    - Use this page to create the initial navbar, hero and button as a single element
    - Menu page pull in from menu designs
        - Navbar for apps, mains, desserts
        - When a link on navbar is clicked, upload that information to the page and clear the previous information
    - Footer area to pull in from footer design

2. Menu.js
    A. Appetizers.js
        - Build to get data from the API and hold the appetizer info to display on the main page
        - Displays the dish name, price, and description in a 2 column table

    B. MainDish.js
        - Build to get the data from the API and hold the main dishes info to display on the main page
        - Displays the dish name, price, and description in a 2 column table

    C. Dessert.js
        - Build to get data from the API and hold the dessert info to display on main page
        - Displays the dish name, price, and description in a 2 column table

3. Footer.js
    - Build out with text information on the left side.
    - To include hours, address, email, phone number, and social links
    - Right side includes the google map location (screenshot for now)



## How to start new open port
npx create-react-app my-app
cd my-app
npm start