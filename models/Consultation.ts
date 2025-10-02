import mongoose, { Schema, Document, Model } from "mongoose";

// Define the TypeScript interface
export interface IConsultation extends Document {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate?: Date;
  customRequirements?: string;
}

// Create the schema
const consultationSchema: Schema<IConsultation> = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    preferredDate: { type: Date },
    customRequirements: { type: String },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Create compound unique index on email + serviceType
// This allows same email to book different service types
consultationSchema.index({ email: 1, serviceType: 1 }, { unique: true });

// Avoid recompiling model on hot reloads (important for Next.js)
const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>("Consultation", consultationSchema);

export default Consultation;
