import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null;
        const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initial = stored ?? preferred;
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    function toggle() {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    }

    return (
        <Button variant="ghost" size="icon-sm" onClick={toggle}>
            {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </Button>
    );
}
