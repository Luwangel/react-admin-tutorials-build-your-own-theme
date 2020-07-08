import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./theme";
import CustomRouteNoLayout from "./CustomRouteNoLayout";

const ThemedCustomRouteNoLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomRouteNoLayout {...props} />
    </ThemeProvider>
  );
};

export default ThemedCustomRouteNoLayout;
