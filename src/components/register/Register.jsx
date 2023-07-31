// import TextInput from "../textInput/TextInput";
// import LoginSchema from "../../schemas/LoginSchema";
// import "./login.css";
// import { useFormik } from "formik";
// const Login = () => {
//   const { values, touched, handleBlur, handleChange, errors } = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     validationSchema: LoginSchema,
//   });
//   return (
//     <div className="LoginWrapper">
//       <div className="headerText">Login to your account</div>
//       <TextInput
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={values.username}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         error={errors.username && touched.username ? 1 : undefined}
//         errormessage={errors.username}
//       />
//       <TextInput
//         type="password"
//         name="password"
//         placeholder="password"
//         value={values.password}
//         onBlur={handleBlur}
//         onChange={handleChange}
//         error={errors.password && touched.password ? 1 : undefined}
//         errormessage={errors.password}
//       />
//       <button className="btn">Login</button>
//       <span>
//         Dont have account? <button className="textbtn">Register</button>
//       </span>
//     </div>
//   );
// };

// export default Login;
import "./register.scss";
import TextInput from "../textInput/TextInput";
import LoginSchema from "../../schemas/LoginSchema";
import { useFormik } from "formik";
const Register = () => {
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      conformPassword: "",
    },
    validationSchema: LoginSchema,
  });
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="left"></div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <TextInput
                type="text"
                name="username"
                placeholder="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.username && touched.username ? 1 : undefined}
                errormessage={errors.username}
              />
              <TextInput
                type="email"
                name="email"
                placeholder="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.email && touched.email ? 1 : undefined}
                errormessage={errors.email}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password && touched.password ? 1 : undefined}
                errormessage={errors.password}
              />
              <TextInput
                type="password"
                name="conformPassword"
                placeholder="conformPassword"
                value={values.conformPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  errors.conformPassword && touched.conformPassword
                    ? 1
                    : undefined
                }
                errormessage={errors.conformPassword}
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
