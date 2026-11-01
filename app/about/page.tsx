import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import CtaSection from "@/components/CtaSection";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Oakss"
        subtitle="Helping People Work Better. Helping Businesses Grow Better."
      />

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-left md:text-center mb-8 text-sm md:text-xl text-gray-700 leading-relaxed">
            <p>
              Oakss Consult is a professional training and business consultancy
              focused on developing people and strengthening businesses.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-x-2">
            <div className="col-span-2 h-80 md:h-[420px]">
              <img
                src="/cloudinary/20.jpg"
                alt="The Oakss team"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-80 md:h-[420px]">
              <img
                src="/cloudinary/16.jpg"
                alt="Oakss workshop"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-80 md:h-[420px]">
              <img
                src="/cloudinary/17.jpg"
                alt="Oakss workshop participants"
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl text-amber-900 text-center mt-10 md:mt-20 mb-8">
            We work across two core areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardHeader className="px-3 md:px-6">
                <CardTitle className="text-2xl text-amber-900">
                  Digital Skills Training
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 md:px-6">
                <p className="text-gray-700">
                  For experienced professionals who want to remain confident,
                  capable and relevant in a changing workplace.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-600 shadow-lg">
              <CardHeader className="px-3 md:px-6">
                <CardTitle className="text-2xl text-green-700">
                  Management Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 md:px-6">
                <p className="text-gray-700">
                  For small and medium-sized businesses that want to create
                  stronger structures, improve how they operate and build a
                  foundation for sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="max-w-4xl mx-auto text-left md:text-center text-sm md:text-xl text-gray-700 leading-relaxed mt-8 md:mt-12">
            Our work is practical, people-focused and designed to create skills
            and systems that can be applied beyond the training room or
            consulting session.
          </p>
        </div>
      </section>

      <CtaSection title="Ready to Get Started?" label="Talk to Oakss" />
    </>
  );
}
