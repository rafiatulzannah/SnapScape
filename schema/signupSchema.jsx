import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,}$/;

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  age: yup.number().positive().integer().min(18, "please enter a valid age (18 and above)").required("Required"),
  email: yup.string().email("Please enter valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "please create a strong password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match")
    .required("Required"),
});