import { json } from "micro";

export default async (req, res) => {
    if (req.method === "POST") {
        const data = await json(req); // Parse JSON data
        console.log("Received webhook:", data);
        res.status(200).send("Webhook received");
    } else {
        res.status(405).send("Method Not Allowed");
    }
};
