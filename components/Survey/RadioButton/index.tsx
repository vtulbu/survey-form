import RadioGroup from "@mui/material/RadioGroup";
import { useFormContext } from "react-hook-form";
import { StyledFormControlLabel, StyledRadio } from "./styled";

const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const RadioButtonInfo = [
  {
    label: "Definitely",
    value: "definitely",
  },
  {
    label: "Maybe",
    value: "maybe",
  },
  {
    label: "Not sure",
    value: "not-sure",
  },
];

export const RadioButtonContent = () => (
  <ConnectForm>
    {({ register }: any) => (
      <RadioGroup name="use-radio-group" defaultValue="Definitely">
        {RadioButtonInfo.map((info, i) => (
          <StyledFormControlLabel
            key={i}
            control={<StyledRadio />}
            label={info.label}
            value={info.value}
            {...register("recommendation")}
          />
        ))}
      </RadioGroup>
    )}
  </ConnectForm>
);
