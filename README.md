Vehicle Tracking App Documentation ------>


Welcome to the documentation for the Vehicle Tracking App! This document provides an overview of the app's components, styles, features, and functionality. Follow the steps below to understand and use the app effectively.

Table of Contents -->
1- Introduction
2- Getting Started
3- Components
4- FormComponent
5- LoginScreen
6- MapComponent
7- SignUpScreen
8- Styling
FormComponent Styles
LoginScreen Styles
MapComponent Styles
SignUpScreen Styles
Global Styles
9- Authentication
10- AuthService
11- Location Tracking
12- LocationTracker
13- App Structure
14- Conclusion



Introduction
The Vehicle Tracking App is designed to help users track their vehicles in real time. The app includes features such as user authentication, vehicle details management, live location tracking, and more. It uses React for the front-end interface and makes API requests to interact with the backend server.

Getting Started
To get started with the Vehicle Tracking App, follow these steps:

Clone the repository to your local machine.
Open a terminal window and navigate to the project directory.
Run the following command to install the required dependencies:
bash
Copy code
npm install
Once the installation is complete, run the following command to start the app:
bash
Copy code
npm start
The app will open in your default web browser, and you can start exploring its features.

Components
FormComponent
The FormComponent is responsible for allowing users to input and save vehicle details such as the plate number and device name.

Usage
Import the FormComponent into your component:
jsx
Copy code
import FormComponent from './FormComponent';
Add the FormComponent to your JSX code:
jsx
Copy code
<FormComponent onSave={handleSave} />
Implement the handleSave function to handle the saved data.
LoginScreen
The LoginScreen component provides a user login form for authentication.

Usage
Import the LoginScreen component:
jsx
Copy code
import LoginScreen from './LoginScreen';
Add the LoginScreen component to your JSX code:
jsx
Copy code
<LoginScreen onLogin={handleLogin} />
Implement the handleLogin function to manage user login.
MapComponent
The MapComponent displays a map with a custom marker at the specified latitude and longitude.

Usage
Import the MapComponent:
jsx
Copy code
import MapComponent from './MapComponent';
Include the MapComponent in your JSX code:
jsx
Copy code
<MapComponent latitude={26.2124} longitude={78.1772} />
Adjust the latitude and longitude props as needed.
SignUpScreen
The SignUpScreen component allows users to sign up by providing their personal information.

Usage
Import the SignUpScreen component:
jsx
Copy code
import SignUpScreen from './SignUpScreen';
Include the SignUpScreen component in your JSX code:
jsx
Copy code
<SignUpScreen onSignUp={handleSignUp} />
Implement the handleSignUp function to handle user sign-up.
Styling
FormComponent Styles
The FormComponent styles are defined in the FormComponent.css file.

LoginScreen Styles
The LoginScreen styles are defined in the LoginScreen.css file.

MapComponent Styles
The MapComponent styles are defined in the MapComponent.css file.

SignUpScreen Styles
The SignUpScreen styles are defined in the SignUpScreen.css file.

Global Styles
Global styles for the app are defined in the App.css file. This includes styles for the header, main content, buttons, and more.

Authentication
AuthService
The AuthService module provides functions for user authentication and managing authorization headers for API requests.

Usage
Import AuthService:
jsx
Copy code
import AuthService from './AuthService';
Authenticate the user using the login function:
jsx
Copy code
const response = await AuthService.login(email, password);
Set the authorization header using the setAuthorizationHeader function:
jsx
Copy code
AuthService.setAuthorizationHeader(token);
Check if the user is authenticated:
jsx
Copy code
const isAuthenticated = AuthService.isAuthenticated();
Location Tracking
LocationTracker
The LocationTracker component displays the user's current latitude and longitude for location tracking.

Usage
Import the LocationTracker component:
jsx
Copy code
import LocationTracker from './LocationTracker';
Include the LocationTracker component in your JSX code:
jsx
Copy code
<LocationTracker />
App Structure
The app's structure is defined in the App.js file. It includes the main layout, routing, and conditional rendering of components based on authentication and sign-up status.

Conclusion
Congratulations! You have successfully learned about the components, styles, features, and functionality of the Vehicle Tracking App. You can now use the app to track vehicles, manage user authentication, and display live location information.

If you have any questions or need further assistance, please refer to the documentation or reach out to our support team.

Happy tracking!
