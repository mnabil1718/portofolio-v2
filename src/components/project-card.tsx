import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { Button } from "./ui/button"
import { ChevronRight, ExternalLink, Github } from "lucide-react"

export type ProjectCardProp = {
    id: number;
    title: string;
    description: string;
    deployment_link: string | null;
    github_link: string | null;
}

export function ProjectCard({ p }: { p: ProjectCardProp }) {
    return <Item variant={"outline"} className="gap-1 p-3 group opacity-70 hover:opacity-100">
        <ItemMedia variant="default">
            <ChevronRight className="size-4" />
        </ItemMedia>
        <ItemContent>
            <ItemTitle className="text-sm">{p.title}</ItemTitle>
            <ItemDescription title={p.description} className="text-xs line-clamp-1">{p.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
            <a href={p.deployment_link ? p.deployment_link : "#"} target={p.deployment_link ? "_blank" : ""}>
                <Button variant={"ghost"} size={"icon-sm"} disabled={!p.deployment_link}>
                    <ExternalLink className="size-4" />
                </Button>
            </a>
            <a href={p.github_link ? p.github_link : "#"} target={p.github_link ? "_blank" : ""}>
                <Button variant={"ghost"} size={"icon-sm"} disabled={!p.github_link}>
                    <Github className="size-4" />
                </Button>
            </a>
        </ItemActions>
    </Item>
}
