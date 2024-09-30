import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  MuiRouting,
  typography,
  MuiButton,
  MuiTextField,
  MuiSelect,
  MuiToolbar,
} from "./themeComponents";
import { ClientProps, clients } from "@/types/client";
import dotenv from "dotenv";
import { client } from "@/app/constants";

dotenv.config();

const clientsStyle: ClientProps = {
  CrossCountry: {
    palette: {
      primary: {
        main: "rgba(0, 51, 102, 1)",
        light: "rgba(0, 51, 102, 1)",
        dark: "rgba(0, 51, 102, 1)",
        contrastText: "#fff",
        bg: "#F2F5F7",
      },
      error: {
        light: "#FFEDEA",
        main: red.A400,
        dark: "#A42A4E",
      },
      warning: {
        light: "#FFDDB1",
        main: "rgba(255, 149, 2, 1)",
        dark: "#A14300",
      },
      grey: {
        100: "rgba(250, 250, 250, 1)",
        200: "rgba(238, 238, 238, 1)",
        300: "rgba(224, 224, 224, 1)",
        600: "rgba(117, 117, 117, 1)",
      },
      info: {
        light: "#E1F1FF",
        main: "rgba(240, 247, 244, 1)",
        dark: "#3040A7",
      },
      text: {
        primary: "rgba(33, 33, 33, 1)",
      },
      icon: {
        main: "rgba(215, 39, 47, 1)",
      },
      confirmation: {
        main: "rgba(0, 136, 77, 1)",
        light: "rgba(51, 187, 128, 1)",
        dark: "rgba(22, 95, 63, 1)",
        contrastText: "#fff",
      },
      bg: {
        main: "#F2F5F7",
      },
      ...{
        default: {
          light: "rgba(117, 117, 117, 1)",
          dark: "rgba(117, 117, 117, 1)",
          main: "rgba(117, 117, 117, 1)",
          contrastText: "#000",
        },
      },
    },
  },
  acme: {
    palette: {
      primary: {
        main: "rgba(0, 136, 77, 1)",
        light: "rgba(51, 187, 128, 1)",
        dark: "rgba(22, 95, 63, 1)",
        contrastText: "#fff",
        bg: "#F0F7F4",
      },
      error: {
        light: "#FFEDEA",
        main: red.A400,
        dark: "#A42A4E",
      },
      warning: {
        light: "#FFDDB1",
        main: "rgba(255, 149, 2, 1)",
        dark: "#A14300",
      },
      grey: {
        100: "rgba(250, 250, 250, 1)",
        200: "rgba(238, 238, 238, 1)",
        300: "rgba(224, 224, 224, 1)",
        600: "rgba(117, 117, 117, 1)",
      },
      info: {
        light: "#E1F1FF",
        main: "rgba(240, 247, 244, 1)",
        dark: "#3040A7",
      },
      text: {
        primary: "rgba(33, 33, 33, 1)",
      },
      icon: {
        main: "#000",
      },
      confirmation: {
        main: "rgba(0, 136, 77, 1)",
        light: "rgba(51, 187, 128, 1)",
        dark: "rgba(22, 95, 63, 1)",
        contrastText: "#fff",
      },
      bg: {
        main: "#F0F7F4",
      },
      ...{
        default: {
          light: "rgba(117, 117, 117, 1)",
          dark: "rgba(117, 117, 117, 1)",
          main: "rgba(117, 117, 117, 1)",
          contrastText: "#000",
        },
      },
    },
  },
};

export const theme = createTheme({
  palette: clientsStyle[client].palette,
  shape: {
    borderRadius: 8,
  },
  components: {
    ...MuiRouting,
    ...MuiButton,
    ...MuiTextField,
    ...MuiSelect,
    ...MuiToolbar,
  },
  typography,
});
