# URL Shortener

## Table of contents
  * [Local Setup](#local-setup)
  * [Tech Stack](#tech-stack)
  * [How it works](#how-it-works)
  * [Decisions](#decisions)
  * [References](#references)

## Local Setup
Ensure you have [NodeJS](https://nodejs.org/en/) installed.

In order to connect to MongoDB atlas cluster, you are required to create a `.env` file in the `backend/` folder. You may either ask the admin of this repository for the connection string or create your own cluster. The `.env` file should look something like this:
```
DB_CLOUD_URI=mongodb+srv://*****:*****@cluster0.xxxxxxx.mongodb.net/
ENV=PROD
```

To start the backend:
```
cd backend/

# install dependencies
npm install

# start backend service
node index.js

# Alternatively, if you have nodemon installed
nodemon index.js
```

To start the frontend:
```
cd frontend/

# install dependencies
npm install

# To connect to local backend (Bash - MacOS/Linux)
REACT_APP_ENV=DEV npm start

# To connect to cloud backend (public)
npm start
```

If you're on windows and want to connect to local backend:
```
# CMD
set "REACT_APP_ENV=DEV" && npm start

# Powershell
($env:REACT_APP_ENV = "DEV") -and (npm start)
```

To run mocha tests:
```
cd backend/
npm test
```

## Tech Stack
* MERN (MongoDB Atlas, ExpressJS, NodeJS, ReactJS)
* Digital Ocean
* Github Pages

## How it works
A hashing approach is used with the help of the nanoid library (shortid library has been deprecated) and the original url and shortened url is stored in the database. Whenever a user calls the shortened url, the original url value is fetched and the browser redirects to that address.

![image](https://user-images.githubusercontent.com/43946966/189596306-f2afd68d-ad3d-4fb9-9f03-3976fb0ef3a4.png)

## Decisions
MongoDB (NoSQL) was chosen over a relational database such as PostgreSQL as it would fare better for a solution that required scalability with entries added and that no relationships were needed between objects.

NanoID was chosen over ShortID as the hashing library given that ShortID is deprecated due to unsafe architecture as mentioned on it's repository.

## References
[Designing a URL Shortening service like TinyURL by Grokking the System Design Interview
](https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR)

[How To Build A URL Shortener With Node.js, Express, and MongoDB](https://www.youtube.com/watch?v=SLpUKAGnm-g&t=451s)

 
