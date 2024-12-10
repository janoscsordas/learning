"use client"

import { Button, Flex } from "@radix-ui/themes";

export default function Buttons() {
    return (
        <Flex justify="between" className="mt-4">
            <Button color="orange" className="text-white font-bold py-2 px-4 rounded">
                Szerkesztés
            </Button>
            <Button color="red" className="text-white font-bold py-2 px-4 rounded">
                Törlés
            </Button>
        </Flex>
    );
}