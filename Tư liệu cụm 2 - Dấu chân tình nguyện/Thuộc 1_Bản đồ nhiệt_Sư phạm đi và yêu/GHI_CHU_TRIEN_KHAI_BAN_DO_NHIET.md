# Ghi chú triển khai bản đồ nhiệt – Sư phạm đi và yêu

## Phạm vi đã chốt

- Chỉ sử dụng 10 dòng có phân loại `Thuộc 01_Bản đồ nhiệt_Sư phạm đi và yêu` trong sheet `Chủ đề 3` của file Excel tổng hợp.
- Không tự động đưa các hoạt động thuộc hai bức tường ảnh vào bản đồ nhiệt.
- Dữ liệu được gắn vào 34 tỉnh/thành hiện hành; địa danh lịch sử vẫn được giữ trong phần địa điểm chi tiết.

## Nội dung tạm hoãn để xác minh

### Phủ Lý – Hà Nam cũ, nay thuộc Ninh Bình

- Tiêu đề Excel: 300 cán bộ, sinh viên đắp đê chống lũ dưới bom đạn tại thị xã Phủ Lý.
- Nội dung chi tiết lại mô tả công trường Cống Thôn, Gia Lâm, số lượng hàng nghìn người, sau đó mới nhắc tới Phủ Lý.
- Tạm thời chưa đưa hoạt động này lên TV cho tới khi xác minh được đoạn nội dung và số liệu tương ứng.

### Sông Kinh Thầy – Hải Dương cũ, nay thuộc Hải Phòng

- Tiêu đề Excel: hơn 2.000 đoàn viên, sông Kinh Thầy, năm 1969.
- Nội dung chi tiết lại ghi hơn 1.000 cán bộ, sinh viên, công trường B12 – sông Đuống, năm 1971.
- Tạm thời chưa đưa hoạt động này lên TV cho tới khi xác minh được địa điểm, năm và số lượng.

## Trạng thái tư liệu ảnh mới

- Yên Lãng, Hà Nội: hiện có 3 file ảnh (`02`, `03`, `04`). File `Thông tin.md` trên ổ đĩa vẫn ghi 4 ảnh và liệt kê thêm file `01`; cần đồng bộ lại nếu ảnh `01` đã được bỏ.
- Hà Giang, hiện gắn với tỉnh Tuyên Quang trên bản đồ 34 tỉnh: 4 ảnh.
- Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh tại Hà Nội: 3 ảnh.
- Các đường dẫn ảnh cũ trong `scripts/data/province-activities.js` không còn phù hợp và phải được thay bằng đường dẫn mới.

## Quy tắc nội dung công khai đã chốt

- Không suy đoán tác giả ảnh nếu Excel không ghi.
- Nội dung chưa xác minh không xuất hiện trong không gian triển lãm; không hiện nhãn “đang xác minh”.
- Ảnh có tên tệp chung được đặt theo tên hoạt động và số thứ tự trung tính.
- Địa danh được trình bày theo thời điểm diễn ra, kèm địa giới hiện tại khi cần.
- Không tự biên soạn để ép mô tả đạt một độ dài cố định. Mô tả trên TV chỉ được trích nguyên văn từ Excel, `Thông tin.md` hoặc tên ảnh; nội dung dài hơn nằm trong modal.
- Chỉ sử dụng con số khi các nguồn tư liệu không mâu thuẫn.
- Không hiện nơi lưu tệp, dòng Excel, tên thư mục và ghi chú biên tập trên TV hoặc modal.
- Không thêm câu kết luận, diễn giải ý nghĩa hoặc mô tả hành động nếu nguồn không ghi trực tiếp.

## Trạng thái triển khai TV

- Dữ liệu chạy thật hiện có 8 hoạt động công khai: 5 gallery và 3 nội dung văn bản.
- Hai bản ghi Phủ Lý và sông Kinh Thầy đã được loại khỏi dữ liệu chạy thật để chờ xác minh.
- Gallery hiện có tổng cộng 12 ảnh, gồm hai ảnh mới tại Tân Lạc và Yên Khê.
- Ảnh được hiển thị theo `contain`, không cắt ảnh ngang hoặc ảnh dọc.
- Khi không thao tác, TV tự chuyển từng ảnh và chỉ chuyển hoạt động sau khi đã chiếu hết gallery.
- Chọn tỉnh vẫn duy trì tự chạy trong phạm vi các hoạt động của tỉnh.
- Tương tác thủ công tạm dừng tự chạy 15 giây; mở modal tạm dừng hoàn toàn.
