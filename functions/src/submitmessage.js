import faunadb from 'faunadb';
import moment from 'moment';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async(event, context) => {
    /* Require POST method */
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    /* Parse the submitted data */
    const data = JSON.parse(event.body);
    const message = data.message;
    const reveal = moment(data.reveal);

    /* Verify the submitted data is valid */
    if (!typeof message === 'string' || !message instanceof String || !reveal.isValid()) {
        return { statusCode: 400, body: "Bad Request" };
    }

    /* Construct and submit the faunaDB query */
    return client.query(
        q.Create(
            q.Class("messages"),
            { data: {
                message: String(message),
                reveal: String(reveal)
            }}
        )
    ).then((response) => {
        /* Log the id and return a 201 with the id as the location header */
        const id = response.ref.id;
        console.log("Message created: " + id);
        return { statusCode: 201, headers: { "Location": "/" + id }};
    }).catch((error) => {
        /* Log the error and return a 500 */
        console.log("Submission error: " + error);
        return { statusCode: 500, body: "Error: " + error };
    });
};