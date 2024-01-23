import express from "express";
import {
  bookVisit,
  createUser,
  getAllBookings,
} from "../controllers/userCntrl.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);

export { router as userRoute };
