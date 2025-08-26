"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, BookMarked, Clock, Award, Users, Sparkles, BarChart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SidebarItemProps {
    icon: React.ReactNode
    label: string
    href: string
    isActive: boolean
    isCollapsed: boolean
}

function SidebarItem({ icon, label, href, isActive, isCollapsed }: SidebarItemProps) {
    return (
        <Link href={href}>
            <Button
                variant="ghost"
                className={cn(
                    "w-full justify-start gap-3 rounded-lg px-3 py-2 text-left",
                    isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                )}
            >
                {icon}
                {!isCollapsed && <span>{label}</span>}
            </Button>
        </Link>
    )
}

export function Sidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const sidebarItems = [
        { icon: <Home className="h-5 w-5" />, label: "Home", href: "/" },
        { icon: <BookOpen className="h-5 w-5" />, label: "Currently Reading", href: "/reading" },
        { icon: <BookMarked className="h-5 w-5" />, label: "My Bookshelves", href: "/bookshelves" },
        { icon: <Clock className="h-5 w-5" />, label: "Want to Read", href: "/want-to-read" },
        { icon: <Award className="h-5 w-5" />, label: "Leaderboard", href: "/leaderboard" },
        { icon: <Users className="h-5 w-5" />, label: "Friends", href: "/friends" },
        { icon: <Sparkles className="h-5 w-5" />, label: "AI Recommendations", href: "/recommendations" },
        { icon: <BarChart className="h-5 w-5" />, label: "Reading Goals", href: "/goals" },
    ]

    return (
        <div
            className={cn(
                "h-[calc(100vh-4rem)] border-r bg-white/50 p-4 transition-all duration-300",
                isCollapsed ? "w-[70px]" : "w-[240px]"
            )}
        >
            <div className="flex flex-col h-full">
                <div className="space-y-2 flex-1">
                    {sidebarItems.map((item) => (
                        <SidebarItem
                            key={item.href}
                            icon={item.icon}
                            label={item.label}
                            href={item.href}
                            isActive={pathname === item.href}
                            isCollapsed={isCollapsed}
                        />
                    ))}
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="self-end mt-4"
                >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    )
}
