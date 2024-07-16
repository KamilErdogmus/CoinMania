import * as yup from "yup";

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Required Area ")
    .email("Please enter a valid email address"),
  age: yup
    .number()
    .min(18, "You must be at least 18")
    .max(100, "You must be less than 100")
    .integer(),
  password: yup
    .string()
    .required("Required Area ")
    .min(5, "Password must be at least 5 characters")
    .matches(regex, "Your password is not strong enough"),
  confirm_password: yup
    .string()
    .required("Required Area ")
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
});
