import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Noir',
  description: 'Explore the creative work and projects by Studio Noir.',
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Our Work
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A collection of our passion, creativity, and dedication to visual excellence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/portfolio/${project.slug}`} key={project.id}>
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={project.coverImage.url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.coverImage.hint}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
