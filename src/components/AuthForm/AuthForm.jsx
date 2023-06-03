import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { sighUpThunk } from "../../redux/auth/authOperations";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const AuthForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          dispatch(sighUpThunk(values));
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="login" type="text" />
            {errors.login && touched.login ? <div>{errors.login}</div> : null}
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
