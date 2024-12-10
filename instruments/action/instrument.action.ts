"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export type State = {
    message?: string | null,
    errors?: {
        name?: string[],
        price?: string[],
        quantity?: string[],
        imageURL?: string[],
    }
}

const schema = z.object({
    name: z.string().min(1, { message: "A név megadása kötelező!" }).max(50, { message: "Túl hosszú a név! Maximum 50 karakter lehet!" }),
    price: z.number().min(1, { message: "Az ár megadása kötelező!" }),
    quantity: z.number().min(1, { message: "A mennyiség kötelező!" }),
    imageURL: z.string().min(1, { message: "A kép URL megadása kötelező!" }),
})

export async function createInstrument(prevState: State, formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get("name"),
        price: Number(formData.get("price")),
        quantity: Number(formData.get("quantity")),
        imageURL: formData.get("imageURL"),
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors };
    }

    const result = await fetch("https://kodbazis.hu/api/instruments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data),
        credentials: "include",
    })

    if (!result.ok) {
        return { message: 'Hiba történt a hangszer hozzáadása közben' };
    }

    revalidatePath("/")
    redirect("/")
}