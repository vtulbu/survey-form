import { StyledBackground } from "./styled";

export const Background = ({ children }: any) => {
  return (
    <StyledBackground>
      <h1>freeCodeCamp Survey Form</h1>
      {children}
    </StyledBackground>
  );
};
