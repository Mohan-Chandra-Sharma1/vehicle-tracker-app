# Vehicle Tracking App Documentation

Welcome to the documentation for the Vehicle Tracking App! This document provides an overview of the app's components, styles, features, and functionality. Follow the steps below to understand and use the app effectively.

### Belowe we Mentioned Some Images of Application for your Reference.



![Screenshot_20230827_115935](https://github.com/Mohan-Chandra-Sharma1/vehicle-tracker-app/assets/120721761/3f815575-f445-4498-89ac-b50ba5f58d25)





![Screenshot_20230827_120022](https://github.com/Mohan-Chandra-Sharma1/vehicle-tracker-app/assets/120721761/ccf689c3-7271-4413-9e77-f68efe9d153c)







![Screenshot_20230827_120051](https://github.com/Mohan-Chandra-Sharma1/vehicle-tracker-app/assets/120721761/ad357b0a-0303-45b6-80fb-6ca323b89322)








![Screenshot_20230827_115903](https://github.com/Mohan-Chandra-Sharma1/vehicle-tracker-app/assets/120721761/b834ee71-5c49-4f41-b0e0-eacd510dda7c)









## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Components](#components)
   - [FormComponent](#formcomponent)
   - [LoginScreen](#loginscreen)
   - [MapComponent](#mapcomponent)
   - [SignUpScreen](#signupscreen)
4. [Styling](#styling)
   - [FormComponent Styles](#formcomponent-styles)
   - [LoginScreen Styles](#loginscreen-styles)
   - [MapComponent Styles](#mapcomponent-styles)
   - [SignUpScreen Styles](#signupscreen-styles)
   - [Global Styles](#global-styles)
5. [Authentication](#authentication)
   - [AuthService](#authservice)
6. [Location Tracking](#location-tracking)
   - [LocationTracker](#locationtracker)
7. [App Structure](#app-structure)
8. [Conclusion](#conclusion)

## Introduction

The Vehicle Tracking App is designed to help users track their vehicles in real time. The app includes features such as user authentication, vehicle details management, live location tracking, and more. It uses React for the front-end interface and makes API requests to interact with the backend server.

## Getting Started

To get started with the Vehicle Tracking App, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Run the following command to install the required dependencies:



## App Structure

The app's structure is defined in the `App.js` file. It includes the main layout, routing, and conditional rendering of components based on authentication and sign-up status.


### Explanation

- `src/`: This directory contains the main source code of the app.

  - `components/`: Contains the various React components used in the app.

    - `LocationTracker.js`: Component responsible for displaying the user's location information.
    - `MapComponent.js`: Component for rendering the map and user location marker.
    - `FormComponent.js`: Component that allows users to input and save vehicle details.
    - `LoginScreen1.js`: Component providing a login form for users to authenticate.
    - `SignUpScreen.js`: Component for user registration and sign-up form.

  - `services/`: Contains service modules used for app functionality.

    - `AuthService.js`: Module handling authentication-related tasks, such as login, logout, and checking authentication status.

  - `App.js`: The main component of the app that orchestrates the rendering of other components.

  - `App.css`: CSS styles specific to the App component.

  - `index.js`: The entry point of the app where ReactDOM renders the main App component.

- `package.json`: Configuration file for the app's dependencies, scripts, and metadata.

This structured organization of the app's files helps maintain clarity and modularity in development. Components are grouped by their functionality, and services are separated for easier management and testing.





## Components

The Vehicle Tracking App is composed of several React components that work together to provide its functionality. Here's an overview of each component:

### FormComponent

The `FormComponent` is responsible for rendering a form that allows users to input vehicle details such as the plate number and device name. It communicates with the parent component to save the entered data.

### LoginScreen

The `LoginScreen` component provides a login form where users can enter their email and password to authenticate themselves. It uses the `AuthService` to handle the authentication process and display error messages if needed.

### SignUpScreen

The `SignUpScreen` component offers a sign-up form that collects user information such as name, email, phone, gender, city, state, and password. It communicates with the parent component to trigger the sign-up process.

### MapComponent

The `MapComponent` displays a map using the Leaflet library and places a custom marker icon at a specified latitude and longitude. It's used to visualize the current vehicle's location on a map.

### LocationTracker

The `LocationTracker` component simulates tracking by displaying the current latitude and longitude. It communicates with the server to save and retrieve location data for authenticated users.

### AuthService

The `AuthService` module handles user authentication and token management. It includes functions for login, logout, checking authentication status, and setting authorization headers for API requests.




## Authentication

The Vehicle Tracking App includes a simple authentication system using JWT (JSON Web Tokens). This section provides an overview of how authentication is implemented in the app.

### AuthService

The `AuthService` module encapsulates authentication-related functions and interactions with the backend API. It offers the following methods:

- `isAuthenticated()`: Checks if the user is authenticated by verifying the presence of a valid JWT token.

- `login(email, password)`: Sends a POST request to the server with user credentials for authentication. If successful, the user is logged in.

- `logout()`: Logs out the user by removing the JWT token from local storage and clearing authorization headers.

- `setAuthorizationHeader(token)`: Sets the `Authorization` header for Axios requests using the provided token.

### LoginScreen

The `LoginScreen` component provides a login form where users can enter their email and password to authenticate. It uses the `AuthService` to handle the login process and displays error messages if login fails.

### SignUpScreen

The `SignUpScreen` component allows users to sign up by filling out a form with their personal information. It communicates with the parent component to trigger the sign-up process.



## Conclusion

Congratulations! You have successfully learned about the components, styles, features, and functionality of the Vehicle Tracking App. You can now use the app to track vehicles, manage user authentication, and display live location information.

If you have any questions or need further assistance, please refer to the documentation or reach out to our support team.

Happy tracking!
