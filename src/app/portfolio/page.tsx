import DomeGallery from '@/components/dome-gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Noir',
  description: 'Explore the creative work and projects by Studio Noir.',
};

export default function PortfolioPage() {
  const portfolioImages = [
    { src: '/blender_logo.png', alt: 'Blender' },
    { src: '/aftereffects_logo.png', alt: 'After Effects' },
    { src: '/canva_logo.png', alt: 'Canva' },
    { src: '/davinci_logo.png', alt: 'DaVinci Resolve' },
    { src: 'https://picsum.photos/seed/flstudio/600/400', alt: 'FL Studio' },
    { src: '/unity_logo.png', alt: 'Unity' },
    { src: '/webdev_logo.png', alt: 'Web Dev' },
    { src: '/h_logo.png', alt: 'Houdini' },
  ];

  return (
    <div className="w-screen h-screen">
       <DomeGallery
          images={portfolioImages}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
    </div>
  );
}
