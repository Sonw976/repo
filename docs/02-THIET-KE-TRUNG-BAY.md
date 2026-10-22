# Đặc tả thiết kế trưng bày

## 1. Hình thái kiến trúc

- Mặt bằng giữ cấu trúc hình tròn.
- Bán kính lõi: `7.75` đơn vị.
- Bán kính tường ngoài: `18.5` đơn vị.
- Chiều cao tường: `10.5` đơn vị.
- Độ dày tường: `0.4` đơn vị.
- Tâm tầm mắt camera: `Y = 2.5`.
- Mặt sàn: `Y = 0`.
- Nội dung tường ngoài được đặt gần bán kính `WALL_MOUNT_R`, hiện suy ra khoảng `18.09` đơn vị.

Tường, nẹp, trần và cột tuân theo cung tròn. Các bảng không được đặt như một mặt phẳng dài cắt qua cung tường; tâm và góc xoay của từng phần tử phải được tính theo tọa độ cực.

## 2. Ngôn ngữ thị giác

- Font chính: **Roboto**.
- Nền kiến trúc: trắng ngà/kem trung tính.
- Nẹp và chi tiết kim loại: vàng đồng/nâu đồng.
- Khối nội dung Cụm 1: nền xanh lam, chữ trắng, điểm nhấn vàng.
- Viền nhóm: xanh mảnh, ôm sát biên ảnh và khối chữ; không tạo khoảng đệm giả.
- Hiệu ứng ảnh nổi: độ dày nhỏ, đủ tạo bóng và tách ảnh khỏi tường; không dùng khung hộp nặng.
- Hover ảnh: viền vàng; không áp dụng như nút bấm cho khối chữ không tương tác.

## 3. Hệ khoảng cách

Khoảng cách được quản lý theo bốn cấp:

| Cấp | Quan hệ | Nguyên tắc |
|---|---|---|
| 0 | Ảnh với khối chữ cùng hàng | Dính liền (`0`) nếu là một cặp ảnh–nội dung |
| 1 | Ảnh trong cùng cụm nhỏ | Rất nhỏ, đồng đều; chỉ đủ thấy ranh giới ảnh |
| 2 | Cụm nhỏ trong một hoạt động | Có khoảng thở rõ nhưng vẫn đọc như một mảng |
| 3 | Hai hoạt động lớn/infographic | Tách biệt rõ theo tuyến tham quan |

Các khoảng đã chốt trong Cụm 1:

- Ba Sẵn Sàng: infographic cố định; infographic ↔ khối so le `0.5`; khối so le ↔ khối ảnh dọc `0.5`.
- Xếp bút nghiên: cụm 1979 cố định; cụm 1979 ↔ cụm 1972 `0.5`; cụm 1972 ↔ infographic `0.5`.
- Viền xanh phải fit trực tiếp theo biên nội dung.

## 4. Cụm 1 — Xếp bút nghiên

### 4.1. Trình tự

Trình tự đọc theo tuyến tham quan: **infographic → 1972 → tổ trực A7 → 1979**. Không đảo mốc lịch sử chỉ để lấp khoảng trống.

### 4.2. Cụm 1972

- Thanh nội dung tổng quan ở trên, chiều cao vừa đủ chữ; không kéo giãn font để lấp khung.
- Khối trái: một ảnh lớn, hai ảnh nhỏ phía dưới và một tiêu đề chung.
- Khối phải: ảnh phát biểu lớn, hai ảnh lễ xuất phát nhỏ.
- Tổ trực đài quan sát: ảnh bên trái, nội dung bên phải, hai phần cao bằng nhau.
- Nếu nhiều ảnh dùng chung một tiêu đề, giữ đúng cấu trúc “2/3 ảnh — 1 tiêu đề”, không lặp tiêu đề dưới từng ảnh.

### 4.3. Cụm 1979

Bố cục hai cột dọc cân nhau:

- Cột trái: cụm ảnh–nội dung so le và cụm hai ảnh sinh hoạt.
- Cột phải: hai ảnh lễ xuất phát; lễ kết nạp Đảng; khối bốn ảnh các khoa/CBSV.
- Mỗi nhóm có viền riêng; các nhóm xếp theo một cột, không nhập toàn bộ thành một khung lớn.
- Không hiển thị năm nhỏ `(1979)` trong chú thích khi mốc năm đã rõ ở tiêu đề khu.
- Tên khối bốn ảnh: **Cán bộ sinh viên sẵn sàng tình nguyện**.

