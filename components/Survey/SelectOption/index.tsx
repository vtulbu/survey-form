import { useFormContext } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import {
  StyledMenuItem,
  StyledInputLabel,
  StyledFormControl,
  StyledSelect,
} from "./styled";

const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const SelectOptionInfo = [
  {
    id: "role",
    description: "Select current role:",
    value: "role",
    label: "role",
    objectName: "role",
    menuItem: [
      { value: "student", text: "Student" },
      { value: "full-time-job", text: "Full time job" },
      { value: "full-time-learner", text: "Full time learner" },
      { value: "prefer-not-to-say", text: "Prefer not to say" },
      { value: "Ooher", text: "Other" },
    ],
  },
  {
    id: "favFeeature",
    description: "Select an option:",
    value: "favFeature",
    label: "favFeature",
    objectName: "favFeature",
    menuItem: [
      { value: "challenges", text: "Challenges" },
      { value: "projects", text: "Projects" },
      { value: "community", text: "Community" },
      { value: "open-source", text: "Open-source" },
    ],
  },
];

export function SelectOptionContent({ index, requirement }: any) {
  const [select, Selection] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    Selection(event.target.value as string);
  };

  return (
    <ConnectForm>
      {({ register }: any) => (
        <StyledFormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <StyledInputLabel id={SelectOptionInfo[index].id}>
            {SelectOptionInfo[index].description}
          </StyledInputLabel>
          <StyledSelect
            value={select}
            label={SelectOptionInfo[index].label}
            {...register(SelectOptionInfo[index].objectName)}
            onChange={handleChange}
          >
            {SelectOptionInfo[index].menuItem.map((info, i) => (
              <StyledMenuItem key={i} value={info.value}>
                {info.text}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      )}
    </ConnectForm>
  );
}
