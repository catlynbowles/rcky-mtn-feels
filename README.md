# Rocky Mountain Vibes

<img width="1425" alt="Screen Shot 2022-09-08 at 4 23 10 PM" src="https://user-images.githubusercontent.com/98493391/189236429-b09cf3ee-1e01-4ecb-847b-0e6fe9a348dd.png">

<img width="1433" alt="Screen Shot 2022-09-08 at 4 23 18 PM" src="https://user-images.githubusercontent.com/98493391/189236438-bb888193-1741-4777-976d-b231f4e32f5d.png">

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

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/98493391/189238221-70d6e094-f051-4c1b-951b-5e426a03a924.gif)



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
- Using local storage, user can save current emotional states. 
- Fully tabbable sites
- Mobile responsive design

### Future Features
- Add playlists recommended to user based on emotional selection.
- Find colors associated with each emotion to display upon selection.

### Reflection
During this project I developed a stronger understanding of using React to generate user friendly applications while implementing Cypress, Router and CSS to display concepts that I find interesting. Researching APIs, I also learned how to navigate finding keys, using API parameters, and have a stronger conceptual understanding of how to select an API for a project.

### Technologies
- React
- Router
- JavaScript
- HTML
- JSX
- SASS
- Local Storage
- API Fetch
- Cypress
- Heroku

### Contributors
- [Catlyn Bowles](https://www.linkedin.com/in/catlyn-bowles/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).
