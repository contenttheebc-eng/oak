import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IconCards({
  items,
}: {
  items: { icon: LucideIcon; title: string; text: string }[];
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <Card
          key={item.title}
          className="text-center hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader className="px-3 md:px-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-8 w-8 text-amber-600" />
            </div>
            <CardTitle className="text-xl">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-3 md:px-6">
            <p className="text-gray-600">{item.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
