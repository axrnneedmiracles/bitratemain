'use client';

import { usePathname } from 'next/navigation';
import SplashCursor from '@/components/splash-cursor';

export default function ConditionalSplashCursor() {
    const pathname = usePathname();
    const isPortfolioPage = pathname === '/portfolio';

    if (isPortfolioPage) {
        return null;
    }

    return <SplashCursor />;
}
