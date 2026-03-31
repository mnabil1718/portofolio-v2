import { Menu, X } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navs = [
    { id: 0, label: "home", url: "/" },
    { id: 1, label: "projects", url: "/projects" },
];

function getActiveLabel() {
    if (typeof window === "undefined") return "home";
    const path = window.location.pathname;
    const match = navs.find((n) =>
        n.url === "/" ? path === "/" : path.startsWith(n.url)
    );
    return match?.label ?? "home";
}

export function Navbar() {
    const [activeId, setActiveId] = useState(getActiveLabel);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleNavClick(label: string) {
        setActiveId(label);
        setMobileOpen(false);
    }

    return (
        <>
            <nav className="p-5 border-b w-full sticky top-0 z-50 backdrop-blur-lg">
                <div className="flex justify-between items-center">
                    <div />
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
                    <div className="flex gap-2 items-center">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 pb-2">
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
                </div>
            </nav>
        </>
    );
}
