import { NavLink } from "./nav-link"
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

const navs = [
    { id: 0, label: "tools", url: "#tools" },
    { id: 1, label: "experience", url: "#experience" },
    { id: 2, label: "projects", url: "#projects" },
];

export function Navbar() {
    const [activeId, setActiveId] = useState("tools");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 1.0 }
        );

        navs.forEach((n) => {
            const el = document.getElementById(n.label);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    function handleNavClick(label: string) {

        setActiveId(label);
    }

    return (
        <nav className="p-5 border-b w-full sticky top-0 z-50 flex justify-between backdrop-blur-lg">
            <div></div>
            <div className="hidden md:flex items-center gap-5 text-xs">
                {navs.map((n) => (
                    <NavLink
                        key={n.id}
                        id={n.id}
                        label={n.label}
                        url={n.url}
                        active={activeId === n.label}
                        onClick={() => handleNavClick(n.label)}
                    />
                ))}
            </div>
            <div>
                <ThemeToggle />
            </div>
        </nav>
    );
}
