import { useFormContext, useForm } from "react-hook-form";
import { StyledTextField } from "./styled";

const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();

  return children({ ...methods });
};

const TextInputInfo = [
  {
    label: "Name",
    variant: "standard",
    type: "text",
    objectName: "name",
    placeholder: "Enter your name",
    patternValue: /^[a-zA-Z]+$/,
  },
  {
    label: "Age(optional)",
    variant: "standard",
    type: "text",
    objectName: "age",
    patternValue: /^[0-9]{1,2}$/,
    placeholder: "Enter your age",
    min: 7,
    max: 98,
  },
  {
    label: "Email Adress",
    variant: "standard",
    type: "email",
    objectName: "email",
    patternValue: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    placeholder: "Enter your email",
  },
  {
    id: "outlined-multiline-flexible",
    label: "Enter your comments here...",
    objectName: "addComment",
    property: "multiline",
  },
];

export const TextInputContent = ({ index, requirement, errorTogle }: any) => {
  const methods = useForm();

  function onChange(e: any) {
    if (TextInputInfo[1].patternValue?.test(e.target.value)) {
      (requirement = false), (methods.formState.isValid = true);
    }
  }

  return (
    <ConnectForm>
      {({ register }: any) => (
        <StyledTextField
          placeholder={TextInputInfo[index].placeholder}
          value={undefined}
          onChange={
            TextInputInfo[index].objectName == "age" ? onChange : undefined
          }
          error={errorTogle}
          fullWidth
          multiline={index == 3 ? true : false}
          minRows={index == 3 ? 5 : undefined}
          size="medium"
          id={TextInputInfo[index].id}
          label={TextInputInfo[index].label}
          variant={TextInputInfo[index].variant}
          type={TextInputInfo[index].type}
          {...register(TextInputInfo[index].objectName, {
            required: requirement,
            min: TextInputInfo[index].min,
            max: TextInputInfo[index].max,
            pattern: {
              value: TextInputInfo[index].patternValue,
            },
          })}
        />
      )}
    </ConnectForm>
  );
};
