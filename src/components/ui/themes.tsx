import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/themes")({
  head: () => ({ meta: [{ title: "Themes | PortfolioPro AI" }] }),
  component: () => <ScreenFrame src="/screens/themes.html" title="Themes" />,
});
