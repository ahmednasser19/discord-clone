"use client"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider

} from '@/components/ui/tooltip'

interface ActionTooltipProps {
    label: string;
    children: React.ReactNode;
    side?: "right" | "top" | "bottom" | "left";
    align?: "start" | "center" | "end"
}

export const ActionTooltip = ({ label, children, side = "right", align = "center" }: ActionTooltipProps) => {
    return (

        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className='font-semibold text-sm capitalize'>
                        {label.toLocaleLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}