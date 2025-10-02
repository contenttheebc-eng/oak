// import mongoose, { Schema, Document, Model } from "mongoose";

// // Define the TypeScript interface
// export interface IAttendee extends Document {
//   fullName: string;
//   email: string;
//   phone: string;
//   event: string;
// }

// // Create the schema
// const attendeeSchema: Schema<IAttendee> = new Schema(
//   {
//     fullName: { type: String, required: true, trim: true },
//     email: { type: String, required: true, unique: true, lowercase: true },
//     phone: { type: String, required: true },
//     event: { type: String, required: true },
//   },
//   {
//     timestamps: true, // adds createdAt and updatedAt
//   }
// );

// // Avoid recompiling model on hot reloads (important for Next.js)
// const Attendee: Model<IAttendee> =
//   mongoose.models.Attendee ||
//   mongoose.model<IAttendee>("Attendee", attendeeSchema);

// export default Attendee;

import mongoose, { Schema, Document, Model } from "mongoose";

// Define the TypeScript interface
export interface IAttendee extends Document {
  fullName: string;
  email: string;
  phone: string;
  event: string;
}

// Create the schema
const attendeeSchema: Schema<IAttendee> = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    event: { type: String, required: true },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Create compound unique index on email + event
// This allows same email to register for different events
attendeeSchema.index({ email: 1, event: 1 }, { unique: true });

// Avoid recompiling model on hot reloads (important for Next.js)
const Attendee: Model<IAttendee> =
  mongoose.models.Attendee ||
  mongoose.model<IAttendee>("Attendee", attendeeSchema);

export default Attendee;
