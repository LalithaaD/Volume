**Introduction:**
Volume, an e-commerce application is built with a React frontend, Node.js backend using Express framework, and MongoDB for database management.
The application features three main collections in the database: users, products, and orders. 
It provides APIs for user management, product management, order management, and user authentication/login. 
The backend runs on port 3001 while the frontend runs on port 3000. 
The primary functionality includes user authentication, product browsing, ordering, and user profile management.

**File Structure:**
**wt-assignment:** Contains the frontend codebase, presumably built with React.
**ecom:** Contains backend codebase for connectivity with MongoDB and handling API requests.
**db files:** Holds the reports of the schemas defined for the MongoDB collections.

**Functionality:**
**User Authentication/Login:**
Users can log in using their credentials.
Upon login, users can edit their name, student number, and address. However, email address remains immutable.
**Product Management:**
The application provides APIs for managing products, likely including CRUD operations (Create, Read, Update, Delete).
Users can browse products.
**Order Management:**
Users can place orders for products.
The application manages order tracking, presumably with APIs to create, read, update, and delete orders.
**Credit Validation at Checkout:**
An attempted implementation for credit validation at the cart checkout exists but has encountered issues.

**Challenges:**
**Credit Validation:** Integration at checkout encountered operational issues.

**Conclusion:**
The e-commerce application demonstrates a robust architecture with separate frontend and backend components, leveraging modern technologies such as React, Node.js, Express, and MongoDB. 
While core functionalities such as user authentication, product management, and order tracking are implemented, challenges persist with credit validation at the cart checkout, necessitating further investigation and resolution.

**To execute the application, follow these commands:**
**Frontend Setup:**
cd wt-assignment
npm install       # Install dependencies
npm start         # Start the frontend server on port 3000
**Backend Setup:**
cd ecom
npm install       # Install dependencies
npm start         # Start the backend server on port 3001
