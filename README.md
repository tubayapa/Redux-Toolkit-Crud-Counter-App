## Redux-Toolkit-Crud-Counter-App

This application utilizes Redux Toolkit for state management and React Router for navigation. It consists of two main pages: a counter page and a CRUD (Create, Read, Update, Delete) page.

## GIF

![Screen_Recording_2024-02-27_at_10_39_04_AdobeExpress-ezgif com-video-to-gif-converter](https://github.com/tubayapa/Redux-Toolkit-Crud-Counter-App/assets/147662888/c4267331-63cd-445e-b4c6-59f151aea847)


## Counter Page (CounterPage.js)
Displays a simple counter.
Allows users to increment or decrement the counter.
Includes a button to toggle between light and dark themes.

## CRUD Page (CrudPage.js)
Displays a table of tasks with columns for task details and actions (edit and delete).
Allows users to add new tasks, edit existing tasks, and delete tasks.
Supports modal forms for adding and editing tasks.
Tasks are stored in Redux state managed by crudSlice.

## Redux Setup
Redux store configuration is handled with Redux Toolkit.
Two slices (counterSlice and crudSlice) manage the application's state:
counterSlice manages the counter state and theme toggling.
crudSlice manages the CRUD operations for tasks.

## Dependencies
The application relies on various dependencies such as  <br>
<strong>Redux-Toolkit</strong> <br>
<strong>React Router</strong>   <br>
<strong>React Bootstrap</strong>  for UI components <br>
<strong>UUID</strong>  for generating unique identifiers

## Key Features
Utilizes Redux Toolkit for efficient state management.
Implements React Router for navigation between pages.
Integrates React Bootstrap components for UI design.
Provides CRUD functionality for managing tasks.
Supports theme toggling between light and dark themes.

Overall, the application provides a user-friendly interface for managing tasks with features like adding, editing, and deleting tasks while offering a seamless experience with Redux state management and React Router navigation.
