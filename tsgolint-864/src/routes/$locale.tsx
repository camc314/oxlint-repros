import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
    component: LocaleLayout,
});

function LocaleLayout() {
    // tsgolint: "Unsafe assignment of an any value" ❌
    // tsgo: { locale: string } ✅
    const params = Route.useParams();

    // tsgolint: "Unsafe member access .locale on an any value" ❌
    // tsgo: string ✅
    const locale = params.locale;
}