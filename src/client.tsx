import { StartClient } from "@tanstack/react-start/client";
import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";

async function enableBrowserMocks() {
  const isDemoBuild = import.meta.env["VITE_DEMO_MODE"] === "1";
  if (!import.meta.env.DEV && !isDemoBuild) return;
  const { worker } = await import("./mocks/browser");
  await worker.start({ onUnhandledRequest: "bypass" });
}

await enableBrowserMocks();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
