// import { NextResponse } from "next/server";
// import mongooseConnect from "@/lib/mongooseConnect";
// import Attendee from "@/models/Event"; // adjust path if needed
// import { Resend } from "resend";
// import { EmailTemplate } from "@/components/email-template";
// import emailjs from "@emailjs/browser";
// const resend = new Resend(process.env.RESEND_API_KEY);

// // Handle POST (register attendee)
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, event } = body;

//     if (!name || !email || !phone || !event) {
//       return NextResponse.json(
//         { error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     await mongooseConnect();

//     // Check if user already registered for THIS specific event
//     const existingAttendee = await Attendee.findOne({ email, event });
//     if (existingAttendee) {
//       return NextResponse.json(
//         { error: "You have already registered for this event." },
//         { status: 409 } // 409 Conflict status code
//       );
//     }

//     const attendee = new Attendee({
//       fullName: name,
//       email,
//       phone,
//       event,
//     });

//     await attendee.save();

//     // try {
//     //   const response = await fetch(
//     //     "https://api.emailjs.com/api/v1.0/email/send",
//     //     {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //         // Authorization: `Bearer ${process.env.EMAILJS_PRIVATE_KEY}`, // 🔑 add this
//     //       },
//     //       body: JSON.stringify({
//     //         service_id: process.env.EMAILJS_SERVICE_ID,
//     //         template_id: process.env.EMAILJS_TEMPLATE_ID,
//     //         user_id: process.env.EMAILJS_PUBLIC_KEY, // public key is fine here
//     //         template_params: {
//     //           fullName: name,
//     //           email,
//     //           phone,
//     //           event,
//     //         },
//     //       }),
//     //     }
//     //   );

//     //   if (!response.ok) {
//     //     const errorText = await response.text();
//     //     console.error("EmailJS failed:", errorText);
//     //   }
//     // } catch (err) {
//     //   console.error("EmailJS error:", err);
//     // }

//     return NextResponse.json(
//       { message: "Registration successful & email sent", attendee },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error saving attendee:", error);

//     // Type guard for MongoDB duplicate key error
//     const isMongoError = (err: unknown): err is { code: number } => {
//       return typeof err === "object" && err !== null && "code" in err;
//     };

//     // Handle MongoDB duplicate key error (E11000)
//     if (isMongoError(error) && error.code === 11000) {
//       return NextResponse.json(
//         { error: "You have already registered for this event." },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       { error: "Failed to register attendee. Please try again." },
//       { status: 500 }
//     );
//   }
// }

// // Handle GET (fetch all attendees)
// export async function GET() {
//   try {
//     await mongooseConnect();

//     const attendees = await Attendee.find().sort({ createdAt: -1 });

//     return NextResponse.json({ attendees }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching attendees:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch attendees" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/mongooseConnect";
import Attendee from "@/models/Event"; // adjust path if needed
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import emailjs from "@emailjs/browser";

const resend = new Resend(process.env.RESEND_API_KEY);

// Handle POST (register attendee)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, event, location, status } = body;

    if (!name || !email || !phone || !event || !location || !status) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await mongooseConnect();

    // Check if user already registered for THIS specific event
    const existingAttendee = await Attendee.findOne({ email, event });
    if (existingAttendee) {
      return NextResponse.json(
        { error: "You have already registered for this event." },
        { status: 409 } // 409 Conflict status code
      );
    }

    const attendee = new Attendee({
      fullName: name,
      email,
      phone,
      event,
      location,
      status,
    });

    await attendee.save();

    // try {
    //   const response = await fetch(
    //     "https://api.emailjs.com/api/v1.0/email/send",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         // Authorization: `Bearer ${process.env.EMAILJS_PRIVATE_KEY}`, // 🔑 add this
    //       },
    //       body: JSON.stringify({
    //         service_id: process.env.EMAILJS_SERVICE_ID,
    //         template_id: process.env.EMAILJS_TEMPLATE_ID,
    //         user_id: process.env.EMAILJS_PUBLIC_KEY, // public key is fine here
    //         template_params: {
    //           fullName: name,
    //           email,
    //           phone,
    //           event,
    //           location,
    //           status,
    //         },
    //       }),
    //     }
    //   );

    //   if (!response.ok) {
    //     const errorText = await response.text();
    //     console.error("EmailJS failed:", errorText);
    //   }
    // } catch (err) {
    //   console.error("EmailJS error:", err);
    // }

    return NextResponse.json(
      { message: "Registration successful & email sent", attendee },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving attendee:", error);

    // Type guard for MongoDB duplicate key error
    const isMongoError = (err: unknown): err is { code: number } => {
      return typeof err === "object" && err !== null && "code" in err;
    };

    // Handle MongoDB duplicate key error (E11000)
    if (isMongoError(error) && error.code === 11000) {
      return NextResponse.json(
        { error: "You have already registered for this event." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to register attendee. Please try again." },
      { status: 500 }
    );
  }
}

// Handle GET (fetch all attendees)
export async function GET() {
  try {
    await mongooseConnect();

    const attendees = await Attendee.find().sort({ createdAt: -1 });

    return NextResponse.json({ attendees }, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendees:", error);
    return NextResponse.json(
      { error: "Failed to fetch attendees" },
      { status: 500 }
    );
  }
}
