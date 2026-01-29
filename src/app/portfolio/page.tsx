'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

type PortfolioItem = {
  name: string;
  slug: string;
  image: string;
}

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pageElement = pageRef.current;
    if (!pageElement) return;

    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        // Prevent the default page scroll behavior
        event.preventDefault();
        // Apply the scroll delta to our list container
        scrollContainerRef.current.scrollTop += event.deltaY;
      }
    };

    // Add the event listener to the main page container.
    // { passive: false } is required to allow preventDefault().
    pageElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // Clean up the event listener when the component unmounts.
      pageElement.removeEventListener('wheel', handleWheel);
    };
  }, []); // The empty dependency array ensures this effect runs only once.

  const handleItemClick = (item: PortfolioItem) => {
    if (item && item.slug) {
      window.open(`/portfolio/${item.slug}`, '_blank');
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div ref={pageRef} className="w-full h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-center shrink-0 mb-12">
        Our Portfolio
      </h1>
      
      <div 
        ref={scrollContainerRef}
        className="w-full max-w-lg h-[60vh] overflow-y-auto scrollbar-hide p-4"
      >
        <ul
          className="list-none m-0 p-0"
        >
          {portfolioItems.map((item) => (
            <motion.li
              key={item.slug}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4"
            >
              <div
                onClick={() => handleItemClick(item)}
                className="p-4 bg-black/20 backdrop-blur-sm rounded-lg flex items-center gap-6 cursor-pointer transition-colors duration-200 hover:bg-white/10"
              >
                <div className="relative w-16 h-16 group shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1 left-1 h-full w-full object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(5833%) hue-rotate(240deg) brightness(102%) contrast(105%)' }}
                  />
                  <img
                    src={item.image}
                    alt={`${item.name} logo`}
                    className="absolute top-0 left-0 h-full w-full object-contain transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
