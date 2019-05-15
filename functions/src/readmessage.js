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
        const message = response.data.message;
        const reveal = moment(response.data.reveal);
        /* Send the message only if the reveal date has passed */
        console.log("Message: " + message);
        console.log("Reveal: " + reveal);
    }).catch((error) => {

    });
}