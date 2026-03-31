import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof document === "undefined") return "dark"; // SSR fallback
        return document.documentElement.classList.contains("dark") ? "dark" : "light";
    });


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
