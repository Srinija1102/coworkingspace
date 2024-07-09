import { Request, Response } from "express";
import { BookingModel, UserModel } from "../models/model";

//To get all the Bookings

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    //check if the user is an admin
    if ((req as any).user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const booking = await BookingModel.find().populate("user space");
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Serer error", error });
  }
};
