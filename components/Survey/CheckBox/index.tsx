import { useFormContext } from "react-hook-form";
import {
  StyledFormControlLabel,
  StyledCheckbox,
  StyledFormGroup,
} from "./styled";

const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const InputInfo = [
  {
    id: 1,
    Label: "Front-end Projects",
    Value: "front-end-projects",
  },
  {
    id: 2,
    Label: "Back-end Projects",
    Value: "back-end-projects",
  },
  {
    id: 3,
    Label: "Data Visualization",
    Value: "data-vizualisation",
  },
  {
    id: 4,
    Label: "Challenges",
    Value: "challenges",
  },
  {
    id: 5,
    Label: "Open Source Community",
    Value: "open-source-community",
  },
  {
    id: 6,
    Label: "Gitter help rooms",
    Value: "gitter-help-rooms",
  },
  {
    id: 7,
    Label: "Videos",
    Value: "videos",
  },
  {
    id: 8,
    Label: "City Meetups",
    Value: "city-meetups",
  },
  {
    id: 9,
    Label: "Wiki",
    Value: "wiki",
  },
  {
    id: 10,
    Label: "Forum",
    Value: "forum",
  },
  {
    id: 11,
    Label: "Additional Courses",
    Value: "additional-courses",
  },
  {
    id: 12,
    Label: "Any comments or suggestions",
    Value: "any-comments-or-suggestions",
  },
];

export const CheckBoxContent = () => (
  <ConnectForm>
    {({ register }: any) => (
      <StyledFormGroup>
        {InputInfo.map((info, index) => (
          <StyledFormControlLabel
            key={index}
            control={<StyledCheckbox />}
            label={info.Label}
            value={info.Value}
            {...register("toImprove")}
          />
        ))}
      </StyledFormGroup>
    )}
  </ConnectForm>
);
