// pages/api/messages.js

import clientPromise from "../../lib/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    // Girdi doğrulaması
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
      createdAt: new Date(),
    };

    try {
      const client = await clientPromise;
      const db = client.db(); // Veya db adını belirtmek için client.db('my-site');
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  } else {
    // Diğer HTTP metodları için 405 Method Not Allowed yanıtı
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
