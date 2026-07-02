import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"; // 1. Importamos el tipo

interface StatCardProps{
    smallText:string
    bigText:string
    icon: LucideIcon
}

export function StatCard({smallText,bigText, icon : Icon}:StatCardProps) {
  return (
    <Card className="flex flex-row w-full max-w-70 gap-4 p-4 bg-[#121212] border-zinc-800 text-white">
      {/* Icon Container */}
      <div className="p-3 rounded-xl bg-orange-950/40 text-orange-500">
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-zinc-400">{smallText}</span>
        <span className="text-2xl font-bold leading-none">{bigText}</span>
      </div>
    </Card>
  )
}