"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Bell, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
    const pathname = usePathname()
    const isAuthenticated = true
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Readora</span>
                </Link>

                {isAuthenticated && pathname !== '/auth/signin' && pathname !== '/auth/register' && (
                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search books, authors, users..."
                                className="pl-10 rounded-full border-gray-200 focus:border-primary"
                            />
                        </div>
                    </div>
                )}

                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <>
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                                    3
                                </span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="h-8 w-8 cursor-pointer">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                        <AvatarFallback>
                                            <User className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link href="/profile" className="w-full">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/bookshelves" className="w-full">My Bookshelves</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/goals" className="w-full">Reading Goals</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Log out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link href="/auth/signin">
                                <Button variant="ghost" className="rounded-full">
                                    Sign in
                                </Button>
                            </Link>
                            <Link href="/auth/register">
                                <Button className="rounded-full bg-primary hover:bg-primary/90">
                                    Sign up
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
