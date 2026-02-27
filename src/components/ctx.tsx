const contacts = [
    { label: "email", value: "mnabil1718@gmail.com" },
    { label: "github", value: "https://github.com/mnabil1718" },
    { label: "linkedin", value: "www.linkedin.com/in/muhammad-n-3ba978109" },
];

const pad = (str: string, len: number) => str.padEnd(len, " ");
const col1 = 12;

const header = `${pad("CHANNEL", col1)}| VALUE`;
const divider = `${"-".repeat(col1)}+-${"-".repeat(20)}`;
const rows = contacts.map((c) => `${pad(c.label, col1)}| ${c.value}`).join("\n");

export function Ctx() {
    return (
        <pre className="font-mono text-sm mt-3 text-foreground">
            <span className="text-muted-foreground">{header}</span>{"\n"}
            <span className="text-muted-foreground">{divider}</span>{"\n"}
            {rows}
        </pre>
    );
}
