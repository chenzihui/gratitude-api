# What is this?
------------------------------

This repository contains the API for a simple Gratitude Journal application.
Frontend clients for the application will be put up in seperate repos.

## To install
------------------------------

Clone the repository and then run `npm install` to make sure you have all the
dependencies needed.

After which, you should set up your Postgresql database by running
`createdb gratitude_journal`.

Note that you may also use any database of your choice, just remember to update
`knexfile.js` and your configuration files in `/config`.

## To run the tests
------------------------------

Run the database migrations with `knex migrate:latest` and then `make test`.

## Running the server
------------------------------

To start the server, simply run `npm start`.
