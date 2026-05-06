import { cn } from "@/lib/utils";
import { ChevronRight, CornerDownLeft } from "lucide-react";
import { type Dispatch, type ReactNode, type SetStateAction, type KeyboardEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Input } from "./ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

interface CliProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

interface Guide {
    icon: ReactNode;
    label: string;
}

const guides: Guide[] = [
    {
        icon: <span>j | k</span>,
        label: "navigate"
    },
    {
        icon: <CornerDownLeft className="size-3" />,
        label: "select"
    },
    {
        icon: <pre>tab</pre>,
        label: "completion"
    },
    {
        icon: <pre>esc</pre>,
        label: "close"
    },
]

export function Cli(
    {
        open,
        setOpen,
    }: CliProps) {

    if (!open) return null

    const keyPressListener = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === "Escape") {
            return setOpen(false)
        }

    }

    useEffect(() => {
        document.body.classList.add("overflow-hidden")
        return () => document.body.classList.remove("overflow-hidden")
    }, [])

    return createPortal(
        <div className={
            cn(
                !open ? "hidden" : "",
                "fixed z-999 inset-0 flex flex-col h-screen w-screen bg-background/40 backdrop-blur-md"
            )
        }>
            <nav className="p-5 border-b text-xs flex items-center justify-between">
                <span>
                    <span className="text-chart-4">
                        mnabil@portfolio
                    </span>
                    {" "} ~</span>
                <span>esc to close</span>
            </nav>
            <main className="flex-1 flex flex-col">
                <InputGroup
                    className="bg-transparent! border-none! outline-none! focus:outline-none! focus:ring-0! rounded-none!"
                >
                    <InputGroupInput
                        autoFocus
                        onKeyDown={keyPressListener}
                    />
                    <InputGroupAddon align="inline-start">
                        <ChevronRight className="text-muted-foreground" />
                    </InputGroupAddon>
                </InputGroup>
                <div className="flex-1 bg-red-500">

                </div>
            </main>
            <footer className="border-t text-xs p-5 flex flex-wrap items-center gap-4">
                {
                    guides.map((g, i) => {
                        return (
                            <div key={i} className="flex items-center gap-2">
                                {g.icon}
                                {g.label}
                            </div>
                        )
                    })
                }
            </footer>
        </div >,
        document.body
    )
}
