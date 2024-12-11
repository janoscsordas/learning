"use client"

import { createInstrument, State } from "@/action/instrument.action";
import { Button, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { Link } from "lucide-react";

export default function CreatePage() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const name = form.guitarName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const imageURL = form.imageURL.value;

        console.log(name, price, quantity, imageURL);

        const response = await axios.post("https://kodbazis.hu/api/instruments", JSON.stringify({ name, price, quantity, imageURL }), { withCredentials: true });

        if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.statusText || "Hiba történt a hangszer hozzáadása Sorosban");
        }

        form.reset();
    }

    return (
        <section className="flex justify-center items-center flex-col min-h-[calc(100dvh-64px)]">
            <Text size="5" weight="medium" className="mb-4">Hangszer hozzáadása</Text>
            <form className="border w-1/4 rounded-lg shadow-lg p-5" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name">
                        <Text size="3" weight="medium">Hangszer neve:</Text>
                    </label>
                    <TextField.Root 
                        name="guitarName" 
                        id="guitarName"
                        placeholder="Hangszer neve" 
                        type="text"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price">
                        <Text size="3" weight="medium">Ár:</Text>
                    </label>
                    <TextField.Root 
                        name="price" 
                        id="price"
                        placeholder="Hangszer ára" 
                        type="number"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity">
                        <Text size="3" weight="medium">Hangszer mennyiség:</Text>
                    </label>
                    <TextField.Root 
                        name="quantity" 
                        id="quantity"
                        placeholder="Hangszer mennyiség" 
                        type="number"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageURL">
                        <Text size="3" weight="medium">Hangszer kép URL:</Text>
                    </label>
                    <TextField.Root 
                        name="imageURL" 
                        id="imageURL"
                        placeholder="Hangszer kép URL" 
                        type="text"
                    >
                        <TextField.Slot slot="left">
                            <Link width={16} height={16} />
                        </TextField.Slot>
                    </TextField.Root>
                </div>
                <Button color="plum" type="submit" className="w-full">
                    <Text size="3" weight="medium">Mentés</Text>
                </Button>
            </form>
        </section>
    )
}