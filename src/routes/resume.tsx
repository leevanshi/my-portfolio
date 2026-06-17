import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "Resume ATS | PortfolioPro AI" }] }),
  component: () => <ScreenFrame src="/screens/resume.html" title="Resume ATS" />,
});
