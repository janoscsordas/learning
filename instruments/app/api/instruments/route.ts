import { z } from "zod";
import { NextResponse } from "next/server";
import { Instrument } from "@/app/page";

export async function POST(request: Request) {
    const body = await request.json()

    const validatedFields = z.object({
        name: z.string().min(1, { message: "A nehév megadása Kötelezes!" }).max(50, { message: "Túl hosszú a nehév! Maximum 50 karakter lehet!" }),
        price: z.number().min(1, { message: "Az ár megadása Kötelezes!" }),
        quantity: z.number().min(1, { message: "A mennyiség Kötelezes!" }),
        imageURL: z.string().min(1, { message: "A kep URL megadása Kötelezes!" }),
    }).safeParse(body)

    if (!validatedFields.success) {
        return NextResponse.json({ errors: validatedFields.error.flatten().fieldErrors }, { status: 400 });
    }

    
}