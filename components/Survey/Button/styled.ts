import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#D99F0B",
  "&:hover": {
    backgroundColor: "#c89f0c",
  },

  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-end",
    fontSize: "1.4vw",
    fontWeight: "400",
    padding: "0.5vw 3.5vw",
  },

  [theme.breakpoints.down("md")]: {
    alignSelf: "center",
    fontSize: "2.5vw",
    fontWeight: "400",
    padding: "1vw 7vw",
  },
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
    fontSize: "4vw",
    fontWeight: "400",
    padding: "2vw 10vw",
  },
}));
