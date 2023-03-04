# React Blog App

This is a simple React application that allows users to create, read, update, delete, or, like blog posts.

## Features

- Users can create a new blog post by filling out a form with the title, category, and body of the post.
- Users can view all blog posts that have been created.
- Users can click on a specific blog post to view its details. In this view, the user will find the specific post's update, delete, and like buttons.
- Users can edit, delete, or, like a blog post.
- Users can search for blog post based on their title, category, or body.

## Dependencies

- React
- React Router
- Axios
- ReduxJS Toolkit
- React Redux
- Context API
- React Icons
- JSON Server

## Installation and Setup

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run server` to start the JSON server.
5. Run `npm start` to start the application. It will automatically open your default browser with a localhost on which the application is running. The localhost address will be mentioned in the terminal.
6. If not, then open your browser and navigate to the mentioned localhost. Generally, the localhost will be [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can:

- Create a new blog post by clicking on the 'New' Link of the Navbar and filling out the form.
- View all existing blog posts on the homepage.
- View the details of a specific blog post by clicking on its body in the list of all posts.
- Edit, delete or, like an existing blog post by clicking on the 'Edit', 'Delete' or, 'Like' icon. These icons will be found on the details page of the post.

## JSON Server

- For JSON server, you can see a folder named `data` inside your root directory.
- In this foler, you can see a file named `db.json` and this file will be used to store the data of the post.
- Whenever you make any changes to the post; either create a new post, or like, update, or, delete the post. You can see the data changing in this file in real time.
