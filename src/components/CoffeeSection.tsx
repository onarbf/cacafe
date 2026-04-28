import Link from "next/link";
import CoffeeCard from "@/components/CoffeeCard";
import { Coffee } from "@/data/coffees";

interface CoffeeSectionProps {
  title: string;
  subtitle?: string;
  coffees: Coffee[];
  viewAllHref?: string;
}

export default function CoffeeSection({
  title,
  subtitle,
  coffees,
  viewAllHref,
}: CoffeeSectionProps) {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-100 font-serif">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-stone-500 mt-1">{subtitle}</p>
          )}
        </div>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1"
          >
            Ver todos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}
