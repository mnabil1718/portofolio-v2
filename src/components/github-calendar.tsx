import { GitHubCalendar as Calendar } from 'react-github-calendar';

const catppuccinLight = {
    light: [
        'oklch(0.9578 0.0058 264.5321)',   // level 0 - background (empty)
        'oklch(0.78 0.08 297)',             // level 1
        'oklch(0.70 0.14 297)',             // level 2
        'oklch(0.62 0.20 297)',             // level 3
        'oklch(0.4 0.25 297)',              // level 4 - darkest
    ],
};

export function GithubCalendar() {
    return (
        <Calendar
            username="mnabil1718"
            colorScheme="light"
            showColorLegend
        />
    );
}
