## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/) 
## Execute this App in Development Mode = Setup Instructions
In the directory where you installed this package /pathname.../react-hotel-master 
and with a terminal app:
* Run `npm install` 
* Run `npm start`   
## (npm start is used as we have not created client / server app, just client for now)
* After running `npm start` you should see this or similar:
## Compiled successfully!
## You can now view the hotel-gui in your browser at  http://localhost:3000 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
## Overview of Design Decisions

Overall I wanted this app to be reliable and intuitive. I kept this in mind as I started the development process which affected several design decisions. Below are some examples of design decisions that were made in the direction of this overarching design.
- add simple css like like background color and cursor on hover to indicate to the user what can be clicked as well as what has already been selected.
- Less is better. Be careful not to get too overzealous in early development. I believe that with a smaller app like this the only elements that should be on the DOM are those that need to be there, to avoid possible points of user confusion.
- Hide certain DOM elements until the user has progressed up to a certain point through the funnel to send a message. I felt like this may have helped a bit with guiding a user through the process to send a message.

## Language Selection
For this app I decided to develop in javascript with a React framework. One of the main reasons for this decision was that I really enjoy React but have not always had opportunities lately to work in it. This added on to development time although there was the side benefit of getting my React profficiency back up a bit. Because this is not a full stack app I did not have to pick a server side language or database for this project. Javascript within a React framework ended up working pretty well although if I were to do another project like this I would probably write a simple node script (Node JS) in favor of decreasing development time.

## Quality Assurance Measures
Through the development process I always try to have best practice in mind for formatting, naming conventions, error handling etc. Two specific examples of the above would be making sure that all of my functions have a .catch() along with running conditional checks on certain variables to avoid using a variable or object property that may not be truthy. Once the bulk of development is finished I finish out my personal QA with many manual sessions making sure to try every combination of user inputs that I am able to think of.

## Stretch Goals
Below is a list of stretch goals that I was not able to get to in the first round of development. 

1. Create a database and link it to the app. There is currently no database for this app which means that all data inputed by or specific to the user is lost after each session. This would be the next step if I were to continue working on this app to make it more production ready.

2. Build out the server side of the app once we have a database from the prior task.

3. Add styling to both improve looks and account for handling more hotel and reservation data in production. ie. make the hotels and reservations tables a set height and enable scroll.
    i. Create a css file for each component and transfer css rules from app.css to more specific file. This would help keep things clean as well as making teamwork and collaboration easier for future projects.

4. Find a more elagant solution for inserting our javascript variables into the .json templates or refactor.

5. Build integration for texting and/or mailing api's. The DOM alert that is displayed on send message button click is obviously just proof of concept. We would need to create these integrations to actually get our customized message to the customer.

6. Add functionality that would allow users to select the hotel and reservation via search. Another update that would help with scalability as our app starts to work with more hotel and reservation data.
