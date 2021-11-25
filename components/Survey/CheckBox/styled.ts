import { styled } from "@mui/material/styles";
import {
  FormControlLabel,
  Checkbox,
  FormControlLabelProps,
  CheckboxProps,
  FormGroup,
  FormGroupProps,
} from "@mui/material";

export const StyledFormGroup = styled(FormGroup)<FormGroupProps>(
  ({ theme }) => ({
    [theme.breakpoints.up("md")]: { paddingTop: "0vw" },
    [theme.breakpoints.down("md")]: { paddingTop: "2vw" },
    [theme.breakpoints.down("sm")]: { paddingTop: "2vw" },
  })
);

export const StyledFormControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>(({ theme }) => ({
  color: "white",

  [theme.breakpoints.up("md")]: {
    "& .MuiTypography-root": {
      fontSize: "1.3rem",
      marginLeft: "10px",
    },

    "& .MuiCheckbox-root": {
      paddingTop: "1px",
      paddingBottom: "1px",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTypography-root": {
      fontSize: "1.3rem",
      marginLeft: "10px",
    },

    "& .MuiCheckbox-root": {
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "1rem",
      marginLeft: "10px",
    },

    "& .MuiCheckbox-root": {
      paddingTop: "1px",
      paddingBottom: "1px",
    },
  },
}));

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  color: "white",

  "&.Mui-checked": {
    color: "#FACF38",
  },
}));

// [theme.breakpoints.up("md")]: {},
// [theme.breakpoints.down("md")]: {},
// [theme.breakpoints.down("sm")]: {},
