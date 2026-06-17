import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "PortfolioPro AI | AI-Powered Portfolio Builder" }] }),
  component: () => <ScreenFrame src="/screens/landing.html" title="Landing" />,
});
