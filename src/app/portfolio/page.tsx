import ChromaGrid from '@/components/chroma-grid';

const portfolioItems = [
  {
    image: '/blender_logo.png',
    title: 'Blender',
    url: '/portfolio/blender',
  },
  {
    image: '/davinci_logo.png',
    title: 'DaVinci Resolve',
    url: '/portfolio/davinci',
  },
  {
    image: '/aftereffects_logo.png',
    title: 'After Effects',
    url: '/portfolio/after-effects',
  },
  {
    image: '/flstudio_logo.png',
    title: 'FL Studio',
    url: '/portfolio/fl-studio',
  },
  {
    image: '/unity_logo.png',
    title: 'Unity',
    url: '/portfolio/unity',
  },
  {
    image: '/h_logo.png',
    title: 'Houdini',
    url: '/portfolio/houdini',
  },
  {
    image: '/webdev_logo.png',
    title: 'Web Dev',
    url: '/portfolio/web-dev',
  },
  {
    image: '/canva_logo.png',
    title: 'Canva',
    url: '/portfolio/canva',
  },
];

const chromaGridItems = portfolioItems.map(item => ({
    image: item.image,
    title: item.title,
    subtitle: 'View Project',
    url: item.url,
    borderColor: '#4F46E5', 
    gradient: 'linear-gradient(145deg, #000, #111)',
}));

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A selection of our work. Interact with the grid below.
        </p>
      </header>

      <div className="relative h-[900px]">
        <ChromaGrid items={chromaGridItems} />
      </div>
    </div>
  );
}
