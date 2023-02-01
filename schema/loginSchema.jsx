import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,}$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "please enter a valid password" })
    .required("Required"),
});