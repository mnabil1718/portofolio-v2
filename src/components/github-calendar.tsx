import { GitHubCalendar as Calendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

const catppuccinLight = {
    light: [
        'oklch(0.9578 0.0058 264.5321)',
        'oklch(0.78 0.08 297)',
        'oklch(0.70 0.14 297)',
        'oklch(0.62 0.20 297)',
        'oklch(0.4 0.25 297)',
    ],
};

const catppuccinDark = {
    dark: [
        'oklch(0.2155 0.0254 284.0647)',   // level 0 - background dark (empty)
        'oklch(0.45 0.08 297)',             // level 1
        'oklch(0.55 0.14 297)',             // level 2
        'oklch(0.67 0.20 297)',             // level 3
        'oklch(0.7871 0.1187 304.7693)',    // level 4 - primary dark
    ],
};

export function GithubCalendar() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const update = () => {
            setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        };
        update();
        const observer = new MutationObserver(update);
        observer.observe(document.documentElement, { attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <Calendar
            username="mnabil1718"
            theme={theme === 'dark' ? catppuccinDark : catppuccinLight}
            colorScheme={theme}
            showColorLegend
        />
    );
}
