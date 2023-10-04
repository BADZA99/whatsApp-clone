import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is requered")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed")
    .min(2, "Name must be between 2 and 16 charaters")
    .max(16, "Name must be between 2 and 16 charaters"),

  email: Yup.string().required("Email is requered").email("Invalid email"),
  status: Yup.string().max(64, "status must be less than 64 charaters"),
  password: Yup.string()
    .required("Password is requered")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,"Password must contain at least 6 characters, including UPPER/lowercase and numbers"),
});

export const signInSchema = Yup.object({
  email: Yup.string().required("Email is requered").email("Invalid email"),
  password: Yup.string()
    .required("Password is requered")
});