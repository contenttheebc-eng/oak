export default function PageBanner({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
