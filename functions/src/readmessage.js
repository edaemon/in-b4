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

    const pathElements = event.path.split("/");
    const id = pathElements[pathElements.length - 1];

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
        const created = moment(response.data.created);
        var responseData = { reveal: reveal, created: created };

        /* Include the message only if the reveal date has passed */
        if (reveal.isBefore(moment())) {
            responseData.message = message;
        }
        console.log("Retrieved: " + id);
        return { statusCode: 200, headers: {"Cache-Control": "public, s-maxage=600"}, body: JSON.stringify(responseData) };
    }).catch((error) => {
        /* Log the error and return a 500 */
        console.log("Retrieval error: " + error);
        return { statusCode: 500, body: "Error: " + error };
    });
};