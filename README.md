# Travel Sense

A travel agency application where a user can check for available hotels and flights. It features a login/register functionality with an admin dashboard.

## Tech Stack

<h3> HTML5 </h3> 
<h3> CSS3 </h3>
<h3> Javascript </h3>
<h3> React.js </h3>
<h3> Framer Motion(React.js animation library) </h3>
<h3> Redux </h3>

## Installation and Setup Instructions

Clone down this repository. You will need `xammp` local server and `node`,`npm` installed globally on your machine.  

Installation:

### Setting up the local server
Inside the xammp htdocs folder make a folder called `travel_agency_backend` and insert the folders that are located inside `backend` into that folder, change the localhost port to `8066` and start the `Apache` and `MySQL` modules inside the xammp control panel.

To visit the local server:

`localhost:8066/`
### Setting up the database
Go into your xammp `phpmyadmin`(http://localhost:8066/phpmyadmin/) and create a database called `travel_agency` and run the sql query thats inside the database folder in that database.

### Setting up the client server
Open a terminal(command prompt) and go inside the frontend folder and run the following command to start up the client server:
`npm start`

Make sure to have this chrome extension enabled `https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc`

To run test suite(optional):  

`npm test`  

To visit app locally:

`localhost:3000/`

To visit app remotely:

`https://edon-travel.netlify.app/`

# Project Screen Shots

<img src= "https://user-images.githubusercontent.com/74024519/163720602-13be0571-035d-4cfa-b2bf-9f4b7566bbe5.PNG" alt="home-page" width = "750" />
<img src= "https://user-images.githubusercontent.com/74024519/163720644-0c1d888e-9a65-447a-8d6c-e18464e74129.PNG" alt="hotel-page" width = "750" />
<img src= "https://user-images.githubusercontent.com/74024519/163720660-8804ec2a-1827-438f-a003-6763505f5ce2.PNG" alt="flight-page" width = "750" />
<img src= "https://user-images.githubusercontent.com/74024519/163720686-15ec45e4-657f-4db2-ba76-1caf95596778.PNG" alt="login-page" width = "750" />
<img src= "https://user-images.githubusercontent.com/74024519/163720698-9f2f81b1-e8eb-4e7f-8fca-6427d5f57dfc.PNG" alt="register-page" width = "750" />