// Pulled from https://github.com/mui/material-ui/tree/master/examples/material-ui-remix-ts in order to get MUI to work with Remix

import * as React from "react";

export interface ClientStyleContextData {
  reset: () => void;
}

export default React.createContext<ClientStyleContextData>({
  // eslint-disable-next-line no-empty-function
  reset: () => {},
});
