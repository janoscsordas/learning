import { Card, Inset, Text } from "@radix-ui/themes"
import { Month } from "../../lib/content"

export default function MonthCard({
    month
}: {
    month: Month
}) {
    return (
        <Card
            id={month.evszak === "nyar" ? "nyar" : month.evszak === "tavasz" ? "tavasz" : month.evszak === "tel" ? "tel" : "osz"}
            style={{
                width: 350,
                height: 450,
                overflow: "hidden",
            }}
        >
		<Inset clip="padding-box" side="top" pb="current">
			<img
				src={month.photoUrl}
				alt={month.name}
				style={{
					display: "block",
					objectFit: "cover",
					width: "100%",
					height: 300,
					backgroundColor: "var(--gray-5)",
				}}
			/>
		</Inset>
		<Text as="p" size="4" weight="bold">
			{month.name}
		</Text>
        <Text as="p">
            {month.evszak === "osz" ? "Ősz" : month.evszak === "tel" ? "Tél" : month.evszak === "tavasz" ? "Tavasz" : "Nyár"}
        </Text>
        <Text as="p" weight={"light"}>
            {month.leiras}
        </Text>
        <a href="#" className="underline text-blue-500">Bővebben</a>
	</Card>
    )
}