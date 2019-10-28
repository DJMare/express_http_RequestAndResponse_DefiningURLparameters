# express_http_RequestAndResponse_DefiningURLparameters
A simple express app where you use req.query to define the parameters within the URL which you can then use on the page.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

  cd Desktop

(2) Create a new folder on desktop: 

  mkdir Express

(3) Navigate to the Express directory: 

  cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

  npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_http_RequestAndResponse_DefiningURLparameters: 

  express --view=hbs express_http_RequestAndResponse_DefiningURLparameters 

(6) Once the process is complete, navigate into the express_http_RequestAndResponse_DefiningURLparameters directory: 

  cd express_http_RequestAndResponse_DefiningURLparameters  

(7) Now in the express_http_RequestAndResponse_DefiningURLparameters directory, run the following: 

  npm install

(8) Install Nodemon globally: 

  npm install -g nodemon

(9) Start the server with Nodemon with the following command: 

  nodemon

VS CODE

(10) Open in VS code: ![open in vs code - index js (_DefiningURLparameters)](https://user-images.githubusercontent.com/35668707/67520267-58940d80-f65d-11e9-8caf-293a107c24b3.JPG)

(11) Navigate to the routes/index.js file and add an the example where you define a name of a person within the URL and use req.query to use that name in your res.send: ![update with req query - index js (_DefiningURLparameters)](https://user-images.githubusercontent.com/35668707/67520342-82e5cb00-f65d-11e9-8a0e-bb1789a3ec73.JPG)


POSTMAN

(12) Open Postman and use the GET route to test: ![Use GET route and URL to test in Postman](https://user-images.githubusercontent.com/35668707/67520441-b1fc3c80-f65d-11e9-9b23-615b7fa917f7.JPG)

