# Kế hoạch kiểm thử và nghiệm thu

## 1. Nguyên tắc

Kiểm thử phải thực hiện bằng HTTP, trên ít nhất một trình duyệt Chromium ở kích thước desktop mục tiêu. Mỗi thay đổi bố cục cần kiểm tra bằng ảnh chụp ở góc chính diện và góc xiên, không chỉ đọc mã.

## 2. Kiểm tra khởi động

- [ ] Trang tải được và nút “Bước Vào Không Gian” hoạt động.
- [ ] Console không có lỗi JavaScript, shader hoặc WebGL.
- [ ] Three.js đúng phiên bản r185.
- [ ] CSS và `main.js` không bị cache phiên bản cũ.
- [ ] Không có request ảnh/audio/video trả 404.

## 3. Kiểm tra kiến trúc

- [ ] Sàn, tường, trần không hở hoặc chồng mặt.
- [ ] Cột và nẹp theo đúng cung tròn.
- [ ] Lối cửa không bị nội dung hai bên lấn chiếm.
- [ ] Không còn viền thừa trên sàn lối vào.
- [ ] Các bảng không cắt qua tường hoặc nẹp chân tường.
- [ ] Không có z-fighting/nhấp nháy khi xoay góc nhìn.

## 4. Kiểm tra điều khiển

- [ ] Kéo chuột xoay đúng hướng và không giật.
- [ ] WASD và phím mũi tên hoạt động.
- [ ] Camera giữ cao độ `2.5`.
- [ ] Không xuyên tường lõi, tường ngoài hoặc cửa.
- [ ] Đặt lại góc nhìn hoạt động.

## 5. Kiểm tra Cụm 1

### Xếp bút nghiên

- [ ] Trình tự infographic → 1972 → A7 → 1979 đúng tuyến.
- [ ] Khoảng infographic–1972 và 1972–1979 cùng bằng `0.5` theo biên khối.
- [ ] Thanh nội dung không kéo dãn chữ.
- [ ] Cụm nhiều ảnh dùng đúng tiêu đề chung.
- [ ] Cụm 1979 có hai cột; từng nhóm có viền riêng.
- [ ] Không còn năm nhỏ `(1979)` ở các caption đã quy định bỏ.
- [ ] Chữ trong khối so le đủ lớn và căn sát ảnh đúng thứ tự.

### Ba Sẵn Sàng

- [ ] Infographic giữ vị trí cố định.
- [ ] Hai khoảng cấp lớn đều `0.5`.
- [ ] Ảnh–chữ trong khối so le dính nhau; các hàng dính nhau.
- [ ] Khối chữ không mở modal.
- [ ] Ảnh trận địa pháo nằm dưới khối so le, không đè nẹp.
- [ ] Chú thích trận địa pháo đúng bản đã duyệt.

### Chân dung

- [ ] Đủ sáu người theo thứ tự 1→6.
- [ ] Lưới ba cột × hai hàng căn giữa.
- [ ] Vai trò nhỏ hơn tên nhưng vẫn đọc được.
- [ ] Tên tách dòng theo thành phần, căn trái và sát ảnh.
- [ ] Folder có ảnh chân dung riêng dùng đúng ảnh ngoài tường.
- [ ] Modal mở ảnh đầy đủ đúng người.

## 6. Kiểm tra Cụm 2

- [ ] Các nhóm ảnh giữ bố cục cụm, không biến thành các thẻ rời.
- [ ] Từng ảnh mở đúng modal và đúng ảnh nguồn.
- [ ] Khối nền xanh/chữ trắng đồng bộ quy chuẩn.
- [ ] Nội dung modal fit khung, không lộ ảnh lỗi.
- [ ] Thứ tự năm/sự kiện đúng nguồn tư liệu.

## 7. Kiểm tra Cụm 3

- [x] Khu 1 và Khu 2 dùng chung một timeline thích ứng trên tường ngoài.
- [x] Timeline tăng dần từ phải sang trái theo chiều tham quan Cụm 1 → Cụm 2 → Cụm 3.
- [x] Khu 1 nằm phía trên, Khu 2 nằm phía dưới; trục không chạm nẹp chân tường hoặc nẹp trần.
- [x] Khu 3 nằm trên tường lõi tròn phía trong.
- [x] Ảnh và nội dung lấy từ sheet **Chủ đề 3** và `Tư liệu Cụm 3`.
- [x] Modal không tự sinh nội dung ngoài nguồn đã duyệt.

## 8. Kiểm tra modal

- [ ] Nút đóng dùng được bằng chuột.
- [ ] Click nền tối đóng modal nếu thiết kế hỗ trợ.
- [ ] Ảnh không méo; ảnh dọc không mất đầu/cuối.
- [ ] Infographic chỉ có ảnh, không có cột phải.
- [ ] Ảnh thường có chú thích đúng và vừa khung.
- [ ] Modal không vượt viewport; phần dài có cơ chế cuộn.
- [ ] Alt/title không hiển thị như ảnh lỗi trong giao diện.

## 9. Kiểm tra hình ảnh và typography

- [ ] Roboto áp dụng thống nhất.
- [ ] Không có chữ vỡ nét ở khoảng cách xem dự kiến.
- [ ] Không có chữ bị scale ngang/dọc.
- [ ] Không có dòng bị cắt hoặc tràn khỏi bảng.
- [ ] Cỡ chữ giữa các ô tương đương được cân bằng thị giác.
- [ ] Ảnh không bị crop mất chủ thể ngoài chủ ý thiết kế.
- [ ] Viền xanh fit nội dung; hover vàng xuất hiện trên mọi ảnh Cụm 1.

## 10. Hiệu năng và tương thích

- [ ] Trải nghiệm duy trì tốc độ khung hình chấp nhận được trên máy mục tiêu.
- [ ] Texture quá lớn được tối ưu bằng bản dẫn xuất, không ghi đè bản gốc.
- [ ] Không tạo lại canvas/texture mỗi frame.
- [ ] Video/audio dừng hoặc giảm tải khi không cần.
- [ ] Resize cửa sổ cập nhật camera và renderer đúng.

## 11. Biên bản nghiệm thu tối thiểu

Ghi lại: ngày kiểm tra, commit/bản version, trình duyệt, độ phân giải, người kiểm tra, các mục đạt/chưa đạt, ảnh chụp lỗi, mức độ ưu tiên và người xử lý. Không nghiệm thu chỉ dựa trên việc “trang mở được”.
