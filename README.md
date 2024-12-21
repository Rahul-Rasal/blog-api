# Blog API

A simple blog API built using Node.js, Express, and MongoDB. This project allows you to create, read, update, delete, and search blog posts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Introduction

This project is a basic RESTful API for managing blog posts. It supports operations such as creating, retrieving, updating, deleting, and searching for blog posts. It uses MongoDB for data storage and Express as the server framework.

## Features

- Add new blog posts
- Get all blog posts
- Get a single blog post by ID
- Update a blog post
- Delete a blog post
- Search blog posts by title, content, or category
- Timestamps for posts (createdAt, updatedAt)

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv** for environment variables
- **body-parser** for handling request bodies

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Rahul-Rasal/blog-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd blog-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables by creating a `.env` file in the root directory and adding the following:

    ```bash
    MONGODB_URI=your-mongodb-uri
    PORT=your-port
    ```

    Replace `your-mongodb-uri` with your actual MongoDB connection string and `your-port` with the desired port number.

## Configuration

- **MongoDB**: Make sure you have a MongoDB instance running and configure the connection string in the `.env` file.
- **Port**: You can specify a custom port in the `.env` file. If not provided, the server will default to port `2000`.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The API will run at `http://localhost:2000` (or the port you configured).

## API Endpoints

### Create a new post

- **URL**: `/addpost`
- **Method**: `POST`
- **Body**:

    ```json
    {
      "title": "Your blog title",
      "content": "Your blog content",
      "category": "Your category",
      "tags": ["tag1", "tag2"]
    }
    ```

### Get all posts

- **URL**: `/allposts`
- **Method**: `GET`

### Get a post by ID

- **URL**: `/:id`
- **Method**: `GET`

### Update a post

- **URL**: `/:id`
- **Method**: `POST`
- **Body**:

    ```json
    {
      "title": "Updated title",
      "content": "Updated content",
      "category": "Updated category",
      "tags": ["updatedTag1", "updatedTag2"]
    }
    ```

### Delete a post

- **URL**: `/:id`
- **Method**: `DELETE`

### Search posts

- **URL**: `/search?term=your-search-term`
- **Method**: `GET`

## Examples

- **Create a post**:

    ```bash
    curl -X POST http://localhost:2000/addpost -H "Content-Type: application/json" -d '{"title": "Sample Title", "content": "Sample Content", "category": "Tech", "tags": ["node", "express"]}'
    ```

- **Get all posts**:

    ```bash
    curl http://localhost:2000/allposts
    ```

- **Search for posts**:

    ```bash
    curl http://localhost:2000/search?term=Tech
    ```

## Troubleshooting

- **MongoDB Connection Error**: If the server fails to connect to MongoDB, make sure the MongoDB URI in the `.env` file is correct, and that your MongoDB instance is running.
- **Port Already in Use**: If the port is already in use, change the port in the `.env` file or terminate the process using that port.

## Contributors

- [Rahul Rasal](https://github.com/Rahul-Rasal)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
