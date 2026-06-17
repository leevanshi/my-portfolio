import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const screens = [
  { path: "/", label: "Landing" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/builder", label: "Builder" },
  { path: "/resume", label: "Resume ATS" },
  { path: "/analytics", label: "Analytics" },
  { path: "/themes", label: "Themes" },
  { path: "/signup", label: "Sign Up" },
];

type Mode = "dark" | "light";

function getInitialMode(): Mode {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("pp-theme") as Mode) || "dark";
}

export function ScreenFrame({ src, title }: { src: string; title: string }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mode, setMode] = useState<Mode>(getInitialMode);

  // Persist + broadcast to iframe + apply to root
  useEffect(() => {
    localStorage.setItem("pp-theme", mode);
    document.documentElement.classList.toggle("app-light", mode === "light");
    document.documentElement.classList.toggle("app-dark", mode === "dark");
    iframeRef.current?.contentWindow?.postMessage(
      { type: "pp-theme", mode },
      "*",
    );
  }, [mode]);

  // Listen for navigation from iframe
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.data) return;
      if (e.data.type === "pp-navigate" && typeof e.data.to === "string") {
        navigate({ to: e.data.to });
      }
      if (e.data.type === "pp-ready") {
        iframeRef.current?.contentWindow?.postMessage(
          { type: "pp-theme", mode },
          "*",
        );
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate, mode]);

  // Push theme once iframe loads
  function handleLoad() {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "pp-theme", mode },
      "*",
    );
  }

  const isLight = mode === "light";

  return (
    <div
      className="fixed inset-0 flex flex-col transition-colors"
      style={{ background: isLight ? "#fff5fb" : "#0a0420" }}
    >
      <nav
        className="flex flex-wrap items-center gap-2 border-b px-4 py-2 text-xs backdrop-blur-md"
        style={{
          background: isLight
            ? "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,224,240,0.85))"
            : "linear-gradient(135deg, rgba(26,8,64,0.85), rgba(10,4,32,0.9))",
          borderColor: isLight
            ? "rgba(139, 92, 246, 0.2)"
            : "rgba(236, 72, 153, 0.18)",
          color: isLight ? "#1a0033" : "#f5e8ff",
        }}
      >
        <span
          className="mr-2 bg-clip-text font-bold tracking-tight text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b)",
          }}
        >
          PortfolioPro AI
        </span>
        {screens.map((s) => {
          const active = s.path === pathname;
          return (
            <Link
              key={s.path}
              to={s.path}
              className="rounded-full px-3 py-1 font-medium transition-all hover:-translate-y-px"
              style={
                active
                  ? {
                      background:
                        "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(236, 72, 153, 0.4)",
                    }
                  : {
                      background: isLight
                        ? "rgba(139, 92, 246, 0.08)"
                        : "rgba(255, 255, 255, 0.05)",
                      color: isLight ? "#5b3d7a" : "#dae2fd",
                    }
              }
            >
              {s.label}
            </Link>
          );
        })}
        <button
          onClick={() => setMode(isLight ? "dark" : "light")}
          className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1 font-medium transition-all hover:-translate-y-px"
          style={{
            background: isLight
              ? "linear-gradient(135deg, #1a0033, #5b3d7a)"
              : "linear-gradient(135deg, #f59e0b, #ec4899)",
            color: "#fff",
            boxShadow: isLight
              ? "0 4px 14px rgba(91, 61, 122, 0.3)"
              : "0 4px 14px rgba(245, 158, 11, 0.4)",
          }}
          aria-label="Toggle color mode"
        >
          <span>{isLight ? "🌙" : "☀️"}</span>
          <span>{isLight ? "Dark" : "Light"}</span>
        </button>
      </nav>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        onLoad={handleLoad}
        className="h-full w-full flex-1 border-0"
        style={{ background: isLight ? "#fff5fb" : "#0a0420" }}
      />
    </div>
  );
}
