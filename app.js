import express from "express";
import visitorRoutes from "./routes/visitorRoutes.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors({
  origin: "https://portfolio-a42ab.web.app",       
  methods: ["GET,POST"],
  allowedHeaders: "Content-Type,Authorization"
}));


app.use(express.json());
app.use("/api/visitors", visitorRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
