import { Request, Response } from "express";
import { BookingModel } from "../models/booking.model";

// Create a new booking
export const createBooking = async (req: Request, res: Response) => {
  const { user, space, startTime, endTime, paymentMethod } = req.body;
  try {
    const newBooking = new BookingModel({
      user,
      space,
      startTime,
      endTime,
      paymentMethod,
      status: "pending",
    });

    const booking = await newBooking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Get all bookings
export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await BookingModel.find().populate("user space");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Get booking by ID
export const getBookingById = async (req: Request, res: Response) => {
  const bookingId = req.params.id;
  try {
    const booking = await BookingModel.findById(bookingId).populate("user space");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Get bookings by user ID
export const getBookingsByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const bookings = await BookingModel.find({ user: userId }).populate("space");
    if (!bookings) {
      return res.status(404).json({ message: "Bookings not found" });
    }
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings by user ID", error });
  }
};

// Update booking status
export const updateBookingStatus = async (req: Request, res: Response) => {
  const bookingId = req.params.id;
  const { status } = req.body;
  try {
    const updatedBooking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: "Error updating booking status", error });
  }
};

// Delete a booking
export const deleteBooking = async (req: Request, res: Response) => {
  const bookingId = req.params.id;
  try {
    const deletedBooking = await BookingModel.findByIdAndDelete(bookingId);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error });
  }
};
