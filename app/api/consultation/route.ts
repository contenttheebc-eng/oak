import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/mongooseConnect";
import Consultation from "@/models/Consultation";

// Handle POST (book consultation)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      location,
      status,
      serviceType,
      preferredDate,
      customRequirements,
    } = body;

    if (!name || !email || !phone || !location || !status || !serviceType) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    await mongooseConnect();

    // Check if user already booked THIS specific service type
    const existingConsultation = await Consultation.findOne({
      email,
      serviceType,
    });
    if (existingConsultation) {
      return NextResponse.json(
        {
          error:
            "You have already booked this service. Please contact us if you need to reschedule.",
        },
        { status: 409 }
      );
    }

    const consultation = new Consultation({
      fullName: name,
      email,
      phone,
      location,
      status,
      serviceType,
      preferredDate: preferredDate ? new Date(preferredDate) : undefined,
      customRequirements,
    });

    await consultation.save();

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_CONSULTATION_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
              fullName: name,
              email,
              phone,
              location,
              status,
              serviceType,
              preferredDate: preferredDate
                ? new Date(preferredDate).toLocaleDateString()
                : "N/A",
              customRequirements: customRequirements || "N/A",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("EmailJS failed:", errorText);
      }
    } catch (err) {
      console.error("EmailJS error:", err);
    }

    return NextResponse.json(
      { message: "Consultation booking successful", consultation },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving consultation:", error);

    // Type guard for MongoDB duplicate key error
    const isMongoError = (err: unknown): err is { code: number } => {
      return typeof err === "object" && err !== null && "code" in err;
    };

    // Handle MongoDB duplicate key error (E11000)
    if (isMongoError(error) && error.code === 11000) {
      return NextResponse.json(
        {
          error:
            "You have already booked this service. Please contact us if you need to reschedule.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to book consultation. Please try again." },
      { status: 500 }
    );
  }
}

// Handle GET (fetch all consultations)
export async function GET() {
  try {
    await mongooseConnect();

    const consultations = await Consultation.find().sort({ createdAt: -1 });

    return NextResponse.json({ consultations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return NextResponse.json(
      { error: "Failed to fetch consultations" },
      { status: 500 }
    );
  }
}
