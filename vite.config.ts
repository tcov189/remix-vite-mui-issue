import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    remix({
      // ignore all files in routes folder to prevent
      // default remix convention from picking up routes
      ignoredRouteFiles: ["**/*"],
      // Set up flat routes package
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes);
      },
    }),
    tsconfigPaths(),
    cjsInterop({
        // List of CJS dependencies that require interop
        dependencies: [
          "@mui/x-date-pickers/AdapterLuxon"
        ],
      }),
  ],
});
