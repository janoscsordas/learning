"use client"

import { Button, Flex } from "@radix-ui/themes";
import { BadgePlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

export default function Header() {
    return (
        <nav className="px-4 py-2 w-full flex items-center justify-between fixed top-0 left-0 z-50 border-b bg-white">
            <Flex gap="2">
                <Image 
                    src="/live-music.png"
                    alt="logo"
                    width={24}
                    height={24}
                />
                <Link href="/" className="text-lg font-medium">Hangszerkiállítás</Link>
            </Flex>
            <Flex gap="4">
                <Link href="/create">
                    <Button color="teal" className="cursor-pointer">
                        <BadgePlus className="w-5 h-5" /> Új hozzáadás
                    </Button>
                </Link>
            </Flex>
        </nav>
    )
}