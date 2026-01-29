'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedItem = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}: {
  children: React.ReactNode;
  delay?: number;
  index: number;
  onMouseEnter: () => void;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

type PortfolioItem = {
    name: string;
    slug: string;
    image: string;
}

type AnimatedListProps = {
  items?: PortfolioItem[];
  onItemSelect?: (item: PortfolioItem, index: number) => void;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  initialSelectedIndex?: number;
};

const AnimatedList = ({
  items = [],
  onItemSelect,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  initialSelectedIndex = -1,
}: AnimatedListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleItemMouseEnter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item: PortfolioItem, index: number) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );
  
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);
  
  useEffect(() => {
    const listEl = listRef.current;
    if (listEl) {
      const { scrollHeight, clientHeight } = listEl;
      setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : 1);
    }
  }, [items]);


  return (
    <div className={`relative w-full max-w-lg ${className}`}>
      <div
        ref={listRef}
        className="h-[50vh] overflow-y-auto p-4 scrollbar-hide"
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={item.slug}
            delay={0.1}
            index={index}
            onMouseEnter={() => handleItemMouseEnter(index)}
            onClick={() => handleItemClick(item, index)}
          >
            <div
              className={`p-4 bg-black/20 backdrop-blur-sm rounded-lg flex items-center gap-6 ${
                selectedIndex === index ? 'bg-white/10' : ''
              } ${itemClassName}`}
            >
              <div className="relative w-16 h-16 group shrink-0">
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute top-1 left-1 h-full w-full object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(94%) saturate(2811%) hue-rotate(228deg) brightness(101%) contrast(102%)' }}
                />
                <img
                  src={item.image}
                  alt={`${item.name} logo`}
                  className="absolute top-0 left-0 h-full w-full object-contain transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
            </div>
          </AnimatedItem>
        ))}
      </div>
      <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
    </div>
  );
};

export default AnimatedList;
