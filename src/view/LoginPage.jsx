/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { schema } from "./../schema";

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
      navigate("/home");
    },

    validationSchema: schema,
  });
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="../../public/c-logo.png" alt="" />
          <h1>CoinMania</h1>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {Inputs.map((data, i) => (
            <InputField formik={formik} key={i} data={data} />
          ))}
          <button disabled={formik.isSubmitting} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

const Inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Age",
    name: "age",
    type: "number",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Password Confirmation",
    name: "confirm_password",
    type: "password",
  },
];
const InputField = ({ data, formik }) => {
  return (
    <div>
      <label htmlFor={data.name}>{data.label}</label>
      <input
        type={data.type}
        name={data.name}
        onChange={formik.handleChange}
        id={data.name}
      />

      {/* Burada formik'in `touched` ve `errors` nesnelerini kontrol ediyoruz. 
    `touched`, kullanıcının bir girdiye dokunup dokunmadığını belirler.
    `errors`, form doğrulamasında hataların olup olmadığını içerir.*/}
      {formik.touched[data.name] && formik.errors[data.name] && (
        //? Eğer kullanıcı ilgili inputa dokunmuşsa ve form doğrulama hatası varsa,
        //? bir span etiketi içinde hata mesajını gösteriyoruz.
        <span>{formik.errors[data.name]}</span>
      )}
    </div>
  );
};
