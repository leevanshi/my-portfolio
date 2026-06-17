import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics | PortfolioPro AI" }] }),
  component: () => <ScreenFrame src="/screens/analytics.html" title="Analytics" />,
});
