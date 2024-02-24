// Pulled from https://github.com/mui/material-ui/tree/master/examples/material-ui-remix-ts in order to get MUI to work with Remix

import createCache from "@emotion/cache";

export default function createEmotionCache() {
  return createCache({ key: "css" });
}
