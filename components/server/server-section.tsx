"use client"

import { ServerWithMemberWithProfiles } from "@/types";
import { ChannelType, MemberRole } from "@prisma/client";
import { ActionTooltip } from "@/components/actions-tooltip";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";


interface ServerSectionProps {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members";
    channelType?: ChannelType;
    server?: ServerWithMemberWithProfiles;
}
export const ServerSection = ({
    label,
    role,
    sectionType,
    channelType,
    server
}: ServerSectionProps) => {
    const { onOpen } = useModal()
    return (
        <div className="flex items-center justify-between py-2">
            <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
                {label}
            </p>
            {role !== MemberRole.GUEST && sectionType === "channels" && (
                <ActionTooltip label="Create Channel" side="top">
                    <button onClick={() => onOpen("createChannel", { channelType })} className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 transition">
                        <Plus className="w-4 h-4" />
                    </button>
                </ActionTooltip>
            )}
            {role === MemberRole.ADMIN && sectionType === "members" && (
                <ActionTooltip label="Manage members" side="top">
                    <button onClick={() => onOpen("members", { server })} className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-200 transition">
                        <Settings className="w-4 h-4" />
                    </button>
                </ActionTooltip>
            )}

        </div>
    )
}