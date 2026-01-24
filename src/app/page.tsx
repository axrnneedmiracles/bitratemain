import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="relative z-10 flex flex-col items-center max-w-4xl p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4">
            Studio Noir
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
            We are a creative media studio crafting compelling visual narratives through photography, videography, and design.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/portfolio">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
