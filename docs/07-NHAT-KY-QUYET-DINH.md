# Nhật ký quyết định thiết kế

Tệp này ghi các quyết định có tính nguyên tắc đã được thống nhất trong quá trình xây dựng. Mục đích là tránh sửa ngược yêu cầu cũ khi tiếp tục phát triển.

## Nguồn dữ liệu

- Tư liệu của mỗi cụm lấy từ chính thư mục tư liệu của cụm đó.
- Word/Excel dùng làm khung ý tưởng và đối chiếu, không làm cơ chế dữ liệu chạy trực tiếp.
- Không tự suy diễn nội dung hoặc tiêu đề; ưu tiên nội dung gốc và tên tệp ảnh.

## Kiến trúc và hình thái

- Giữ cấu trúc phòng tròn.
- Tường, bảng và các cụm nội dung phải bám theo đường cong.
- Tầm mắt đặt ở `2.5`; tâm cụm chân dung ở khoảng `4.75`.
- Nội dung gần cửa phải thu theo góc hướng tâm, không dành một dải trống hình chữ nhật bằng đúng bề rộng cửa.

## Cụm 1

- Hai hoạt động Xếp bút nghiên và Ba Sẵn Sàng nối tiếp nhau, không chồng lên nhau.
- Infographic đứng riêng, ảnh nổi không dùng khung hộp dày.
- Viền xanh mảnh dùng để nhận diện nhóm và phải fit nội dung.
- Ảnh có hover viền vàng; khối chữ thuần túy không phóng to.
- Infographic mở modal chỉ ảnh.
- Ảnh trận địa pháo thuộc Ba Sẵn Sàng, không thuộc mốc 1979.
- Nhóm 1979 của Xếp bút nghiên dùng hai cột; từng nhóm con có viền riêng.

## Khoảng cách

- Ba Sẵn Sàng: infographic ↔ khối so le `0.5`; khối so le ↔ khối dọc `0.5`.
- Xếp bút nghiên: 1979 ↔ 1972 `0.5`; 1972 ↔ infographic `0.5`.
- Ảnh và ô chữ của một cặp nội dung dính liền; khoảng cách chỉ xuất hiện giữa các nhóm có cấp độ khác nhau.

## Chân dung tường lõi

- Bỏ hai bảng “Con người và chứng tích” và “Kho tư liệu số”.
- Sáu người hiển thị theo thư mục 1→6, bố cục ba cột × hai hàng.
- Ảnh chân dung riêng dùng ngoài tường; ảnh đầy đủ dùng trong modal.
- Vai trò nằm trên tên; tên căn trái, tách dòng theo họ/tên đệm/tên và sát ảnh.

## Typography và màu

- Toàn phòng dùng Roboto.
- Khối nội dung Cụm 1 dùng nền xanh, chữ trắng.
- Không scale chữ để lấp khung; điều chỉnh font, padding và kích thước modal/bảng.

## Những việc cần xác nhận khi thay đổi

- Đổi cấu trúc nhóm ảnh nhiều ảnh — một tiêu đề.
- Đổi thứ tự thời gian hoặc chuyển ảnh sang hoạt động khác.
- Sửa tên người, chức danh, địa điểm và niên đại.
- Thêm người thứ bảy vào tường chân dung.
- Thay đổi các khoảng `0.5` cấp hoạt động.
- Đổi cơ chế Excel thành nguồn dữ liệu tự động.

## 16/10/2026 — Triển khai Cụm 3: Nghiên cứu khoa học

- Thay toàn bộ tư liệu mẫu cũ của Cụm 3 bằng dữ liệu mới được ánh xạ từ sheet **Chủ đề 3**, các hàng 46–78; không thêm nội dung suy diễn.
- Tường ngoài dùng một timeline thích ứng, tăng dần từ phải sang trái theo chiều tham quan. Khu 1 nằm trên trục; Khu 2 nằm dưới trục; đoạn chuyển tiếp chéo đặt trong khoảng trống giữa hai nhóm.
- Tường lõi phía trong dành cho Khu 3 — thành tích nghiên cứu khoa học.
- Số lượng đang triển khai: 10 hồ sơ Khu 1, 10 hoạt động Khu 2 và 10 thành tích Khu 3; tổng cộng 43 đường dẫn ảnh.
- Chưa đưa hàng 75 về Robot vào scene vì sheet không cung cấp tên tệp ảnh và thư mục không có ảnh được duyệt.
- Tạo các bản sao an toàn cho trình duyệt trong `Tư liệu Cụm 3/_web/` cho bốn đường dẫn có Unicode tổ hợp hoặc ký tự xuống dòng; giữ nguyên toàn bộ tệp nguồn.
- Tái sử dụng cơ chế thẻ ảnh, hover và modal ảnh–chú thích của các cụm trước để bảo đảm đồng bộ tương tác.
