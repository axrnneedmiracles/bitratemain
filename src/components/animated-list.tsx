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

type AnimatedListProps = {
  items?: string[];
  onItemSelect?: (item: string, index: number) => void;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  initialSelectedIndex?: number;
};

const AnimatedList = ({
  items = [
    'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6',
    'Item 7', 'Item 8', 'Item 9', 'Item 10', 'Item 11', 'Item 12',
    'Item 13', 'Item 14', 'Item 15',
  ],
  onItemSelect,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  initialSelectedIndex = -1,
}: AnimatedListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const handleItemMouseEnter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item: string, index: number) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
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

  return (
    <div className={`relative w-full max-w-lg ${className}`}>
      <div
        ref={listRef}
        className="p-4"
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => handleItemMouseEnter(index)}
            onClick={() => handleItemClick(item, index)}
          >
            <div
              className={`p-4 bg-black/20 backdrop-blur-sm rounded-lg ${
                selectedIndex === index ? 'bg-white/10' : ''
              } ${itemClassName}`}
            >
              <p className="text-white m-0">{item}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;
