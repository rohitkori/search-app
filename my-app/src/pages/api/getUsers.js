import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

const fetchUsers = async (query) => {
    console.log("here is the query:", query);
    try {
      const client = await clientPromise;
      const db = client.db("Users");
  
      let users = [];
  
      if (query) {
        users = await db.collection("User_details").find({
          $or: [
            { first_name: { $regex: query, $options: 'i' } },
            { last_name: { $regex: query, $options: 'i' } },
            { city: { $regex: query, $options: 'i' } }, 
            { contact_number: { $regex: query, $options: 'i' } },
          ]
        }).sort({ user_name: 1 }).limit(20).toArray();
      } else {
        users = await db.collection("User_details").find().sort({ first_name: 1 }).limit(20).toArray();
      }
      console.log("Here are the users:", users);
      return users;
    } catch (e) {
      console.error(e);
      return '';
    }
  }
  
  export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        const { q: query } = req.query;
  
        if (query) {
          const response = await fetchUsers(query);
          console.log("Json from server", response);
          res.status(200).json(response);
        } else {
          res.status(400).json({ error: "No search query provided" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }
  