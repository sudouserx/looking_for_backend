# CampusCompass Backend

This repository contains the backend code for CampusCompass, a project aimed at helping students and staff navigate their college campus efficiently.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description

CampusCompass is a web application designed to provide a user-friendly and intuitive platform for users to find their way around a college campus. The backend code is responsible for handling data storage and management, as well as processing user requests and providing responses to the frontend.

## Features

- Create, Read, Update, and Delete (CRUD) operations for labs and cabins.
- Filter labs and cabins by various criteria.
- Report labs and cabins for maintenance.
- Search for labs and cabins by name.

## Technologies

The backend is built using the following technologies:

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- Helmet for security
- CORS for cross-origin support
- Body-parser for parsing request bodies

## Getting Started

To run the CampusCompass backend on your local machine, follow these steps:

1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install the project dependencies using `npm install`.
4. Create a `.env` file in the root directory and set the following environment variables:
   - `PORT`: Port number for the server to listen on.
   - `MONGO_URL`: MongoDB connection string.
   - `JWT_SECRET`: Secret key for JWT token generation.
5. Start the development server using `npm run start` or `npm run start:prod` for production.

## API Endpoints

The backend provides the following API endpoints:

- **GET /api/v1/labs**: Get all labs.
- **GET /api/v1/labs/:id**: Get a specific lab by ID.
- **GET /api/v1/labs/reported**: Get all reported labs.
- **GET /api/v1/labs/name/:labName**: Find labs by name using regex.
- **POST /api/v1/labs**: Add a new lab.
- **PATCH /api/v1/labs/:id**: Update a lab by ID.
- **PATCH /api/v1/labs/report/:id**: Report a lab for maintenance.

- **GET /api/v1/cabins**: Get all cabins.
- **GET /api/v1/cabins/:id**: Get a specific cabin by ID.
- **GET /api/v1/cabins/reported**: Get all reported cabins.
- **GET /api/v1/cabins/staff/:name**: Find cabins by staff name using regex.
- **POST /api/v1/cabins**: Add a new cabin.
- **PATCH /api/v1/cabins/:id**: Update a cabin by ID.
- **PATCH /api/v1/cabins/report/:id**: Report a cabin for maintenance.

## Contributing

If you would like to contribute to the development of CampusCompass, feel free to submit a pull request. Your contributions are highly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.