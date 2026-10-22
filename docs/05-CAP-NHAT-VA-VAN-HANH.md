# Hướng dẫn cập nhật và vận hành

## 1. Chạy cục bộ

Không mở `cd3_1.html` trực tiếp bằng `file://`. Từ thư mục dự án, chạy một HTTP server, ví dụ:

```bash
python3 -m http.server 8080
```

Sau đó mở đường dẫn tương ứng tới `Chủ đề 3/cd3_1.html` trên `http://127.0.0.1:8080/`.

Windows có thể dùng `start-scene-3.ps1` nếu tệp này có trong bản bàn giao.

## 2. Thêm hoặc thay ảnh

1. Giữ bản ảnh gốc trong thư mục tư liệu đúng cụm.
2. Đặt tên mô tả rõ ràng theo tài liệu quản trị tư liệu.
3. Xác định ảnh thuộc nhóm nào, có tiêu đề chung hay riêng.
4. Cập nhật đường dẫn trong data/builder đang quản lý nhóm đó.
5. Không thay ảnh bằng cách đổi tên một tệp khác nếu việc đó làm mất dấu nguồn.
6. Mở chế độ preview thích hợp, kiểm tra tường và modal.
7. Kiểm tra Network để bảo đảm ảnh trả HTTP 200.

## 3. Cập nhật nội dung

- Nội dung ngắn trên tường và nội dung modal là hai lớp khác nhau.
- Nếu ô chữ chật, điều chỉnh cỡ chữ, padding hoặc chiều cao ô; không tự cắt câu có ý nghĩa lịch sử.
- Khối chữ không tương tác phải có `interactive: false` hoặc không được đưa vào danh sách raycast.
- Khi bỏ năm nhỏ trong caption, năm vẫn phải tồn tại ở tiêu đề khu hoặc metadata modal nếu cần.

## 4. Thêm chân dung

1. Tạo thư mục số theo thứ tự mong muốn.
2. Đặt ảnh chân dung riêng nếu có.
3. Đặt ảnh đầy đủ có tên mô tả để dùng trong modal.
4. Bổ sung `role`, `name`, `wallImage`/quy tắc chọn thumbnail và `full` trong danh sách chân dung.
5. Nếu vượt quá sáu người, phải thiết kế lại lưới; không thu nhỏ toàn bộ đến mức chữ khó đọc.

## 5. Cập nhật Cụm 2 và Cụm 3

- Tư liệu mới chỉ được đưa lên sau khi có ánh xạ sự kiện/phân khu.
- Giữ nhóm theo năm ở Cụm 2 và theo khu nội dung ở Cụm 3.
- Nếu folder có ảnh mới nhưng data chưa tham chiếu, ảnh sẽ không tự xuất hiện; đây là hành vi có chủ ý.

## 6. Phá cache sau cập nhật

Khi trình duyệt vẫn dùng bản cũ, tăng chuỗi version trong `cd3_1.html`, ví dụ:

```html
<link rel="stylesheet" href="./styles/chu-de-3.css?v=YYYYMMDD-N">
<script type="module" src="./scripts/main.js?v=YYYYMMDD-N"></script>
```

Chỉ tăng version của tài nguyên đã đổi. Sau đó reload cứng (`Ctrl+Shift+R`).

## 7. Chẩn đoán lỗi thường gặp

| Hiện tượng | Nguyên nhân thường gặp | Cách kiểm tra |
|---|---|---|
| Ảnh vỡ/link lỗi | Sai tên, sai dấu, sai thư mục | Network, URL đã mã hóa, `find`/`rg` tên thật |
| Chữ nhỏ/vỡ nét | Canvas độ phân giải thấp hoặc mesh bị scale | Kiểm tra canvas size, font size, scale mesh |
| Chữ kéo dãn | Ép tỉ lệ mesh/canvas sau khi vẽ | Vẽ lại texture theo đúng khung |
| Bảng không ôm tường | Dùng tọa độ phẳng hoặc góc xoay sai | Kiểm tra bán kính, angle và `faceCoreRotY` |
| Nhấp nháy | Hai bề mặt gần đồng phẳng | Tách depth/radius nhỏ, tránh z-fighting |
| Modal quá cao | Ảnh dài hoặc nội dung cố định chiều cao | Dùng max-height theo viewport và scroll hợp lý |
| Hover không tắt | Material gốc không được phục hồi | Kiểm tra state hover/raycast |
| Không có âm thanh | Chưa có user gesture hoặc sai đường dẫn | Bấm Start, kiểm tra console/network |

## 8. Bàn giao

Bản bàn giao tối thiểu gồm:

- Toàn bộ mã Chủ đề 3.
- Ba thư mục tư liệu nguồn.
- Infographic và âm thanh cục bộ.
- Bộ tài liệu trong `docs/`.
- Danh sách nội dung chưa duyệt hoặc còn thiếu nguồn.
- Kết quả checklist nghiệm thu gần nhất.
- Hướng dẫn server/URL triển khai thực tế.
