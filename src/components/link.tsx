export function Link({ label, href = "#", newTab = true }: { label: string, href?: string, newTab?: boolean }) {
    return <a href={href}
        target={newTab ? "_blank" : "_self"}
        className="text-muted-foreground hover:text-foreground hover:underline">[{label}]</a>

}
