export function Command({ cmd = "ls ." }: { cmd?: string }) {
    return <span className="text-muted-foreground/80 mb-2 text-sm">~$ {cmd}</span>
}
