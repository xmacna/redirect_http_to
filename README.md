# Express Redirect Server

This is a simple Node.js application using Express.js to redirect all incoming requests to a specified URL defined in the environment variables.

## Getting Started

To get the server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Set the `REDIRECT_URL` environment variable to the URL where you want to redirect traffic
- Optionally, set the `PORT` environment variable to define which port the server should listen on (defaults to 3000)
- `node index.js` to start the server

## Environment Variables

The application requires the following environment variables to be set:

- `REDIRECT_URL`: The URL to which all traffic should be redirected.
- `PORT` (optional): The port on which the server will listen. Defaults to 3000 if not specified.

## Application Structure

- `index.js`: The entry point to the application. This file defines the Express server and the redirection logic.

## Features

- Redirects all incoming requests to the `REDIRECT_URL` specified in the environment variables.
- Validates the `REDIRECT_URL` to ensure it is a valid URL.
- Logs the redirection target URL to the console.
- Exits the process if `REDIRECT_URL` is not set or is invalid.

## Error Handling

The application will log errors to the console and exit in the following situations:

- If `REDIRECT_URL` is not set in the environment variables.
- If `REDIRECT_URL` is not a valid URL.

## Usage

Once the server is running, any incoming requests will be redirected to the `REDIRECT_URL` with a 301 Moved Permanently status code.
