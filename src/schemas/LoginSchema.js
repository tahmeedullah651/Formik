import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  username: Yup.string().min(4).max(25).required("username is required"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string().min(8).max(25).required("Please enter your password"),
  conformPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must be matched"),
});
export default LoginSchema;
