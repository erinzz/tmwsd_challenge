# This message will self-destruct

A NodeJS programming challenge.

The goal here is to create a simple web application that allows someone to create a message, view that message at a unique URL, and destroy the message upon viewing it. Just like the title states, this message will self-destruct!


Hello Agents!


We have created simple web portal where you and fellow agents can send one another messages that will be destroyed upon opening. You will be able to read the message once and once only. So, be prepared! Write it down, memorize it; do whatever you need because there is no way to retrieve it again.

Follow the instructions below to access the application locally:

## Installation

Fork this repository, clone it, install dependencies, and run it.

``` bash
git clone {{your_fork_url_here}}
npm install
node app.js
```
// installation instructions


## Features

Once you have your application up and running. As a user you should be able to:

- [x] See a form to create a new message on the homepage.
- [x] See a list of links for all created messages below the 'new message' form on the homepage.
- [x] When you click a link in the message list, you should be able to view the message at a unique URL.
- [x] When you open a message, the message will self-destruct (deleted from the database).
- [x] You will no longer see messages on the homepage that have been viewed.


## Future features to come
- [] Agent sign in portal
- [] Messages ciphered upon security breach

## TODO!!
[x] hide elephantSQL db link
[] Hide messages for client in icon
[] POST bug when refreshing page
[] Add in edge cases
[] CSS!
[] ReadME instructions update
[] Refactor
[] Submit! Send an email with a link to your fork when finished. Thanks!