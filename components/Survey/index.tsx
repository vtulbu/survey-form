import { StyledSurvey } from "./styled";
import { FormProvider, useForm } from "react-hook-form";
import { FormButton } from "./Button";
import { useState } from "react";
import { CheckBoxContent } from "./CheckBox/index";
import { TextInputContent } from "./TextInput";
import { SelectOptionContent } from "./SelectOption";
import { RadioButtonContent } from "./RadioButton";

export const Survey = () => {
  const [counter, setCount] = useState(0);

  const methods = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    setCount(counter + 1);
    console.log(data);
  };

  return (
    <StyledSurvey>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} id="form-survey">
          {counter === 0 && (
            <section id={String(counter)}>
              <h2>
                By following a few simple steps you will successfully complete
                the survey form
              </h2>
              <div className="container">
                <TextInputContent
                  index={counter}
                  requirement={true}
                  errorTogle={
                    methods.formState.errors.name?.type === "required"
                      ? true
                      : false
                  }
                />
                {methods.formState.errors.name && (
                  <span className="error-message">Please write your name</span>
                )}
                <TextInputContent index={counter + 1} requirement={false} />
              </div>
            </section>
          )}
          {counter === 1 && (
            <section id={String(counter)}>
              <TextInputContent
                index={counter + 1}
                requirement={true}
                errorTogle={
                  methods.formState.errors.email?.type === "required"
                    ? true
                    : false
                }
              />
              {methods.formState.errors.email && (
                <span className="error-message">
                  please include an &#64; in the email adress
                </span>
              )}
            </section>
          )}
          {counter === 2 && (
            <section id={String(counter)}>
              <h2>Which option best describes your current role?</h2>
              <div className="container">
                <SelectOptionContent index={counter - 2} requirement={true} />
              </div>
            </section>
          )}
          {counter === 3 && (
            <section id={String(counter)}>
              <h2>Would you recommend freeCodeCamp to a friend?</h2>
              <div className="container">
                <RadioButtonContent />
              </div>
            </section>
          )}
          {counter === 4 && (
            <section id={String(counter)}>
              <h2>What is your favorite feature of freeCodeCamp?</h2>
              <div className="container">
                <SelectOptionContent index={counter - 3} />
                <p>
                  What would you like to see improved? (Check all that apply)
                </p>
                <CheckBoxContent />
              </div>
            </section>
          )}
          {counter === 5 && (
            <section id={String(counter)}>
              <h2>Do you have any comments or suggestions?</h2>
              <div className="container">
                <TextInputContent index={counter - 2} />
              </div>
            </section>
          )}
          {counter === 7 && (
            <section id={String(counter)}>
              <h2>Your message has been sent successfully.</h2>
              <div className="container">
                <p>
                  We will send our answer and the loyalty bonus to your e-mail
                  address. <br />
                  <br />
                  Thank you!
                </p>
              </div>
              <footer>©2019 omiron.software All Rights Reserved</footer>
            </section>
          )}
        </form>
        <FormButton
          counter={counter}
          setCount={setCount}
          isValid={methods.formState.isValid}
        />
      </FormProvider>
    </StyledSurvey>
  );
};
