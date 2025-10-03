// "use client";

// import React, { useEffect, useState, useMemo } from "react";
// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Loader2, Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// interface Consultation {
//   _id: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   location: string;
//   status: string;
//   serviceType: string;
//   preferredDate?: string;
//   customRequirements?: string;
//   createdAt: string;
// }

// export default function ConsultationAdminPage() {
//   const [consultations, setConsultations] = useState<Consultation[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [serviceFilter, setServiceFilter] = useState("all");

//   useEffect(() => {
//     async function fetchConsultations() {
//       try {
//         const res = await fetch("/api/consultation");
//         if (!res.ok) throw new Error("Failed to fetch consultations");
//         const data = await res.json();
//         setConsultations(data.consultations || []);
//       } catch (error) {
//         console.error("Error fetching consultations:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchConsultations();
//   }, []);

//   // Unique service type values for filter dropdown
//   const serviceOptions = useMemo(() => {
//     const services = Array.from(
//       new Set(consultations.map((c) => c.serviceType))
//     );
//     return services;
//   }, [consultations]);

//   // Filter + search
//   const filteredConsultations = useMemo(() => {
//     return consultations.filter((c) => {
//       const matchesSearch =
//         c.fullName.toLowerCase().includes(search.toLowerCase()) ||
//         c.email.toLowerCase().includes(search.toLowerCase()) ||
//         c.phone.toLowerCase().includes(search.toLowerCase());

//       const matchesService =
//         serviceFilter === "all" ? true : c.serviceType === serviceFilter;

//       return matchesSearch && matchesService;
//     });
//   }, [consultations, search, serviceFilter]);

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Consultation Requests</h1>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row gap-4 items-center">
//         {/* Search */}
//         <div className="relative w-full md:w-1/2">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//           <Input
//             placeholder="Search by name, email, or phone"
//             className="pl-10"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         {/* Service type filter */}
//         <Select value={serviceFilter} onValueChange={setServiceFilter}>
//           <SelectTrigger className="w-full md:w-64">
//             <SelectValue placeholder="Filter by service" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Services</SelectItem>
//             {serviceOptions.map((service) => (
//               <SelectItem key={service} value={service}>
//                 {service}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <Card className="overflow-x-auto">
//         {loading ? (
//           <div className="flex items-center justify-center p-10">
//             <Loader2 className="animate-spin w-6 h-6 mr-2" />
//             <span>Loading consultations...</span>
//           </div>
//         ) : filteredConsultations.length === 0 ? (
//           <div className="p-6 text-gray-500 text-center">
//             No consultations match your search/filter.
//           </div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Full Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Service Type</TableHead>
//                 <TableHead>Preferred Date</TableHead>
//                 <TableHead>Custom Requirements</TableHead>
//                 <TableHead>Requested At</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredConsultations.map((consultation) => (
//                 <TableRow key={consultation._id}>
//                   <TableCell className="font-medium">
//                     {consultation.fullName}
//                   </TableCell>
//                   <TableCell>{consultation.email}</TableCell>
//                   <TableCell>{consultation.phone}</TableCell>
//                   <TableCell>{consultation.serviceType}</TableCell>
//                   <TableCell>
//                     {consultation.preferredDate
//                       ? new Date(
//                           consultation.preferredDate
//                         ).toLocaleDateString()
//                       : "Not specified"}
//                   </TableCell>
//                   <TableCell className="max-w-xs truncate">
//                     {consultation.customRequirements || "None"}
//                   </TableCell>
//                   <TableCell>
//                     {new Date(consultation.createdAt).toLocaleString()}
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
import { Loader2, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Consultation {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  serviceType: string;
  preferredDate?: string;
  customRequirements?: string;
  createdAt: string;
}

export default function ConsultationAdminPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchConsultations() {
      try {
        const res = await fetch("/api/consultation");
        if (!res.ok) throw new Error("Failed to fetch consultations");
        const data = await res.json();
        setConsultations(data.consultations || []);
      } catch (error) {
        console.error("Error fetching consultations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchConsultations();
  }, []);

  // Unique service type values for filter dropdown
  const serviceOptions = useMemo(() => {
    const services = Array.from(
      new Set(consultations.map((c) => c.serviceType))
    );
    return services;
  }, [consultations]);

  // Unique status values for filter dropdown
  const statusOptions = useMemo(() => {
    const statuses = Array.from(new Set(consultations.map((c) => c.status)));
    return statuses;
  }, [consultations]);

  // Filter + search
  const filteredConsultations = useMemo(() => {
    return consultations.filter((c) => {
      const matchesSearch =
        c.fullName.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.toLowerCase().includes(search.toLowerCase()) ||
        c.location.toLowerCase().includes(search.toLowerCase());

      const matchesService =
        serviceFilter === "all" ? true : c.serviceType === serviceFilter;

      const matchesStatus =
        statusFilter === "all" ? true : c.status === statusFilter;

      return matchesSearch && matchesService && matchesStatus;
    });
  }, [consultations, search, serviceFilter, statusFilter]);

  const handleRowClick = (consultation: Consultation) => {
    setSelectedConsultation(consultation);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedConsultation(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Consultation Requests</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search */}
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search by name, email, phone, or location"
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Service type filter */}
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full md:w-52">
            <SelectValue placeholder="Filter by service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            {serviceOptions.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Status filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-52">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center p-10">
            <Loader2 className="animate-spin w-6 h-6 mr-2" />
            <span>Loading consultations...</span>
          </div>
        ) : filteredConsultations.length === 0 ? (
          <div className="p-6 text-gray-500 text-center">
            No consultations match your search/filter.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead>Custom Requirements</TableHead>
                <TableHead>Requested At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConsultations.map((consultation) => (
                <TableRow
                  key={consultation._id}
                  onClick={() => handleRowClick(consultation)}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  <TableCell className="font-medium">
                    {consultation.fullName}
                  </TableCell>
                  <TableCell>{consultation.email}</TableCell>
                  <TableCell>{consultation.phone}</TableCell>
                  <TableCell>{consultation.location}</TableCell>
                  <TableCell className="capitalize">
                    {consultation.status}
                  </TableCell>
                  <TableCell>{consultation.serviceType}</TableCell>
                  <TableCell>
                    {consultation.preferredDate
                      ? new Date(
                          consultation.preferredDate
                        ).toLocaleDateString()
                      : "Not specified"}
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {consultation.customRequirements || "None"}
                  </TableCell>
                  <TableCell>
                    {new Date(consultation.createdAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      {/* Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Consultation Details</DialogTitle>
          </DialogHeader>
          {selectedConsultation && (
            <div className="space-y-4">
              <div className="grid  gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-base font-semibold">
                    {selectedConsultation.fullName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="text-base font-semibold capitalize">
                    {selectedConsultation.status}
                  </p>
                </div>
              </div>

              <div className="grid  gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base break-words">
                    {selectedConsultation.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-base">{selectedConsultation.phone}</p>
                </div>
              </div>

              <div className="grid  gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-base">{selectedConsultation.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Service Type
                  </p>
                  <p className="text-base">
                    {selectedConsultation.serviceType}
                  </p>
                </div>
              </div>

              <div className="grid  gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Preferred Date
                  </p>
                  <p className="text-base">
                    {selectedConsultation.preferredDate
                      ? new Date(
                          selectedConsultation.preferredDate
                        ).toLocaleDateString()
                      : "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Requested At
                  </p>
                  <p className="text-base">
                    {new Date(selectedConsultation.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Custom Requirements
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-base whitespace-pre-wrap">
                    {selectedConsultation.customRequirements || "None"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
