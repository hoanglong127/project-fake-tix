import { Tabs } from "antd";
import React from "react";
import "./style.css";

const { TabPane } = Tabs;

const newsList = [
  {
    maTin: "1001",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png",
    tenTin:
      "Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất",
    moTa: "Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ",
    link: "https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat",
  },
  {
    maTin: "1002",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png",
    tenTin:
      "[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM",
    moTa: "Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.",
    link: "https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam",
  },
  {
    maTin: "1003",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png",
    tenTin:
      "PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời",
    moTa: "Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn đẫm máu nhất sự nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô Gái Trẻ Hứa Hẹn).",
    link: "https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam",
  },
  {
    maTin: "1004",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png",
    tenTin:
      "VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM",
    moTa: "Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn sẽ làm cho hội chị em phải mê mẩn vào tháng tới.",
    link: "https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em",
  },
  {
    maTin: "1005",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png",
    tenTin:
      "[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
    moTa: "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante",
    link: "https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang",
  },
  {
    maTin: "1006",
    loaiTin: "dien-anh",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png",
    tenTin:
      "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
    moTa: "Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng.",
    link: "https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan",
  },
  {
    maTin: "1007",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png",
    tenTin: "Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết",
    moTa: "Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám",
    link: "https://tix.vn/review/7947-review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket",
  },
  {
    maTin: "1008",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png",
    tenTin: "Review: Dinh Thự Oan Khuất (Ghost Of War)",
    moTa: "Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!",
    link: "https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war",
  },
  {
    maTin: "1009",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg",
    tenTin:
      "[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn",
    moTa: "Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.",
    link: "https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan",
  },
  {
    maTin: "1010",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg",
    tenTin: "[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân",
    moTa: "Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.",
    link: "https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than",
  },
  {
    maTin: "1011",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg",
    tenTin:
      "[Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô hình?",
    moTa: "Phiên bản hiện đại của The Invisible Man là một trong những phim kinh dị xuất sắc nhất năm nay.",
    link: "https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh",
  },
  {
    maTin: "1012",
    loaiTin: "review",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg",
    tenTin: "[Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa",
    moTa: "Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại không tương xứng với phần mở đầu hứa hẹn.",
    link: "https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa",
  },
  {
    maTin: "1013",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg",
    tenTin: "BHD 59K/VÉ CẢ TUẦN !!!",
    moTa: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.",
    link: "https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan",
  },
  {
    maTin: "1014",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg",
    tenTin: "TIX 1K/VÉ NGẠI CHI GIÁ VÉ",
    moTa: "Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga",
    link: "https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve",
  },
  {
    maTin: "1015",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png",
    tenTin: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX",
    moTa: "ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.",
    link: "https://tix.vn/khuyen-mai/7954-dong-gia-1k-ve-khi-mua-ve-qua-tix",
  },
  {
    maTin: "1016",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg",
    tenTin: "BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!",
    moTa: "Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.",
    link: "https://tix.vn/khuyen-mai/7919-bhd-star-ve-chi-59-000d-ca-tuan",
  },
  {
    maTin: "1017",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg",
    tenTin: "[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang",
    moTa: "123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.",
    link: "https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang",
  },
  {
    maTin: "1018",
    loaiTin: "khuyen-mai",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg",
    tenTin: "Sinh Nhật Mega GS",
    moTa: "Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.",
    link: "https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs",
  },
];

const News = () => {
  const renderNews = (type) => {
    const list = newsList.filter((item) => item.loaiTin === type);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {list.map((item) => (
          <div key={item.maTin}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-md"
                src={item.hinhAnh}
                alt={item.tenTin}
              />
            </a>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3 className="news-title mt-3 mb-1 text-base hover:text-red-500 transition-all duration-300">
                {item.tenTin}
              </h3>
            </a>
            <p className="news-desc mb-0 text-sm overflow-ellipsis overflow-hidden">
              {item.moTa}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="news container mx-auto mt-16">
      <Tabs centered defaultActiveKey="dienAnh">
        <TabPane tab="Điện ảnh 24h" key="dienAnh">
          {renderNews("dien-anh")}
        </TabPane>
        <TabPane tab="Review" key="review">
          {renderNews("review")}
        </TabPane>
        <TabPane tab="Khuyến mãi" key="khuyenMai">
          {renderNews("khuyen-mai")}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default News;
