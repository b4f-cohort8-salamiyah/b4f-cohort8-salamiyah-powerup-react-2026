import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Port 5174, so Course Explorer can run at the same time as the B4F Hub
// client (which uses 5173).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
});
