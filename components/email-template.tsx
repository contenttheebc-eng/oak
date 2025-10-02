import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  event: string;
}

export function EmailTemplate({
  fullName,
  email,
  phone,
  event,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>📢 New Event Registration</h2>
      <p>A new attendee has registered for an event:</p>

      <ul>
        <li>
          <strong>Full Name:</strong> {fullName}
        </li>
        <li>
          <strong>Email:</strong> {email}
        </li>
        <li>
          <strong>Phone:</strong> {phone}
        </li>
        <li>
          <strong>Event:</strong> {event}
        </li>
      </ul>

      <p>🎉 Please follow up with them accordingly.</p>
    </div>
  );
}
