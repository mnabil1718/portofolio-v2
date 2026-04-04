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
import type { Project } from "@/schemas/project"


export function ProjectCard({ p }: { p: Project }) {
    return (
        <div
            onClick={() => window.location.href = `/projects/${p.slug}`}
            className="cursor-pointer"
        >
            <Item variant={"outline"} className="gap-1 p-3 group md:opacity-70 hover:opacity-100 rounded-none">
                <div className="aspect-video overflow-hidden mb-5 bg-muted flex justify-center relative">
                    <img src={p.image.src} alt={p.metatitle} className="h-full w-auto object-contain" />
                </div>
                <ItemMedia variant="default">
                    <ChevronRight className="size-4" />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className="text-sm group-hover:underline">{p.title}</ItemTitle>
                    <ItemDescription title={p.desc} className="text-xs line-clamp-1">{p.desc}</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <a
                        href={p.live_url ?? "#"}
                        target={p.live_url ? "_blank" : ""}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button variant={"ghost"} size={"icon-sm"} disabled={!p.live_url}>
                            <ExternalLink className="size-4" />
                        </Button>
                    </a>
                    <a
                        href={p.github_url ?? "#"}
                        target={p.github_url ? "_blank" : ""}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button variant={"ghost"} size={"icon-sm"} disabled={!p.github_url}>
                            <Github className="size-4" />
                        </Button>
                    </a>
                </ItemActions>
            </Item >
        </div >
    );
}
