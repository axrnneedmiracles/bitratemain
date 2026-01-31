import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedProjectList } from '@/components/animated-project-list';
import { ArrowLeft } from 'lucide-react';

const portfolioItems = [
  'blender',
  'davinci',
  'canva',
  'after-effects',
  'web-dev',
  'unity',
  'fl-studio',
  'houdini',
];

export async function generateStaticParams() {
  return portfolioItems.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  if (!portfolioItems.includes(slug)) {
    return {
      title: 'Not Found',
    };
  }

  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} Projects | Studio Noir`,
    description: `A list of sample projects for ${title}.`,
  };
}

export default function PortfolioSamplePage({ params }: { params: { slug:string } }) {
  if (!portfolioItems.includes(params.slug)) {
    notFound();
  }

  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 min-h-screen flex flex-col items-center">
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          {title} Projects
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A list of sample projects.
        </p>
      </header>

      <AnimatedProjectList />

      <div className="mt-12">
        <Button asChild variant="outline">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
