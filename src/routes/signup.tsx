import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "@/components/ScreenFrame";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign Up | PortfolioPro AI" }] }),
  component: () => <ScreenFrame src="/screens/signup.html" title="Sign Up" />,
});
