import { FC } from "react";
import { StyledButton } from "./styled";

type Props = {
  counter: number;
  setCount: any;
  isValid: boolean;
};

export const FormButton: FC<Props> = ({ counter, setCount, isValid }) => {
  const completeFormStep = () => {
    setCount((current: number) => current + 1);
  };

  if (counter >= 5 && counter <= 6) {
    return (
      <StyledButton
        size="large"
        type={counter === 6 ? "submit" : "button"}
        onClick={completeFormStep}
        form="form-survey"
        disabled={!isValid}
      >
        Submit
      </StyledButton>
    );
  } else if (counter < 5) {
    return (
      <StyledButton
        size="large"
        type="button"
        onClick={completeFormStep}
        disabled={!isValid}
      >
        Next
      </StyledButton>
    );
  } else {
    return null;
  }
};
