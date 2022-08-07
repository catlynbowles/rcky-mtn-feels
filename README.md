# Rocky Mountain Vibes

<img width="1437" alt="Screen Shot 2022-08-05 at 2 33 56 PM" src="https://user-images.githubusercontent.com/98493391/183158557-1efc4309-44fe-417c-b1c4-7de195fdfdb4.png">

<img width="1385" alt="Screen Shot 2022-08-05 at 3 09 09 PM" src="https://user-images.githubusercontent.com/98493391/183190784-f345c942-fb6c-4049-8d1c-f47c1b174ad3.png">

## Deploy:
- [Deployed Link](https://rcky-vibes.herokuapp.com/)

## Table of Contents
- [Introduction](#introduction)
- [Set Up](#set-up)
- [Features](#features)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Technologies](#technologies)
- [Contributor](#contributors)
- [Project Specifications](#project-specifications)
- 
### Introduction
This is an application to display the most up-to-date content regarding emotional states in the MST time zone and the world. Calculated from the We Feel API, which stores data regarding user tweets in different time zones. 

https://user-images.githubusercontent.com/98493391/183189810-3d142886-187e-4bf1-b5f0-0037536e94ee.mov

### Set Up
1. Clone this repository.
2. `cd` into the directory.
3. Run `npm install`.
4. Start the server by running `npm start` and view at http://localhost:3000/.

### Run Tests 
1. Install cypress with `npm install cypress --save-dev`
2. Run cypress with `npx cypress open`
3. Open in Chrome browser. 
4. Click on different specs to view tests in real time. 

### Features
- Displays seven primary emotions for the user to select.
- User can select their current emotional state and view statistics of others feeling this way in the MST time zone and the world.
- User can close detail window and go back to the landing page. 

### Future Features
- Add playlists recommended to user based on emotional selection.
- Find colors associated with each emotion to display upon selection.
- Each time a user selects an emotion, post to another api to keep track of current selections happening on the site. 

### Reflection
During this project I developed a stronger understanding of using React to generate user friendly applications while implementing Cypress, Router and CSS to display concepts that I find interesting. Researching APIs, I also learned how to navigate finding keys, using API parameters, and have a stronger conceptual understanding of how to select an API for a project.

### Technologies
- React
- Router
- JavaScript
- HTML
- JSX
- CSS
- API Fetch
- Cypress
- Heroku

### Contributors
- [Catlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).
