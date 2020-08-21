import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import defaultMuiTheme from "@material-ui/core/styles/defaultTheme";

const palette = createPalette(
  merge({}, defaultTheme.palette, {
    primary: {
      main: "#ff0266",
    },
    secondary: {
      main: "#00ba00",
    },
  })
);

const typography = {
  fontFamilySecondary: "'Poppins', sans-serif",
  fontFamily: '"Comic Neue", cursive',
  fontSize: 16,
  fontStyle: "normal",
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  color: palette.text.primary,
};

const typographyBase = {
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  fontStyle: typography.fontStyle,
  color: typography.color,
};

const typographyHeader = {
  ...typographyBase,
  fontWeight: typography.fontWeightBold,
  fontFamily: typography.fontFamilySecondary,
};

const typographyBody = {
  ...typographyBase,
  fontWeight: typography.fontWeightRegular,
  fontFamily: typography.fontFamily,
};

const rawTheme = {
  palette,

  typography: {
    ...typographyBase,
    h1: {
      ...typographyHeader,
      textTransform: "uppercase",
      fontSize: "4rem",
    },
    h2: {
      ...typographyHeader,
      textTransform: "uppercase",
      fontSize: "3rem",
    },
    h3: {
      ...typographyHeader,
      fontSize: "2.75rem",
    },
    h4: {
      ...typographyHeader,
      fontSize: "2rem",
    },
    h5: {
      ...typographyHeader,
      fontWeight: typography.fontWeightMedium,
      fontSize: "1.5rem",
    },
    h6: {
      ...typographyHeader,
      fontWeight: typography.fontWeightMedium,
      fontSize: "1.25rem",
    },
    body1: {
      ...typographyBody,
      fontSize: "1rem",
    },
    body2: {
      ...typographyBody,
      fontSize: "1rem",
    },
    button: {
      ...typographyBody,
      fontSize: "1rem",
    },
    caption: {
      ...typographyBody,
      fontSize: "0.875rem",
      fontStyle: "italic",
    },
  },

  shape: {
    borderRadius: 0,
  },

  overrides: {
    // React-Admin
    RaAppBar: {
      title: {
        textTransform: "capitalize",
      },
    },

    // Material-UI

    MuiAppBar: {
      root: {
        background: `linear-gradient(127deg, #00ff00, #00ba00);`,
      },
    },
    MuiCard: {
      root: {
        border: "none",
      },
    },
    MuiButton: {
      root: {
        color: palette.primary.main,
        paddingTop: defaultMuiTheme.spacing(1),
        paddingRight: defaultMuiTheme.spacing(4),
        paddingBottom: defaultMuiTheme.spacing(1),
        paddingLeft: defaultMuiTheme.spacing(4),
      },
      sizeSmall: {
        paddingTop: defaultMuiTheme.spacing(0),
        paddingRight: defaultMuiTheme.spacing(2),
        paddingBottom: defaultMuiTheme.spacing(0),
        paddingLeft: defaultMuiTheme.spacing(2),
      },
      sizeLarge: {
        paddingTop: defaultMuiTheme.spacing(2),
        paddingRight: defaultMuiTheme.spacing(6),
        paddingBottom: defaultMuiTheme.spacing(2),
        paddingLeft: defaultMuiTheme.spacing(6),
      },
      contained: {
        boxShadow: "none",
      },
      containedPrimary: {
        color: palette.common.white,
        backgroundColor: palette.primary.main,
      },
      containedSecondary: {
        color: palette.common.white,
        backgroundColor: palette.secondary.main,
      },
      outlined: {},
      outlinedPrimary: {
        color: palette.primary.main,
        borderColor: palette.primary.main,
      },
      outlinedSecondary: {
        color: palette.common.white,
        borderColor: palette.common.white,
      },
      text: {},
      textPrimary: {
        color: palette.primary.main,
      },
      textSecondary: {
        color: palette.secondary.main,
      },
      label: {},
    },

    // React-Admin

    RaSidebar: {
      drawerPaper: {
        backgroundColor: palette.common.white,
        color: palette.primary.main,
        height: "100%",
        boxShadow:
          "2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)",
      },
    },
    RaMenuItemLink: {
      active: {
        borderLeftStyle: "none",
        borderRightColor: palette.secondary.main,
        borderRightWidth: defaultMuiTheme.spacing(0.5),
        borderRightStyle: "solid",
        backgroundColor: palette.action.selected,
        color: palette.primary.main,
      },
      icon: {
        color: "inherit",
      },
    },
    RaLayout: {
      content: {
        height: "auto",
        backgroundColor: palette.background.default,
        paddingTop: defaultMuiTheme.spacing(0),
        paddingRight: defaultMuiTheme.spacing(0),
        paddingBottom: defaultMuiTheme.spacing(0),
        paddingLeft: defaultMuiTheme.spacing(0),
        display: "flex",
        flexDirection: "column",
        [defaultMuiTheme.breakpoints.up("xs")]: {
          paddingTop: defaultMuiTheme.spacing(0),
          paddingRight: defaultMuiTheme.spacing(0),
          paddingBottom: defaultMuiTheme.spacing(0),
          paddingLeft: defaultMuiTheme.spacing(0),
        },
        "& > div, & > h2": {
          paddingTop: defaultMuiTheme.spacing(4),
          paddingRight: defaultMuiTheme.spacing(3),
          paddingBottom: defaultMuiTheme.spacing(3),
          paddingLeft: defaultMuiTheme.spacing(3),
          [defaultMuiTheme.breakpoints.up("xs")]: {
            paddingLeft: defaultMuiTheme.spacing(6),
          },
        },
      },
    },
    RaAppBar: {
      toolbar: {
        MuiIconButton: {
          root: {
            fontSize: "1.25rem",
          },
        },
      },
    },
    RaTabbedShowLayout: {
      content: {
        marginTop: defaultMuiTheme.spacing(4),
        backgroundColor: palette.common.white,
        boxShadow: defaultMuiTheme.shadows[3],
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    RaShow: {
      main: {
        marginTop: defaultMuiTheme.spacing(2),
      },
      noActions: {
        marginTop: defaultMuiTheme.spacing(2),
      },
    },
    RaFilter: {
      form: {},
      button: {
        "& button": {
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: palette.grey[300],
          textTransform: "uppercase",
          fontWeight: typography.fontWeightBold,
          color: palette.primary.main,
          paddingLeft: defaultMuiTheme.spacing(2),
          paddingRight: defaultMuiTheme.spacing(2),
          paddingTop: defaultMuiTheme.spacing(1),
          paddingBottom: defaultMuiTheme.spacing(1),
        },
      },
    },
    RaListToolbar: {
      toolbar: {
        paddingBottom: defaultMuiTheme.spacing(1),
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: palette.grey[300],
        marginBottom: defaultMuiTheme.spacing(2),
      },
      actions: {
        marginRight: "0px",
      },
    },
  },
};

export const theme = createMuiTheme(merge({}, defaultTheme, rawTheme));
