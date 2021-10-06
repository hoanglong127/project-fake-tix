import React, { useEffect, useState } from "react";
import { Tabs, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import _ from "lodash";
import * as yup from "yup";
import moment from "moment";
import "./style.css";
import MainLayout from "../../HOCs/Layouts/MainLayout";
import { fetchUserInfo, updateUserInfo } from "../../store/actions/authAction";

const { TabPane } = Tabs;

const columns = [
  {
    title: "Mã vé",
    width: 80,
    dataIndex: "maVe",
    key: "maVe",
    fixed: "left",
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
  },
  {
    title: "Thời lượng",
    dataIndex: "thoiLuongPhim",
    key: "thoiLuongPhim",
    render: (minute) => <p>{minute} phút</p>,
  },
  {
    title: "Ngày đặt",
    dataIndex: "ngayDat",
    key: "ngayDat",
    render: (time) => <p>{moment(time).format("DD/MM/YYYY")}</p>,
  },
  {
    title: "Tên rạp",
    dataIndex: "danhSachGhe",
    key: "danhSachGhe",
    render: (list) => <p>{list[0].tenHeThongRap}</p>,
  },
  {
    title: "Danh sách ghế",
    dataIndex: "danhSachGhe",
    key: "danhSachGhe",
    render: (list) => (
      <div className="flex flex-wrap gap-2">
        {_.sortBy(list, ["tenGhe"]).map((seat) => (
          <span
            key={seat.maGhe}
            className="px-2 py-1 bg-green-100 text-green-500 text-xs rounded"
          >
            {seat.tenGhe}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Tổng tiền (vnđ)",
    dataIndex: "danhSachGhe",
    key: "danhSachGhe",
    render: (list) => (
      <p className="text-red-500">
        {list.reduce((total) => (total += 100000), 0).toLocaleString()}
      </p>
    ),
  },
];

let data = [];

const createNewData = (ticketList = []) => {
  const newData = [];
  ticketList.map((ticket, index) =>
    newData.push({
      ...ticket,
      key: index,
    })
  );
  data = newData;
};

const schema = yup.object().shape({
  matKhau: yup.string().required("Vui lòng nhập mật khẩu"),
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

const Profile = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.authReducer.userInfo);
  const {
    values,
    setValues,
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
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchUserInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValues({
      taiKhoan: userInfo?.taiKhoan ?? "",
      matKhau: userInfo?.matKhau ?? "",
      hoTen: userInfo?.hoTen ?? "",
      email: userInfo?.email ?? "",
      soDt: userInfo?.soDT ?? "",
      maNhom: "GP00",
      maLoaiNguoiDung: "KhachHang",
    });

    createNewData(userInfo?.thongTinDatVe);
  }, [userInfo, setValues]);

  const handleVisiblePassword = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  // Xử lý cập nhập thông tin người dùng
  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      taiKhoan: true,
      matKhau: true,
      hoTen: true,
      email: true,
      soDt: true,
    });

    if (!isValid) return;

    dispatch(
      updateUserInfo(values, () => {
        Swal.fire({
          icon: "success",
          title: "Cập nhập thành công",
        });
      })
    );
  };

  return (
    <MainLayout>
      <div className="profile pt-16">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <img
                src="https://source.unsplash.com/300x300/?portraite"
                alt="user-avatar"
                className="w-1/2 md:w-full mx-auto border rounded-full  border-gray-300"
              />
              <h3 className="mt-3 text-xl text-center font-medium">
                {userInfo?.hoTen}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Tabs defaultActiveKey="UserInfo">
                <TabPane tab="Thông tin tài khoản" key="UserInfo">
                  <form onSubmit={handleSubmit} className="w-full md:w-2/3">
                    <div className="mb-3">
                      <label htmlFor="taiKhoan" className="text-base">
                        Tài khoản
                      </label>
                      <input
                        value={values.taiKhoan}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="taiKhoan"
                        className="w-full px-3 py-2 text-base border border-gray-300 bg-gray-200 rounded-md focus:outline-none"
                        disabled
                      />
                      {touched.taiKhoan && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.taiKhoan}
                        </span>
                      )}
                    </div>

                    <div className="mb-3 relative">
                      <label htmlFor="matKhau" className="text-base">
                        Mật khẩu
                      </label>
                      <input
                        value={values.matKhau}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={isVisiblePassword ? "text" : "password"}
                        name="matKhau"
                        className="w-full px-3 pr-5 py-2 text-base border border-gray-300 rounded-md focus:outline-none"
                        autoComplete="true"
                      />
                      {touched.matKhau && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.matKhau}
                        </span>
                      )}
                      <button onClick={handleVisiblePassword} type="button">
                        {isVisiblePassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-9 right-3"
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
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute top-9 right-3"
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
                      </button>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="hoTen" className="text-base">
                        Họ và tên
                      </label>
                      <input
                        value={values.hoTen}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="hoTen"
                        className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none"
                      />
                      {touched.hoTen && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.hoTen}
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="text-base">
                        Email
                      </label>
                      <input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="email"
                        className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none"
                      />
                      {touched.email && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="mb-4">
                      <label htmlFor="soDt" className="text-base">
                        Số điện thoại
                      </label>
                      <input
                        value={values.soDt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name="soDt"
                        className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none"
                      />
                      {touched.soDt && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.soDt}
                        </span>
                      )}
                    </div>

                    <button className="px-4 py-2 bg-green-500 text-white text-base rounded">
                      Cập nhập
                    </button>
                  </form>
                </TabPane>
                <TabPane tab="Lịch sử đặt vé" key="HistoryBooking">
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1200 }}
                    pagination={false}
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
