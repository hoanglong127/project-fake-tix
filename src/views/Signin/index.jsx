import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../../HOCs/Layouts/AuthLayout";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

const Signin = () => {
  const [isVisiblePassWord, setIsVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    values,
    errors,
    touched,
    setTouched,
    isValid,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleIsVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassWord);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      taiKhoan: true,
      matKhau: true,
    });

    if (!isValid) return;

    dispatch(
      signIn(
        values,
        () => {
          history.push("/");
        },
        (title) => {
          Swal.fire({
            icon: "error",
            title,
          });
        }
      )
    );
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <p className="text-center text-base mb-0">
          Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
        </p>
        <div className="mt-6 relative">
          <label className="block mb-1" htmlFor="taiKhoan">
            Tài khoản
          </label>
          <input
            value={values.taiKhoan}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800"
            type="text"
            id="taiKhoan"
            name="taiKhoan"
          />
          {touched.taiKhoan && (
            <span className="text-red-500 text-xs mt-1 block absolute -bottom-5">
              {errors.taiKhoan}
            </span>
          )}
        </div>

        <div className="mt-6 relative">
          <label className="block mb-1" htmlFor="matKhau">
            Mật khẩu
          </label>
          <div className="relative">
            <input
              value={values.matKhau}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full pl-3 pr-10 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800"
              type={isVisiblePassWord ? "text" : "password"}
              id="matKhau"
              name="matKhau"
              autoComplete="on"
            />
            {touched.matKhau && (
              <span className="text-red-500 text-xs mt-1 block absolute -bottom-5">
                {errors.matKhau}
              </span>
            )}
            {isVisiblePassWord ? (
              <svg
                onClick={handleIsVisiblePassword}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                onClick={handleIsVisiblePassword}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-md bg-green-700 hover:bg-green-800 text-lg text-white transition-all duration-300"
            >
              Đăng nhập
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-500">
            Bạn chưa có tài khoản?
            <Link
              to="/signup"
              href="#"
              className="text-green-500 hover:text-green-600 ml-1"
            >
              Đăng ký
            </Link>
            .
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signin;
