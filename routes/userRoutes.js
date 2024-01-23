import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  toFav,
} from "../controllers/userCntrl.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/bookvisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking, getAllBookings);
router.post("/toFav/:rid", toFav);

export { router as userRoute };
