import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Noir',
  description: 'Explore the creative work and projects by Studio Noir.',
};

const portfolioCategories = [
    {
      slug: 'blender',
      name: 'Blender',
      image: '/blender_logo.png',
    },
    {
      slug: 'after-effects',
      name: 'After Effects',
      image: '/aftereffects_logo.png',
    },
    {
      slug: 'canva',
      name: 'Canva',
      image: '/canva_logo.png',
    },
    {
      slug: 'davinci',
      name: 'DaVinci Resolve',
      image: '/davinci_logo.png',
    },
    {
      slug: 'fl-studio',
      name: 'FL Studio',
      image: 'https://picsum.photos/seed/flstudio/600/400', // Placeholder
    },
    {
      slug: 'unity',
      name: 'Unity',
      image: '/unity_logo.png',
    },
    {
      slug: 'web-dev',
      name: 'Web Dev',
      image: '/webdev_logo.png',
    },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Explore our diverse range of creative projects.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {portfolioCategories.map((category) => (
          <Link key={category.slug} href={`/portfolio/${category.slug}`} passHref>
            <Card className="h-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="relative w-full h-48 bg-card">
                   <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
                <div className="w-full p-4 bg-muted/20 text-center">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
