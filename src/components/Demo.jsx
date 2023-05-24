import { memo, useCallback, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import update from "immutability-helper";
import * as yup from "yup";
import { Form } from "./form";

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  website: yup.string().url().required(),
});

// eslint-disable-next-line import/prefer-default-export
export const Demo = memo(() => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    website: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    website: false,
  });

  const onFieldChange = useCallback((fieldName, value) => {
    setValues((prevValues) => update(prevValues, {
      [fieldName]: {
        $set: value,
      },
    }));
  }, []);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false,
      });

      if (isFormValid) {
        // eslint-disable-next-line no-console
        console.log("Form is legit");
      } else {
        formSchema
          .validate(values, { abortEarly: false })
          .catch((err) => {
            // eslint-disable-next-line no-shadow
            const errors = err.inner.reduce((acc, error) => ({
              ...acc,
              [error.path]: true,
            }), {});

            setErrors((prevErrors) => update(prevErrors, {
              $set: errors,
            }));
          });
      }
    },
    [values],
  );

  return (
    <Form
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  );
});

export default Demo;
