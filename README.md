# Granthagar Server

## Installation

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn add`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.

## Configuration

### Environment Variables

- `PORT`: Port number the server listens on. Default: 3000
- `MONGODB_URI`: URI for MongoDB database.
- `JWT_SECRET`: Secret key for JWT token generation.
- `EXPIRES_IN`: Token expiration time.

## Dependencies

- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongoose`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

## Scripts

- `dev`: Runs the server in development mode using `ts-node-dev`.
- `build`: Transpiles TypeScript files to JavaScript.
- `prod`: Runs the server in production mode.

## License

This project is licensed under the MIT License.
