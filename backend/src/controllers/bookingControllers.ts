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

export const getBookingByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const booking = await BookingModel.find({ user: userId }).populate(
      "user space"
    );
    if (!booking) {
      return res.status(404).json({ message: "Bookings not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error in bookingbyid", error });
  }
};

export const getBookingBySpaceId = async (req: Request, res: Response) => {
  const spaceId = req.params;

  try {
    const Bookings = await BookingModel.find({ space: spaceId }).populate(
      "user space"
    );

    if (!Bookings) {
      return res.status(404).json({ message: "Bookings not found" });
    }
    res.status(201).json(Bookings);
  } catch (error) {
    res.status(500).json({ message: "Error in booking by spaceID", error });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  const { user, space, startTime, endTime, status } = req.body;
  try {
    const newBooking = new BookingModel({
      user,
      space,
      startTime,
      endTime,
      status,
    });

    const createBooking = await newBooking.save();
    res.status(201).json(createBooking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in create booking controller", error });
  }
};

export const updateBookingById = async (req: Request, res: Response) => {
  const bookingId = req.params.id;
  const { user, space, startTime, endTime, status } = req.body;
  try {
    //New returns updated booking rather than old one and validator helps to run the scehma on updated documnet
    const updateBooking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { space, startTime, endTime, status },
      { new: true, runValidators: true }
    );

    if (!updateBooking) {
      return res.status(404).json({ message: "Error in update booking" });
    }

    res.status(200).json(updateBooking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error in update booking controller", error });
  }
};

export const deleteBookingById = async (req: Request, res: Response) => {
  const bookingId = req.params.id;

  try {
    const deleteBooking = await BookingModel.findByIdAndDelete(bookingId);
    if (!deleteBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error in deleting booking controller", error });
  }
};

// ___________________xxxx________________xxxx_________________xxxx_________________xxxx___________________________

//Completed bookingcontroller MEOW MEOW
