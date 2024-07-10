import express, { Request, Response } from "express";
import cors from "cors";
import dbconnect from "./utils/dbconnect";
import dotenv from "dotenv";
import BookingRoutes from "./routes/BookingRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import UserRoutes from "./routes/UserRoutes"
import ServiceRoutes from "./routes/ServiceRoute";
dotenv.config();
const app = express();
const port = 3000;

dbconnect();

app.use(express.json());
app.use(cors());
app.use("/api/v1/services", ServiceRoutes);
app.use("/api/v1/bookings", BookingRoutes);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/users", UserRoutes);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
