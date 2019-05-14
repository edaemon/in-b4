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
    const message = data['message'];
    const reveal = moment(data['reveal']);

    /* Verify the submitted data is valid */
    if (!typeof message === 'string' || !message instanceof String || !reveal.isValid()) {
        return { statusCode: 400, body: "Bad Request" };
    }

    /* Construct the faunaDB query */
    return client.query(
        q.Create(
            q.Class("messages"),
            { data: {
                message: String(message),
                reveal: String(reveal)
            }}
        )
    ).then((response) => {
        console.log("success", response);
        const path = response.ref.id;
        return { statusCode: 303, location: "/" + path };
    }).catch((error) => {
        console.log("error", error);
        return { statusCode: 500, body: "Error: " + error };
    })

    /* Redirect to the viewing page for the message */
};