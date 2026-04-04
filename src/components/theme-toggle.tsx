import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">("theme-light");

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setThemeState(isDarkMode ? "dark" : "theme-light");
    }, []);

    useEffect(() => {
        const isDark = theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    function toggle() {
        setThemeState(prev => prev === "theme-light" ? "dark" : "theme-light");
    }

    return (
        <Button variant="ghost" size="icon-sm" onClick={toggle}>
            <Sun className="size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-90" />
            <Moon className="absolute size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
        </Button>
    );
}
