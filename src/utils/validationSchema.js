import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  usernameOrEmail: yup.string()
    .required("Email/Username is required"),
  password: yup.string()
    .required("Password is required"),
});

export default loginValidationSchema;
