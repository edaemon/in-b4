import faunadb from 'faunadb';
import moment from 'moment';

/* Set up the faunaDB client with envvar secret */
const query = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
});

/* Export the function as required handler */
exports.handler = function(event, context, callback) {
    console.log("starting");
    /* Require POST method */
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    /* Parse the submitted data */
    const data = JSON.parse(event.body);
    console.log(data);
    const message = data['message'];
    const reveal = moment(data['reveal']);

    /* Verify the submitted data is valid */
    if (!typeof message === 'string' || !message instanceof String || !reveal.isValid()) {
        return { statusCode: 400, body: "Bad Request" };
    }

    console.log("Message: " + message);
    console.log("Reveal: " + reveal);

    /* Construct the faunaDB query */


    /* Redirect to the viewing page for the message */
};