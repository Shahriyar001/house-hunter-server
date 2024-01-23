import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoutes.js";
import { residencyRoute } from "./routes/residencyRoute.js";
// import { userRoute } from "./routes/userRoutes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieparser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);
