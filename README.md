
# Question and Answer Site

## Overview
This project implements a simple question-and-answer application where users can post questions and answers anonymously. The application is designed as a single page app (SPA), utilizing AJAX calls for dynamic content updates without page reloads. The backend is built with Node.js and Express, and it interacts with a MongoDB database using Mongoose for data modeling.

## Features
- **Question Posting:** Users can post new questions through the API.
- **Answer Posting:** Users can post answers to existing questions.
- **Question Retrieval:** The application provides an API endpoint to retrieve questions along with their answers.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd <project-directory>
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Configure the environment variables:**
Copy the `.env.example` file to a new file named `.env` and update it with your MongoDB connection string and any other configuration settings.

```bash
cp .env.example .env
```

4. **Start the MongoDB server:**
Ensure your MongoDB server is running on your machine or remotely and is accessible through the connection string provided in your `.env` file.

5. **Run the application:**
```bash
npm start
# or
yarn start
```

Your server should now be running on `http://localhost:3000` (or another port if you've configured it differently).

## API Endpoints

### GET `/questions/`
Retrieves a list of all questions along with their answers.

### POST `/questions/`
Creates a new question. The request body must include a `question` field.

### POST `/questions/:id/answers/`
Adds a new answer to an existing question. The request body must include an `answer` field.



