# Kiểm thử và nghiệm thu

Quy ước: `[ ]` chưa kiểm tra, `[x]` đạt, `[!]` cần xử lý.

## Dữ liệu và nguồn

- [x] Dữ liệu công khai chỉ lấy từ 10 dòng thuộc `01_Bản đồ nhiệt_Sư phạm đi và yêu` trong sheet `Chủ đề 3`.
- [x] Hai bản ghi mâu thuẫn không nằm trong dữ liệu chạy thật.
- [x] Có 8 hoạt động công khai.
- [x] Có 5 gallery và 3 nội dung văn bản.
- [x] Có 12 đường dẫn ảnh.
- [x] Không có đường dẫn ảnh bị thiếu tại thời điểm lập tài liệu.
- [x] Nội dung không còn câu do người triển khai tự biên soạn.
- [x] TV và modal không hiển thị nguồn nội bộ hoặc dòng Excel.
- [!] `Thông tin.md` của Yên Lãng ghi 4 ảnh nhưng thư mục thực tế chỉ có 3 ảnh.
- [!] Chưa có hồ sơ quyền sử dụng ảnh trong thư mục đã rà soát.

## Bản đồ

- [ ] Bản đồ Việt Nam không hiện ranh giới tỉnh.
- [ ] Ngôi sao Hà Nội không biến mất khi hover hoặc chuyển trạng thái.
- [ ] Chỉ miền có dữ liệu mới tương tác.
- [ ] Chỉ tỉnh có dữ liệu mới hover và click.
- [ ] Tỉnh không có dữ liệu giữ màu trung tính.
- [ ] Bản đồ miền không xuyên hoặc cách quá xa mặt tường.
- [ ] Hoàng Sa và Trường Sa hiển thị đúng lớp bản đồ được duyệt.

## TV và slideshow

- [ ] Hoạt động nhiều ảnh tự chạy từng ảnh.
- [ ] Chỉ chuyển hoạt động sau ảnh cuối.
- [ ] Hoạt động một ảnh chuyển sau khoảng 7,5 giây.
- [ ] Nút trong TV chỉ chuyển ảnh.
- [ ] Nút ngoài TV chỉ chuyển hoạt động.
- [ ] Nút không phủ lên ảnh hoặc nội dung.
- [ ] Chọn tỉnh giới hạn slideshow trong tỉnh đó.
- [ ] Tương tác thủ công tạm dừng 15 giây.
- [ ] Mở modal, tài liệu hoặc hướng dẫn làm dừng slideshow.
- [ ] Quay lại tab không gây nhảy qua nhiều ảnh.

## Hiển thị ảnh

- [ ] Ảnh ngang hiển thị đầy đủ.
- [ ] Ảnh dọc hiển thị đầy đủ.
- [ ] Không ảnh nào bị crop.
- [ ] Không kéo giãn sai tỷ lệ.
- [ ] Chỉ báo `ẢNH x/y` đúng số lượng.
- [ ] Ảnh Tân Lạc và Yên Khê tải được.

## Modal

- [ ] Gallery dùng giao diện `photo-caption` giống ảnh Cụm 1.
- [ ] Ảnh modal dùng `contain`.
- [ ] Dải chú thích nằm ngay dưới ảnh.
- [ ] Chuyển ảnh cập nhật đúng chú thích.
- [ ] Nội dung văn bản mở modal đọc thông thường.
- [ ] Nút đóng hoạt động ở desktop và màn hình nhỏ.

## Kỹ thuật

- [x] `main.js` vượt qua `node --check` tại lần cập nhật gần nhất.
- [x] `province-activities.js` vượt qua `node --check` tại lần cập nhật gần nhất.
- [ ] Console không có `TypeError` hoặc lỗi tải ảnh.
- [ ] Không có raycast xuyên TV hoặc tường.
- [ ] Cache version được tăng sau thay đổi JavaScript.
- [ ] Kiểm tra trên kích thước desktop.
- [ ] Kiểm tra trên kích thước màn hình nhỏ.

## Điều kiện nghiệm thu nội dung

Một hoạt động chỉ được nghiệm thu khi:

1. Có nguồn nội dung xác định.
2. Nội dung hiển thị trùng nguồn.
3. Không có dữ kiện mâu thuẫn chưa giải quyết.
4. Tất cả tệp ảnh tồn tại.
5. Địa danh lịch sử và tỉnh hiện hành được phân biệt đúng.
6. Không xuất hiện ghi chú nội bộ trên giao diện.

