# Workout Buddy

## Description
Workout buddy is a web application that allows users to create and save workouts to reference late.
Users can login using their email and password, or create a new account. Once logged in, users can create new workouts, view their saved workouts, and delete workouts they no longer need.
The workouts contain a name, reps, and weights. The workouts are saved to a database and can be viewed by the user at any time.

## Instructions 
To use the application just click [here](https://workout-buddy-webapp.netlify.app/). You can create a new account or login with the following credentials:
```
email: example@mail.com
password: password123
```
To create a workout just fill in the details at the right side of the page and click on create

## Frontend Technologies Used
The frontend is made using React and React Router. The webapp is using the React Context API to manage state. The frontend is styled using custom CSS. The frontend is deployed using Netlify.

## Backend Technologies Used
The backend is made using Node.js and Express. The database is a MongoDB database hosted on MongoDB Atlas. Authentication is done using JWT authentication, and the passwords are hashed using the bcrypt package. The backend is deployed using Render.