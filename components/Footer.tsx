import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl  mb-4">Oakss Consult Ltd</h3>
            <p className=" mb-4 font-thin">
              Scaling Businesses, Building Leaders. Practical management,
              training & consulting for entrepreneurs, teams & institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/oakssconsult?igsh=MTgyeGpubjVldDZ0bw=="
                className=" hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/oakss-consult-ltd/posts/?feedView=all&viewAsMember=true"
                className=" hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=6157975197762"
                className=" hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className=" mb-4 text-3xl">Services</h4>
            <ul className="space-y-2 font-thin ">
              <li>Business Growth Strategy</li>
              <li>Consulting & Coaching</li>
              <li>Staff Performance</li>
              <li>Student Training</li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl mb-4">About</h4>
            <ul className="space-y-2 font-thin ">
              <li>what we Do</li>
              <li>Our Services</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center font-thin ">
          <p>&copy; 2025 Oakss Consult Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
