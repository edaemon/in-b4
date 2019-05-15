import faunadb from 'faunadb';
import moment from 'moment';

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async(event, context) => {
    /* Require GET method */
    if (event.httpMethod !== "GET") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const data = JSON.parse(event.body);
    const id = data.id;

    /* Verify the id is an integer */
    if (!id === parseInt(id, 10)) {
        return { statusCode: 400, body: "Bad Request" };
    }

    /* Retrieve the message info and respond based on reveal date */
    return client.query(
        q.Get(
            q.Ref(
                q.Class("messages"), id
            )
        )
    ).then((response) =>{
        /* Retrieve the message info */
        const message = response.data.message;
        const reveal = moment(response.data.reveal);
        console.log("Message: " + message);
        console.log("Reveal: " + reveal);
        /* Send the message only if the reveal date has passed */
        if (reveal.isAfter(moment())) {
            const responseData = { message: message, reveal: reveal };
        } else {
            const responseData = { reveal: reveal };
        }
        return { statusCode: 200, body: JSON.stringify(responseData) };
    }).catch((error) => {
        /* Log the error and return a 500 */
        console.log("Retrieval error: " + error);
        return { statusCode: 500, body: "Error: " + error };
    });
};