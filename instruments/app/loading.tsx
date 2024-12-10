import { Spinner } from "@radix-ui/themes";

export default function Loading() {
    return (
        <section className="flex justify-center items-center flex-col min-h-[calc(100dvh-64px)]">
            <Spinner size="3" />
        </section>
    );
}