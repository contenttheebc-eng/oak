// "use client";

// import React, { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Loader2 } from "lucide-react";

// interface Attendee {
//   _id: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   event: string;
//   createdAt: string;
// }

// export default function EventsAdminPage() {
//   const [attendees, setAttendees] = useState<Attendee[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchAttendees() {
//       try {
//         const res = await fetch("/api/events");
//         if (!res.ok) throw new Error("Failed to fetch attendees");
//         const data = await res.json();
//         setAttendees(data.attendees || []);
//       } catch (error) {
//         console.error("Error fetching attendees:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchAttendees();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Event Registrations</h1>

//       <Card className="overflow-x-auto">
//         {loading ? (
//           <div className="flex items-center justify-center p-10">
//             <Loader2 className="animate-spin w-6 h-6 mr-2" />
//             <span>Loading attendees...</span>
//           </div>
//         ) : attendees.length === 0 ? (
//           <div className="p-6 text-gray-500 text-center">
//             No attendees registered yet.
//           </div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Full Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Event</TableHead>
//                 <TableHead>Registered At</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {attendees.map((attendee) => (
//                 <TableRow key={attendee._id}>
//                   <TableCell className="font-medium">
//                     {attendee.fullName}
//                   </TableCell>
//                   <TableCell>{attendee.email}</TableCell>
//                   <TableCell>{attendee.phone}</TableCell>
//                   <TableCell>{attendee.event}</TableCell>
//                   <TableCell>
//                     {new Date(attendee.createdAt).toLocaleString()}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </Card>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Attendee {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  event: string;
  createdAt: string;
}

export default function EventsAdminPage() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [eventFilter, setEventFilter] = useState("all");

  useEffect(() => {
    async function fetchAttendees() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch attendees");
        const data = await res.json();
        setAttendees(data.attendees || []);
      } catch (error) {
        console.error("Error fetching attendees:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAttendees();
  }, []);

  // Unique event values for filter dropdown
  const eventOptions = useMemo(() => {
    const events = Array.from(new Set(attendees.map((a) => a.event)));
    return events;
  }, [attendees]);

  // Filter + search
  const filteredAttendees = useMemo(() => {
    return attendees.filter((a) => {
      const matchesSearch =
        a.fullName.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()) ||
        a.phone.toLowerCase().includes(search.toLowerCase());

      const matchesEvent =
        eventFilter === "all" ? true : a.event === eventFilter;

      return matchesSearch && matchesEvent;
    });
  }, [attendees, search, eventFilter]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Event Registrations</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name, email, or phone"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Event filter */}
        <Select value={eventFilter} onValueChange={setEventFilter}>
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Filter by event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            {eventOptions.map((event) => (
              <SelectItem key={event} value={event}>
                {event}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center p-10">
            <Loader2 className="animate-spin w-6 h-6 mr-2" />
            <span>Loading attendees...</span>
          </div>
        ) : filteredAttendees.length === 0 ? (
          <div className="p-6 text-gray-500 text-center">
            No attendees match your search/filter.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Registered At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAttendees.map((attendee) => (
                <TableRow key={attendee._id}>
                  <TableCell className="font-medium">
                    {attendee.fullName}
                  </TableCell>
                  <TableCell>{attendee.email}</TableCell>
                  <TableCell>{attendee.phone}</TableCell>
                  <TableCell>{attendee.event}</TableCell>
                  <TableCell>
                    {new Date(attendee.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
