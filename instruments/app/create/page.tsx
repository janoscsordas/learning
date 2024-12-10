"use client"

import { createInstrument, State } from "@/action/instrument.action";
import { Button, Text, TextField } from "@radix-ui/themes";
import { Link } from "lucide-react";
import { useActionState } from "react";

export default function CreatePage() {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createInstrument, initialState);

    return (
        <section className="flex justify-center items-center flex-col min-h-[calc(100dvh-64px)]">
            <Text size="5" weight="medium" className="mb-4">Hangszer hozzáadása</Text>
            <form className="border w-1/4 rounded-lg shadow-lg p-5" action={formAction}>
                <div className="mb-4">
                    <label htmlFor="name">
                        <Text size="3" weight="medium">Hangszer neve:</Text>
                    </label>
                    <TextField.Root 
                        name="name" 
                        id="name"
                        placeholder="Hangszer neve" 
                        type="text"
                    />
                </div>
                {state.errors?.name && state.errors.name.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
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
                {state.errors?.price && state.errors.price.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
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
                {state.errors?.quantity && state.errors.quantity.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
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
                {state?.errors?.imageURL && state?.errors?.imageURL.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
                {state?.message && <p className="text-red-500">{state.message}</p>}
                <Button color="plum" type="submit" className="w-full">
                    <Text size="3" weight="medium">Mentés</Text>
                </Button>
            </form>
        </section>
    )
}