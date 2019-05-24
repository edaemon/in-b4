# in-b4

This is the code behind: https://in-b4.com

In-b4 was created to explore React, Netlify Functions, and FaunaDB. You can read
more about the process here: https://edaemon.net/posts/in-b4

## Tech/tools involved

* [React](https://reactjs.org/)
* [Netlify](https://www.netlify.com/)
* [Netlify Functions](https://www.netlify.com/docs/functions/)
* [FaunaDB](https://fauna.com/)

## Setup

If you want to replicate this (note the [GNU AGPLv3 license](https://github.com/edaemon/in-b4/blob/master/LICENSE)),
you can do so following these steps:

1. Create a Netlify account
2. Fork this repository, or clone/download it and add it to GitHub (or any other backend
Netlify supports)
3. Connect your Netlify account to the new repository
4. Create a Fauna account
5. Create a Fauna database, containing a class called `messages`
6. Create a new database key with the `server` role
7. Add this key to Netlify as an environment variable with the name `FAUNADB_SERVER_SECRET`

That should be all that's required. Note that some information will not match your version without changes.

## Notes

* This project was bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app)
* Feel free to open an issue or report a problem here on GitHub
* I can't make any guarantees about the quality of this code; it was my first time working with React and Fauna