import { Terminal } from "lucide-react"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { TooltipProviderWrapper } from "./tooltip-provider-wrapper"
import { useState } from "react"
import { Cli } from "./cli"

const CliToggle = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
            <Cli
                open={open}
                setOpen={setOpen}
            />
            <TooltipProviderWrapper>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant={"ghost"}
                            onClick={handleClick}
                        >
                            <Terminal className="size-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        CLI Mode
                    </TooltipContent>
                </Tooltip>
            </TooltipProviderWrapper>
        </>
    )
}

export default CliToggle
