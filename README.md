Repo that demonstrates an issue with Remix + Vite + MUI.

To repro the error, run `npm run build && npm run start`.

The project will build without errors, but will get an error when trying to start the project.

*Note* The error does not repro when using the Remix server.

The error looks like:
```bash
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon/index.js";
         ^^^^^^^^^^^^
SyntaxError: Named export 'AdapterLuxon' not found. The requested module '@mui/x-date-pickers/AdapterLuxon/index.js' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@mui/x-date-pickers/AdapterLuxon/index.js';
const { AdapterLuxon } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at ModuleJob.run (node:internal/modules/esm/module_job:191:5)
    at ModuleLoader.import (node:internal/modules/esm/loader:336:24)
    at importModuleDynamicallyWrapper (node:internal/vm/module:429:15)
    at run (/Users/t.covington/Projects/training/remix-vite-mui-issue/node_modules/@remix-run/serve/dist/cli.js:113:15)
```

Things I have tried:

1. Making the change suggested in the error.
2. Tried changing import style specified here https://github.com/vitejs/vite/issues/11783#issuecomment-1435666824
3. Using this plugin https://github.com/cyco130/vite-plugin-cjs-interop
4. https://vite-plugin-ssr.com/broken-npm-package#named-export-not-found (Hail Mary here)