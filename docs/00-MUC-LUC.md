# Bộ tài liệu Chủ đề 3

## 1. Mục đích

Bộ hồ sơ này mô tả phiên bản hiện hành của không gian 3D **Chủ đề 3 — Phong trào và hoạt động tiêu biểu**. Đây là điểm tra cứu chung cho người biên tập nội dung, thiết kế trưng bày, lập trình, kiểm thử và người tiếp quản dự án.

Tài liệu phản ánh mã nguồn tại `Chủ đề 3/cd3_1.html`, `scripts/main.js`, `styles/chu-de-3.css`, các module cấu hình/dữ liệu và các thư mục tư liệu của ba cụm.

## 2. Danh mục hồ sơ

| Tệp | Đối tượng sử dụng | Nội dung chính |
|---|---|---|
| [01-TONG-QUAN.md](./01-TONG-QUAN.md) | Tất cả thành viên | Mục tiêu, phạm vi, tuyến tham quan, trạng thái ba cụm |
| [02-THIET-KE-TRUNG-BAY.md](./02-THIET-KE-TRUNG-BAY.md) | Thiết kế, nội dung, lập trình | Hình thái phòng, bố cục, màu, chữ, bảng ảnh, modal |
| [03-NOI-DUNG-VA-TU-LIEU.md](./03-NOI-DUNG-VA-TU-LIEU.md) | Nhóm nội dung | Nguồn dữ liệu, nguyên tắc tên tệp, kiểm kê và quy trình duyệt |
| [04-KY-THUAT-HE-THONG.md](./04-KY-THUAT-HE-THONG.md) | Lập trình viên | Công nghệ, module, tọa độ, builder, tương tác, tham số preview |
| [05-CAP-NHAT-VA-VAN-HANH.md](./05-CAP-NHAT-VA-VAN-HANH.md) | Người quản trị | Chạy cục bộ, cập nhật ảnh/nội dung, xử lý lỗi và bàn giao |
| [06-KIEM-THU-NGHIEM-THU.md](./06-KIEM-THU-NGHIEM-THU.md) | QA, nghiệm thu | Ma trận kiểm thử chức năng, hình ảnh, nội dung và hiệu năng |
| [07-NHAT-KY-QUYET-DINH.md](./07-NHAT-KY-QUYET-DINH.md) | Tất cả thành viên | Các quyết định đã chốt và giới hạn cần giữ khi sửa |

## 3. Thứ tự ưu tiên nguồn

Khi các nguồn mâu thuẫn, áp dụng thứ tự sau:

1. Tư liệu thật trong thư mục `Tư liệu cụm 1`, `Tư liệu cụm 2 - Dấu chân tình nguyện`, `Tư liệu Cụm 3`.
2. Nội dung đã được người phụ trách xác nhận trong tên tệp, Word hoặc Excel.
3. Khung ý tưởng trong Word/Excel dùng để định hướng phân khu và câu chuyện trưng bày.
4. Mã nguồn hiện hành dùng để xác định trạng thái đang hiển thị, không tự động được xem là nguồn lịch sử chính xác.

Excel **không phải cơ sở dữ liệu chạy trực tiếp**. Dự án không tự đồng bộ Excel vào giao diện. Khi tư liệu được duyệt, người biên tập đặt tệp vào đúng thư mục nguồn rồi cập nhật cấu hình/mã hiển thị tương ứng.

## 4. Phạm vi phiên bản

- Entry chính: `Chủ đề 3/cd3_1.html`.
- Engine: Three.js `0.185.1` dạng ES module.
- Kiểu bố cục Cụm 1: `editorial-v2`.
- Kiểu ảnh Cụm 2: `photo-only`.
- Font giao diện: Roboto; fallback Arial/Helvetica/sans-serif.
- Không gian: phòng tròn gồm lõi giữa và ba cung trưng bày.

## 5. Quy tắc duy trì tài liệu

Mỗi thay đổi ảnh hưởng đến vị trí, nội dung, tương tác hoặc nguồn tư liệu phải cập nhật tối thiểu hai nơi: mã nguồn và tài liệu tương ứng. Nếu thay đổi là một quyết định thiết kế có tính nguyên tắc, ghi thêm vào `07-NHAT-KY-QUYET-DINH.md`.
