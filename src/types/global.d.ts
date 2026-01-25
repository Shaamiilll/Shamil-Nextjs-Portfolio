export {};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetIdOrName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}
