import Link from 'next/link';
import { Film, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg font-headline">Studio Noir</span>
          </div>
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            &copy; {currentYear} Studio Noir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
