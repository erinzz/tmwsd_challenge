# This message will self-destruct
This is a NodeJS programming challenge.


### Hello Agents!

We have created a simple web application where you and fellow agents can create new messages, view the messages at a unique URL, and destroy the message upon viewing it. You will be able to read the message once.

Follow the instructions below to access the application locally:

## Installation

1. Fork this repository
2. Clone with `git clone https://github.com/erinzz/tmwsd_challenge`
3. Install dependencies with `npm install`
4. Run `node app.js`


## Database Setup

A .env file with the following key will be required:

- PG_DB_URI: the URI needed to connect to the PostgreSQL database

To make the database accessible through a cloud server, you can select your own or sign up with a third party provider, like Elephant SQL (free tier available). If you want to use a client to more easily navigate the database, a client like Postico can be installed to access the database with the Elephant SQL credentials.

Additional resources to set up local and cloud server:
- [Cloud server setup](https://www.prisma.io/dataguide/postgresql/5-ways-to-host-postgresql)
- [Local database setup](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database)


## Features
Once you have your application up and running. As a user you should be able to:
- [x] See a form to create a new message on the homepage.
- [x] See a list of links for all created messages below the 'new message' form on the homepage.
- [x] When you click a link in the message list, you should be able to view the message at a unique URL.
- [x] When you open a message, the message will self-destruct (deleted from the database).
- [x] You will no longer see messages on the homepage that have been viewed.

### Demo:
<video src="./client/assets/node-assessment-app.mov" />