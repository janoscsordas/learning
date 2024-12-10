import { type Instrument } from "@/app/page";
import Buttons from "@/components/buttons";
import { Card, Inset, Text } from "@radix-ui/themes";
import axios from "axios";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ instrumentId: string }>
}) {
    const instrumentId = (await params).instrumentId;

    const response = await axios.get(`https://kodbazis.hu/api/instruments/${instrumentId}`, { withCredentials: true });
    
    if (!response.data) {
        return notFound();
    }

    if (!response.status) {
        throw new Error(response.statusText || "Hiba történt a lekérés során");
    }


    const instrument: Instrument = response.data;

    return (
        <section className="w-full min-h-[calc(100dvh-64px)]">
            <Card size="2" className="w-1/2 mx-auto">
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
              <Buttons />
            </Card>
        </section>
    );
}