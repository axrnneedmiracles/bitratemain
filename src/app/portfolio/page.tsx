'use client';

import AnimatedList from '@/components/animated-list';
import Hyperspeed from '@/components/hyperspeed';

const portfolioItems = [
    { name: 'BLENDER', slug: 'blender' },
    { name: 'DAVINCI', slug: 'davinci' },
    { name: 'AFTER EFFECTS', slug: 'after-effects' },
    { name: 'FL STUDIO', slug: 'fl-studio' },
    { name: 'UNITY', slug: 'unity' },
    { name: 'HOUDINI', slug: 'houdini' },
    { name: 'WEB DEV', slug: 'web-dev' },
    { name: 'CANVA', slug: 'canva' },
];

export default function PortfolioPage() {
  const handleSelect = (item: string) => {
    const selectedItem = portfolioItems.find(p => p.name === item);
    if (selectedItem) {
        window.open(`/portfolio/${selectedItem.slug}`, '_blank');
    }
  }

  return (
    <div className="w-screen h-screen relative">
       <div className="absolute inset-0 z-0">
        <Hyperspeed />
       </div>
       <div className="w-full h-full flex items-center justify-center relative z-10">
        <AnimatedList
          items={portfolioItems.map(item => item.name)}
          onItemSelect={handleSelect}
          showGradients
          enableArrowNavigation
          displayScrollbar={false}
        />
      </div>
    </div>
  );
}
