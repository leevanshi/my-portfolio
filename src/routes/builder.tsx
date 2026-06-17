import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/builder")({
  head: () => ({ meta: [{ title: "Builder | PortfolioPro AI" }] }),
  component: () => <ScreenFrame src="/screens/builder.html" title="Builder" />,
});
