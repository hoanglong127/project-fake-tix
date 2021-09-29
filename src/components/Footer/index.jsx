import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import facebookLogo from "../../assets/images/facebook-logo.png";
import zaloLogo from "../../assets/images/zalo-logo.png";
import androidLogo from "../../assets/images/android-logo.png";
import appleLogo from "../../assets/images/apple-logo.png";
import zionLogo from "../../assets/images/zion-logo.jpg";
import boCongThuong from "../../assets/images/boCongThuong.png";
import { fetchTheaterSystemInfo } from "../../store/actions/cinemaAction";

const Footer = () => {
  const dispatch = useDispatch();
  const theaterSystemInfo = useSelector(
    (state) => state.cinemaReducer.theaterSystemInfo
  );

  useEffect(() => {
    dispatch(fetchTheaterSystemInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-8" style={{ backgroundColor: "#222222" }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-5 border-b border-gray-700">
          <div>
            <h5 className="text-white text-sm mb-3">TIX</h5>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <a
                  className="block text-gray-300 hover:text-white text-sm mb-2 trasition-all duration-300"
                  href="https://tix.vn/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </a>
                <a
                  className="block text-gray-300 hover:text-white text-sm mb-2 trasition-all duration-300"
                  href="https://tix.vn/brand-guideline/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brand Guidelines
                </a>
              </div>
              <div>
                <a
                  className="block text-gray-300 hover:text-white text-sm mb-2 trasition-all duration-300"
                  href="https://tix.vn/thoa-thuan-su-dung"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thoả thuận sử dụng
                </a>
                <a
                  className="block text-gray-300 hover:text-white text-sm mb-2 trasition-all duration-300"
                  href="https://tix.vn/chinh-sach-bao-mat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chính sách bảo mật
                </a>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-white text-sm mb-3">ĐỐI TÁC</h5>
            <div className="grid grid-cols-3 gap-3">
              {theaterSystemInfo.map((item) => (
                <div
                  key={item.maHeThongRap}
                  className="w-8 h-8 bg-white rounded-full"
                >
                  <img
                    className="w-full"
                    src={item.logo}
                    alt={item.tenHeThongRap}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:text-center">
            <h5 className="text-white text-sm mb-3">MOBILE APP</h5>
            <div>
              <a
                className="inline-block mr-3"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src={appleLogo} alt="appleLogo" />
              </a>
              <a
                className="inline-block"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src={androidLogo} alt="androidLogo" />
              </a>
            </div>
          </div>
          <div className="md:text-center">
            <h5 className="text-white text-sm  mb-3">SOCIAL</h5>
            <div>
              <a
                className="inline-block mr-3"
                href="https://www.facebook.com/tix.vn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src={facebookLogo} alt="appleLogo" />
              </a>
              <a
                className="inline-block mr-3"
                href="https://zalo.me/tixdatve"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src={zaloLogo} alt="androidLogo" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-4 md:col-span-1">
            <img className="rounded-lg" src={zionLogo} alt="zionLogo" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <h5 className="text-white text-sm mb-0">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </h5>
            <p className="mb-0 text-sm text-gray-300">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p className="mb-0 text-sm text-gray-300">
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay
              đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư
              Thành phố Hồ Chí Minh cấp.
            </p>
            <p className="mb-0 text-sm text-gray-300">
              Số Điện Thoại (Hotline): 1900 545 436
            </p>
            <p className="mb-0 text-sm text-gray-300">
              Email:{" "}
              <a
                className="text-red-500 hover:text-red-500"
                href="mailto:support@tix.vn"
              >
                support@tix.vn
              </a>
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <img className="w-full" src={boCongThuong} alt="boCongThuong" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
