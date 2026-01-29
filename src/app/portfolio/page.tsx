'use client';

import PixelCard from '@/components/pixel-card';

const portfolioItems = [
    { name: 'BLENDER', slug: 'blender', image: '/blender_logo.png' },
    { name: 'DAVINCI', slug: 'davinci', image: '/davinci_logo.png' },
    { name: 'AFTER EFFECTS', slug: 'after-effects', image: '/aftereffects_logo.png' },
    { name: 'FL STUDIO', slug: 'fl-studio', image: '/flstudio_logo.png' },
    { name: 'UNITY', slug: 'unity', image: '/unity_logo.png' },
    { name: 'HOUDINI', slug: 'houdini', image: '/h_logo.png' },
    { name: 'WEB DEV', slug: 'web-dev', image: '/webdev_logo.png' },
    { name: 'CANVA', slug: 'canva', image: '/canva_logo.png' },
];

export default function PortfolioPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-12 text-center">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {portfolioItems.map((item) => (
            <PixelCard 
              key={item.slug} 
              variant="pink"
              onClick={() => window.open(`/portfolio/${item.slug}`, '_blank')}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <img src={item.image} alt={item.name} className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                </div>
              </div>
            </PixelCard>
        ))}
      </div>
    </div>
  );
}
