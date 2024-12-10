import { Card, Inset, Strong, Text } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";

export type Instrument = {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  imageURL: string;
}

export default async function Home() {
  const response = await axios.get("https://kodbazis.hu/api/instruments", { withCredentials: true });

  if (!response.status) {
    return (
      <section className="flex justify-center items-center flex-col min-h-[calc(100dvh-64px)]">
        <h1 className="text-3xl font-bold text-center">Hiba történt a lekérés során</h1>
      </section>
    );
  }

  const instruments: Instrument[] = response.data;

  return (
    <section className="w-full min-h-[calc(100dvh-64px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[85%] mx-auto pb-8">
        {instruments.map((instrument) => (
          <Link href={`/${instrument.id}`} key={instrument.id}>
            <Card size="2" key={instrument.id}>
              <Inset clip="padding-box" side="top" pb="current" className="border-b mb-2">
                <img
                  src={instrument.imageURL}
                  alt={instrument.name}
                  style={{
                    display: "block",
                    objectFit: "contain",
                    width: "100%",
                    height: 350,
                  }}
                />
              </Inset>
              <Text as="p" size="3" weight="medium">
                {instrument.name}
              </Text>
              <Text as="p" size="2" weight="bold" className="my-1">
                {instrument.brand}
              </Text>
              <Text as="p" size="2" weight="bold" color="grass">
                {instrument.price} Ft
              </Text>
              <Text as="p" size="2" weight="bold" color="tomato">
                {instrument.quantity} db
              </Text>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
