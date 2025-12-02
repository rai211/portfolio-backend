import express from "express";
import visitorRoutes from "./routes/visitorRoutes.js";
import cors from "cors";


const app = express();
app.use(cors({
  origin: "*",       
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization"
}));


app.use(express.json());
app.use("/api/visitors", visitorRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
