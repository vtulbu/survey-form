import styled from "@emotion/styled";
import {
  InputLabel,
  InputLabelProps,
  MenuItem,
  MenuItemProps,
  FormControl,
  FormControlProps,
  Select,
  SelectProps,
} from "@mui/material";

export const StyledInputLabel = styled(InputLabel)<InputLabelProps>(
  ({ theme }: any) => ({
    [theme.breakpoints.up("md")]: {
      color: "white",
      fontSize: "1.3rem",

      "& .MuiInputBase-root": {
        marginTop: "10px",
        color: "#FFFFFF",
      },
    },
    [theme.breakpoints.down("md")]: {
      color: "white",
      fontSize: "1.5rem",

      "& .MuiInputBase-root": {
        marginTop: "10px",
        color: "#FFFFFF",
      },
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "1.2rem",

      "& .MuiInputBase-root": {
        marginTop: "10px",
        color: "#FFFFFF",
      },
    },
  })
);

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>(
  ({ theme }: any) => ({
    color: "black",
    "& .MuiInputBase-root": {
      color: "#FFFFFF",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "1.3rem",

      "& .MuiInput-root:before": {
        fontSize: "1.3rem",
      },

      "& .MuiInputBase-root:after": {
        fontSize: "1.3rem",
      },
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",

      "& .MuiInput-root": {
        margin: "2vw",
      },

      "& .MuiInput-root:before": {
        fontSize: "1.3rem",
      },

      "& .MuiInputBase-root:after": {
        fontSize: "1.3rem",
      },
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",

      "& .MuiInput-root": {
        margin: "2vw",
      },

      "& .MuiInput-root:before": {
        fontSize: "1.3rem",
      },

      "& .MuiInputBase-root:after": {
        fontSize: "1.3rem",
      },
    },
  })
);

export const StyledFormControl = styled(FormControl)<FormControlProps>(
  ({ theme }: any) => ({
    marginLeft: "0",
    [theme.breakpoints.up("md")]: {
      width: "30vw",

      "& .MuiInputBase-root": {
        color: "#FFFFFF",
        fontSize: "1.3rem",
        paddingTop: "0.5vw",
      },

      "& .MuiInputBase-root:before": {
        color: "#FFFFFF",
        borderBottomColor: "#FFFFFF",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "40vw",
      marginTop: "15vw",
      marginBottom: "3vw",

      "& .MuiInputBase-root": {
        color: "#FFFFFF",
        fontSize: "1.4rem",
        marginBottom: "1vw",
        paddingTop: "1vw",
      },

      "& .MuiInputBase-root:before": {
        color: "#FFFFFF",
        borderBottomColor: "#FFFFFF",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "40vw",
      marginTop: "0vw",
      marginBottom: "3vw",

      "& .MuiInputBase-root": {
        color: "#FFFFFF",
        fontSize: "1.1rem",
        marginBottom: "1vw",
        paddingTop: "0vw",
      },

      "& .MuiInputBase-root:before": {
        color: "#FFFFFF",
        borderBottomColor: "#FFFFFF",
      },
    },
  })
);

export const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fill: "white",
  },
}));
