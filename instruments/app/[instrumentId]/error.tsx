"use client"

import { Button } from "@radix-ui/themes";

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <section className="flex justify-center items-center flex-col min-h-[calc(100dvh-64px)]">
            <h1 className="text-3xl font-bold text-center">Hiba történt az oldal betöltésekor</h1>
            <p>{error.message}</p>
            <Button color="red" onClick={() => history.back()}>Vissza az előző oldalra</Button>
        </section>
    );
}