import Image from "next/image"

export type APOD = {
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
}

async function getTodaysAPOD() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`, { next: { revalidate: 36000 } });

    if (!res.ok) {
        return "Hiba a kép lekérése közben!";
    }

    return await res.json() as APOD;
}

export default async function Home() {
    const apod = await getTodaysAPOD();

    if (typeof apod == "string") {
        return <h1 className="text-3xl font-bold text-center">{apod}</h1>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-6">A mai napi APOD kép</h1>
            <section className="flex gap-6 mb-10 items-center flex-col md:flex-row">
                <div className="w-full">
                    <img src={apod.url} alt="APOD Picture" className="block mx-auto mt-5 aspect-square w-[75%] h-[75%] rounded-xl" />
                </div>
                <div className="w-full">
                    <div className="w-[75%] text-center md:text-left mx-auto">
                        <h2 className="text-2xl mb-5">A kép címe: <span className="font-bold">{apod.title}</span></h2>
                        <p className="mb-5 text-justify">Magyarázat: {apod.explanation}</p>
                        <a href={apod.hdurl} className="text-blue-500" target="_blank">Teljes felbontású kép megtekintése</a>
                        <p className="mt-10 text-sm">Dátum: {apod.date}</p>
                    </div>
                </div>
            </section>
            <section className="mt-16">
                <h2 className="text-center text-2xl font-semibold">Kérj le egy random napi képet</h2>
                <p className="text-center text-sm">Az alábbi form-ban adhatja meg a kívánt kép dátumát.</p>

                <div className="flex gap-6 my-10 items-center">
                </div>
            </section>
        </>
    );
}
