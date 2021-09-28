import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
import AuthLayout from "../../HOCs/Layouts/AuthLayout";
import { DOMAIN, GROUP_ID } from "../../utils/settings";
import { request } from "../../api/request";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "Mật khẩu tối thiểu từ 8 đến 16 kí tự")
    .max(16, "Mật khẩu tối thiểu từ 8 đến 16 kí tự"),
  hoTen: yup.string().required("Vui lòng nhập họ tên"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không đúng định dạng"),
  soDt: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^[0-9]+$/g, { message: "Số điện thoại không đúng định dạng" }),
});

const Signup = () => {
  const [isVisiblePassWord, setIsVisiblePassword] = useState(false);
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
      email: "",
      soDt: "",
      maNhom: GROUP_ID,
      hoTen: "",
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
      email: true,
      soDt: true,
      hoTen: true,
    });

    if (!isValid) return;

    request({
      method: "POST",
      url: `${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
      data: values,
    })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
          text: "Chuyển hướng sang trang đăng nhập",
        }).then((res) => {
          history.push("/signin");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data.content,
        });
      });
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <p className="text-center text-base mb-0">
          Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
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

        <div className="mt-6 relative">
          <label className="block mb-1" htmlFor="hoTen">
            Họ tên
          </label>
          <input
            value={values.hoTen}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800"
            type="text"
            id="hoTen"
            name="hoTen"
          />
          {touched.hoTen && (
            <span className="text-red-500 text-xs mt-1 block absolute -bottom-5">
              {errors.hoTen}
            </span>
          )}
        </div>

        <div className="mt-6 relative">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800"
            type="text"
            id="email"
            name="email"
          />
          {touched.email && (
            <span className="text-red-500 text-xs mt-1 block absolute -bottom-5">
              {errors.email}
            </span>
          )}
        </div>

        <div className="mt-6 relative">
          <label className="block mb-1" htmlFor="soDt">
            Điện thoại
          </label>
          <input
            value={values.soDt}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-800"
            type="text"
            id="soDt"
            name="soDt"
          />
          {touched.soDt && (
            <span className="text-red-500 text-xs mt-1 block absolute -bottom-5">
              {errors.soDt}
            </span>
          )}
        </div>

        <div className="mt-7">
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-green-700 hover:bg-green-800 text-lg text-white transition-all duration-300"
            >
              Đăng ký
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-500">
            Bạn đã có tài khoản?
            <Link
              to="/signin"
              href="#"
              className="text-green-500 hover:text-green-600 ml-1"
            >
              Đăng nhập
            </Link>
            .
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
