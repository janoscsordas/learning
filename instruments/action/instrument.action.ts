"use server"

import axios from "axios"
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

    const result = await axios.post("https://kodbazis.hu/api/instruments", validatedFields.data, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    })

    if (result.status !== 200 && result.status !== 201) {
        return { message: 'Hiba történt a hangszer hozzáadása közben' };
    }

    revalidatePath("/")
    redirect("/")
}