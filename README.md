Book Store Application (MERN Stack)

Overview
This is a simple Book Store application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides basic CRUD (Create, Read, Update, Delete) functionality for managing books.

Features
Create: Add new books to the store with title, author, and publish year.
Read: View a list of all books in the store and detailed information about each book.
Update: Edit existing book details, including title, author, and publish year.
Delete: Remove books from the store.
Technologies Used
Frontend:
React.js
React Router for client-side routing
Axios for making HTTP requests
Backend:
Node.js with Express.js for server-side logic
MongoDB for database storage using Mongoose ODM
RESTful API architecture for handling CRUD operations
Installation
Clone the repository: git clone <repository_url>
Navigate to the project directory: cd <project_directory>
Install dependencies:
Frontend: cd client && npm install
Backend: npm install
Set up environment variables:
Create a .env file in the root directory.
Define environment variables:
makefile
Copy code
PORT=<backend_server_port>
MONGODB_URI=<mongodb_connection_uri>
Start the development server:
Frontend: cd client && npm start
Backend: npm start
Usage
Open your web browser and navigate to the frontend port to access the Book Store application.
Use the navigation links to browse through different sections of the application.
Perform CRUD operations:
Create: Click on the "Add Book" button to create a new book.
Read: View the list of books on the homepage and click on a book to view its details.
Update: Click on the "Edit" button next to a book to modify its details.
Delete: Click on the "Delete" button to remove a book from the store.
Contributors
Fulvio Di Maio

Feel free to customize this README according to your project's specific details and requirements. If you have any questions or need further assistance, don't hesitate to ask!
