# Node_Assign_2206

# Node.js RESTful API with MongoDB and Express

This is a RESTful API built with Node.js, MongoDB, and Express. It provides endpoints to perform CRUD operations on a collection of students.

## Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB (version X.X.X or higher)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install the dependencies:

   ```
   cd your-repo
   npm install
   ```

3. Configure the database connection:

   - Open the `db.js` file in the root directory.
   - Update the `uri` variable with your MongoDB connection string.

4. Start the server:

   ```
   node app.js
   ```

5. The API server will be running at `http://localhost:3000`.

## API Endpoints

- **GET /students**
  - Fetches all the students from the database.
  - Returns a JSON response with an array of all the students.

- **GET /students/:id**
  - Fetches a specific student by their ID from the database.
  - Returns a JSON response with the student's details.

- **POST /students**
  - Creates a new student in the database.
  - Accepts JSON data in the request body with the student's details.
  - Validates the data and inserts the student into the "students" collection.
  - Returns a JSON response with the newly created student's details.

- **PUT /students/:id**
  - Updates an existing student in the database.
  - Accepts JSON data in the request body with the updated student's details.
  - Finds the student by their ID and updates their information in the "students" collection.
  - Returns a JSON response with the updated student's details.

- **DELETE /students/:id**
  - Deletes a specific student by their ID from the database.
  - Removes the student from the "students" collection.
  - Returns a JSON response indicating the success or failure of the deletion.
