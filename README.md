# HoldMe 

## Project Walk-through Video
Click [here](https://images.pexels.com/photos/1251247/pexels-photo-1251247.jpeg?auto=compress&cs=tinysrgb&w=400) to view

## Backend
Click [here](https://github.com/Presho99/dating-app-backend) to view Sinatra backend

## Introduction
HoldMe is a dating application that takes in the user's details and randomly pairs him or her with a potential match depending on the user's gender. The application contains a signup/signin page, a dashboard, and a final page that contains the entire list of all other people the user could match with. HoldMe is created using React, CSS, and Ruby. It is fully responsive as all pages have been styled using either grid or flexbox.

## Pages

### Signin/Signup Page
![Screenshot from 2022-09-15 07-14-19](https://user-images.githubusercontent.com/73560150/190312964-560c4f2b-f92b-4403-a1c6-d9dc202a6f88.png)

The signin page is the home page. It takes in the user's name and password then redirects them to the dashboard.


![Screenshot from 2022-09-15 07-21-09](https://user-images.githubusercontent.com/73560150/190313717-2a9ea907-bd42-4aad-b614-673ad63ce6d8.png)
The signup page also takes in a couple of the user's details and saves them to the database. The user is then redirected to the dashboard upon signing up successfully.

### Dashboard

![Screenshot from 2022-09-15 07-42-00](https://user-images.githubusercontent.com/73560150/190316301-89a51571-257e-4fc6-8599-5f37062fdda3.png)

The Dashboard contains a header and uses grid styling for the 5 sections inside it.
 #### Grid 1
 * Displays the user's profile: profile picture, name, field of work, gender, city, a link to the main matches page, and the user's bio.
 * It also contains a log out button which when clicked will redirect the user to the signin page.
 
 #### Grid 2
 * Contains the images of the user's default matches.
 * The images in this grid all have an "x" icon that allows the user to delete a match

 #### Grid 3
 * Contains notifications of the different people the user has matched with.
 * Each notification show's the match's profile picture, name, and how long ago the match happened.
 
 #### Grid 4
 * contains a progress icon that shows whether the user's profile is complete.

 #### Grid 5
 * Displays a different quote everytime the app is reloaded.
 
 The dashboard also uses media queries for responsivity.
 ![Screenshot from 2022-09-15 08-15-01](https://user-images.githubusercontent.com/73560150/190320565-75c8e0da-8fa5-4dba-90c0-8631b3d67658.png)
 
 ### Matches Page
 
![Screenshot from 2022-09-15 08-21-20](https://user-images.githubusercontent.com/73560150/190321094-3dc2020d-f389-4719-8065-c8abc3f2a04a.png)
![Screenshot from 2022-09-15 08-21-41](https://user-images.githubusercontent.com/73560150/190321114-56948462-8403-4aa8-ae33-3e9a197703d4.png)

* Contains all the user's potential matches
* Displays a potential match's name, field of work and image.
* Every match has a plus sign right next to their name which a user can click on to add a match to their dashboard.
* Upon clicking the plus sign, an alert pops up on the screen showing the percentage match between the user and the match.
This page uses flexbox for responsivity.




 