### 4.4. Chữ trong khối so le

- Ảnh và chữ cùng hàng dính nhau; các hàng dính nhau.
- Ba ô chữ căn sát phía ảnh theo thứ tự: trái, phải, trái.
- Cỡ chữ được fit theo diện tích ô, không dùng scale hình học làm biến dạng glyph.

## 5. Cụm 1 — Ba Sẵn Sàng

- Infographic đứng độc lập, gần chạm vùng trần và nẹp chân tường nhưng không chồng lấn.
- Khối so le là một cụm liền; ảnh và nội dung cùng hàng dính nhau, các hàng dính nhau.
- Khối ảnh dọc giữ từng hàng ảnh–nội dung và khoảng cách dọc thống nhất.
- Ảnh trận địa pháo thuộc Ba Sẵn Sàng, đặt dưới khối so le, không chạm nẹp chân tường.
- Chú thích trận địa pháo: “Một số hình ảnh ở trận địa pháo có sinh viên trường ĐHSPHN tham gia phục vụ chiến đấu tại cầu Tào, Hàm Rồng, Thanh Hoá, 15/8/1966”.

## 6. Sáu chân dung trên tường lõi

- Bỏ bảng “Con người và chứng tích” và “Kho tư liệu số”.
- Bố cục ba cột, hai hàng, căn giữa khu vực: cột 1 `(1,2)`, cột 2 `(3,4)`, cột 3 `(5,6)`.
- Tâm toàn cụm ở cao độ khoảng `Y = 4.75`; hai hàng hiện tại ở `Y = 6.00` và `Y = 3.50`.
- Mỗi thẻ gồm ảnh chân dung bên trái và bảng tên bên phải, không có khe hở.
- Vai trò nằm nhỏ phía trên tên; tên căn trái, sát ảnh và tách theo từng thành phần, ví dụ `TRẦN / VĂN / SƠN`.
- Khi thư mục có ảnh chân dung riêng, dùng ảnh đó ngoài tường; modal dùng ảnh đầy đủ có bối cảnh và tiêu đề gốc.

Thứ tự hiện hành:

| STT | Vai trò | Tên |
|---:|---|---|
| 1 | Bí thư Đoàn trường | Trịnh Ngọc Trình |
| 2 | Đồng chí · Bí thư Đoàn trường | Trần Quang Nhiếp |
| 3 | Chiến sĩ trẻ | Hồ Quang Diệu |
| 4 | Bí thư LCĐ Khoa Hoá | Tôn Thị Tĩnh |
| 5 | Liệt sĩ | Đặng Xuân Rương |
| 6 | Liệt sĩ | Vũ Đình Văn |

## 7. Modal

### 7.1. Ảnh thường

- Ảnh giữ đúng tỉ lệ bằng `object-fit: contain`.
- Chú thích nằm dưới ảnh; modal fit theo nội dung và viewport.
- Không kéo giãn ảnh hoặc chữ để ép đầy chiều ngang/chiều cao.

### 7.2. Infographic

- Chỉ hiển thị infographic và nút đóng.
- Bỏ hoàn toàn cột tiêu đề, mô tả và liên kết bên phải.
- Chiều cao tối đa phụ thuộc viewport; cho phép thu theo màn hình để không mất đầu/cuối ảnh.

### 7.3. Chân dung

- Ngoài tường dùng ảnh chân dung nếu có.
- Khi mở, dùng ảnh đầy đủ và chú thích gốc.
- Nếu ảnh có nội dung văn bản dài riêng, bố cục modal là ảnh/tiêu đề bên trái và nội dung bên phải; chiều cao hai cột bằng nhau.

## 8. Chống lỗi hình ảnh và chữ

- Luôn đặt kích thước bảng bằng chiều rộng/chiều cao thực, không scale một canvas sau khi vẽ.
- Canvas chữ phải có mật độ điểm ảnh đủ cao và cập nhật texture sau khi vẽ.
- Không dùng `transform: scaleX/scaleY` lên DOM chữ.
- Ảnh phải dùng đúng tỉ lệ hoặc crop có chủ ý; mặc định ưu tiên `contain` trong modal.
- Kiểm tra từ góc chính diện và hai góc xiên vì tường cong có thể làm lộ sai lệch mà góc chính diện không thấy.
