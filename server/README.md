
# Server API Blog

Server API for a Blog made with Node, Express and MongoDB.



## Tech Stack

**Server:** Node, Express, MongoDB, Bcrypt, Jsonwebtoken


  
## Run Locally

Clone the project

```bash
  git clone https://github.com/julandrod/Blog-MERN.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`, declare a port number to run the server.

`MONGODB_URL`, url use for the MongoDB connection.

`SECRET_KEY`, use in the creation of the token with jsonwebtoken and to encrypt the user password with bcrypjs.