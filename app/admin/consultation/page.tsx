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

interface Consultation {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
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

  // Filter + search
  const filteredConsultations = useMemo(() => {
    return consultations.filter((c) => {
      const matchesSearch =
        c.fullName.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.toLowerCase().includes(search.toLowerCase());

      const matchesService =
        serviceFilter === "all" ? true : c.serviceType === serviceFilter;

      return matchesSearch && matchesService;
    });
  }, [consultations, search, serviceFilter]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Consultation Requests</h1>

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

        {/* Service type filter */}
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full md:w-64">
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
                <TableHead>Service Type</TableHead>
                <TableHead>Preferred Date</TableHead>
                <TableHead>Custom Requirements</TableHead>
                <TableHead>Requested At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConsultations.map((consultation) => (
                <TableRow key={consultation._id}>
                  <TableCell className="font-medium">
                    {consultation.fullName}
                  </TableCell>
                  <TableCell>{consultation.email}</TableCell>
                  <TableCell>{consultation.phone}</TableCell>
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
    </div>
  );
}
