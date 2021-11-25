import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material/";

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    fontWeight: "300",

    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFFFFF",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFFFFF",
    },
    "& .MuiInputLabel-root": {
      color: "#FFFFFF",
    },

    "& .MuiInputBase-root": {
      color: "#FFFFFF",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",
      margin: "3vw 0vw 0.5vw 0vw",
      paddingTop: "3px",
      "& .MuiFormLabel-root": {
        fontSize: "1.2vw",
      },
    },

    [theme.breakpoints.down("md")]: {
      margin: "1.5vw 0vw",
      marginBottom: "0.5vw",
      paddingTop: "2vw",
      "& .MuiFormLabel-root": {
        fontSize: "1.6rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: "1.5vw 0vw",
      marginBottom: "0.5vw",
      paddingTop: "2vw",
      "& .MuiFormLabel-root": {
        fontSize: "1.2rem",
      },
    },
  })
);
