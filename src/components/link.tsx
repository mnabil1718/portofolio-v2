export function Link({ label, href = "#" }: { label: string, href?: string }) {
    return <a href={href}
        className="text-muted-foreground hover:text-foreground text-sm hover:underline">[{label}]</a>

}
