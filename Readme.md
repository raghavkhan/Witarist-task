------------------ Instructions to run the app --------------------

Frontend

1. open terminal, type : cd client and press enter,type: npm install and press enter, this will install node modules,
   make sure you already installed nodeJS .
2. type npm start and press enter for running frontend
3. frontend will be running on localhost:3000

Backend

1. open terminal, type : cd server and press enter,type: npm install and press enter, this will install node modules,
   make sure you already installed nodeJS .
2. type npm start and press enter for running backend
3. This will appear when backend is properly started -
   db connected!
   server is listening at port: 8000

----------------- Some Information regarding the app -------------------------

ID,TaskName and priority are the three input fields.

1. ID should be unique and required.
2. TaskName should be in between 6 to 50 characters and required.
3. priority is also required
   Validation is implemented on the backend side and not on the frontend side .

CRUD is implemented on both frontend and backend properly.

Filtering is done by using dropdown menu on the basis of priority - low,medium and high.

Sorting is implemented on the basis of both - By Task-Name and By Priority
By Task-Name it is done alphabetically ascending and descending order.Like a toggle.
By Priority it is done in order of low, medium and high in ascending and descending order.

-------------------- End Of Instructions ------------------------------------
