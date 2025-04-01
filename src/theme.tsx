import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fs_12_rg: {
      fontSize: string;
      [key: string]: any;
    };
    fs_12_sb: {
      fontSize: string;
      [key: string]: any;
    };

    fs_14_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_14_rg: {
      fontSize: string;
      [key: string]: any;
    };

    fs_16_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_16_rg: {
      fontSize: string;
      [key: string]: any;
    };
    fs_24_rg: {
      fontSize: string;
      [key: string]: any;
    };
  }

  interface TypographyVariantsOptions {
    fs_12_rg: {
      fontSize: string;
      [key: string]: any;
    };
    fs_12_sb: {
      fontSize: string;
      [key: string]: any;
    };

    fs_14_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_14_rg: {
      fontSize: string;
      [key: string]: any;
    };

    fs_16_sb: {
      fontSize: string;
      [key: string]: any;
    };
    fs_16_rg: {
      fontSize: string;
      [key: string]: any;
    };

    fs_24_rg: {
      fontSize: string;
      [key: string]: any;
    };
  }
  interface PaletteOptions {
    themeWhite: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fs_12_rg: true;
    fs_12_sb: true;
    fs_14_rg: true;
    fs_14_sb: true;
    fs_16_rg: true;
    fs_16_sb: true;
    fs_24_rg: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: { main: "#2569F4" },
    secondary: {
      main: "rgb(153,161,173)",
      light: "#FAFAFA",
    },
    info: {
      dark: "#3E3E3E",
      main: "#797979",
      light: "#E2E2E2",
    },
    themeWhite: "#ffffff",
  },

  spacing: 10,

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontSize: "32px",
      fontWeight: 500,
    },

    subtitle1: {
      fontSize: "0.625rem",
      fontWeight: 600,
    },

    fs_12_sb: {
      fontSize: "10px",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "12px",
      },
    },

    fs_12_rg: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "12px",
      },
    },

    fs_14_sb: {
      fontSize: "11px",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "14px",
      },
    },

    fs_14_rg: {
      fontSize: "11px",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "14px",
      },
    },

    fs_16_rg: {
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "16px",
      },
    },

    fs_16_sb: {
      fontSize: "14px",
      fontWeight: 600,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      "@media (min-width:500px)": {
        fontSize: "16px",
      },
    },

    fs_24_rg: {
      fontSize: "24px",
      fontWeight: 400,
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});
