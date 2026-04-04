import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";


const contacts = [
    {
        label: "Email",
        icon: Mail,
        value: "mnabil1718@gmail.com",
        href: "mailto:mnabil1718@gmail.com",
    },
    {
        label: "Github",
        icon: Github,
        value: "https://github.com/mnabil1718",
        href: "https://github.com/mnabil1718",
    },
    {
        label: "Linkedin",
        icon: Linkedin,
        value: "https://www.linkedin.com/in/muhammad-nabil-dev",
        href: "https://www.linkedin.com/in/muhammad-nabil-dev",
    },
];

export function Ctx() {
    return (
        <div className="grid gap-x-6 gap-y-1.5 font-mono"
        >
            {contacts.map(({ label, icon: Icon, value, href }) => (
                <a href={href} target="_blank" rel="noopener" className="group">
                    <Item variant="outline" size="sm" className="rounded-none">
                        <ItemMedia variant="default">
                            <Icon className="size-4" />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle className="text-sm">{label}</ItemTitle>
                            <ItemDescription className="text-xs group-hover:underline">
                                {value}
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <ExternalLink size={16} />
                        </ItemActions>
                    </Item>
                </a>
            ))}
        </div>
    );
}


