import { cn } from "@/lib/utils";

export function NavLink({ id, label, active = false, url = "#", onClick }: { id: number, label: string, active?: boolean, url?: string, onClick: () => void }) {
    return <a href={url} onClick={onClick} className={cn("hover:underline cursor-pointer px-2 py-1 font-semibold", active ? "bg-chart-3 text-background" : "text-foreground")}>{id}: {label}</a>
}
