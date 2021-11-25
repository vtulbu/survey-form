import styled from "@emotion/styled";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";
import { Radio, RadioProps } from "@mui/material";

export const StyledFormControlLabel = styled(
  FormControlLabel
)<FormControlLabelProps>(({ theme }: any) => ({
  [theme.breakpoints.up("md")]: {
    paddingBottom: "3vw",
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    marginTop: "10vw",

    "& .MuiTypography-root": {
      fontSize: "1.5rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "10vw",

    "& .MuiTypography-root": {
      fontSize: "1.2rem",
    },
  },
}));

export const StyledRadio = styled(Radio)<RadioProps>(({ theme }) => ({
  color: "white",
  "&.Mui-checked": {
    color: "#FACF38",
  },
}));
