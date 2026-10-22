# Nội dung và quản trị tư liệu

## 1. Nguyên tắc nội dung

- Dùng toàn bộ nội dung gốc đã được cung cấp; không tự thêm tiêu đề, diễn giải hoặc dữ kiện lịch sử.
- Tên tệp ảnh là chú thích mặc định khi chưa có chú thích được duyệt riêng.
- Sửa chính tả hiển thị chỉ khi không làm thay đổi nghĩa; tên riêng, niên đại và chức danh cần được người phụ trách nội dung xác nhận.
- Nếu Excel và tư liệu thực tế mâu thuẫn, không tự chọn. Ghi nhận khác biệt và dùng kết luận đã được xác nhận.
- Nội dung trên tường có thể rút gọn về hình thức trình bày, nhưng modal phải giữ bản đầy đủ đã duyệt.

## 2. Nguồn chính theo cụm

| Cụm | Thư mục nguồn chính |
|---|---|
| Cụm 1 | `Tư liệu cụm 1/` |
| Cụm 2 | `Tư liệu cụm 2 - Dấu chân tình nguyện/` |
| Cụm 3 | `Tư liệu Cụm 3/` |

Word và Excel trong `Tài liệu/` là nguồn khung ý tưởng, kiểm kê và đối chiếu. Chúng không được đọc tự động khi trang chạy.

## 3. Kiểm kê hiện tại

Tại thời điểm lập tài liệu:

- Cụm 1 — Khu vực Ba Sẵn Sàng: 17 tệp.
- Cụm 1 — Khu vực Xếp bút nghiên: 24 tệp.
- Cụm 1 — Sáu gương mặt tiêu biểu: 8 tệp.
- Cụm 2: 117 tệp trong cây thư mục tư liệu.
- Cụm 3: 45 tệp trong cây thư mục tư liệu.

Số lượng này dùng để đối chiếu, không phải giới hạn. Sau mỗi đợt bổ sung cần cập nhật kiểm kê.

## 4. Quy ước thư mục

### Cụm 1

```text
Tư liệu cụm 1/
├── Khu vực Ba Sẵn Sàng/
├── Khu vực Xếp bút nghiên/
└── Ảnh một số gương mặt cán bộ, sinh viên tiêu biểu tham gia phong trào/
    ├── 1/
    ├── 2/
    ├── ...
    └── 6/
```

Số thư mục chân dung là thứ tự hiển thị. Nếu có hai ảnh:

- Ảnh có tên `Ảnh chân dung.jpg` hoặc `Chân dung.jpg`: thumbnail ngoài tường.
- Ảnh có tên mô tả đầy đủ: ảnh mở trong modal.

### Cụm 2

Giữ tiền tố phân khu và nhóm theo năm/sự kiện. Một sự kiện nên nằm trong một thư mục riêng để có thể ánh xạ ảnh, tiêu đề, năm, địa điểm và nội dung.

### Cụm 3

Giữ các khu `Khu1`, `Khu2`, `Khu 3`; nhóm thành tích/sự kiện nhiều ảnh trong thư mục riêng.

- Nội dung hiển thị lấy từ sheet **Chủ đề 3**, các hàng 46–78; không tự suy diễn hoặc bổ sung câu chữ.
- Khu 1 gồm 10 hồ sơ nhà khoa học/nhà giáo; Khu 2 gồm 10 hoạt động; Khu 3 gồm 10 thành tích có ảnh đã được duyệt.
- Hàng 75 về Robot chưa hiển thị vì ô tên tệp ảnh trong sheet để trống và thư mục chưa có ảnh được duyệt.
- Bốn bản sao tên đường dẫn an toàn cho trình duyệt nằm trong `Tư liệu Cụm 3/_web/`; tệp nguồn gốc được giữ nguyên.

## 5. Quy ước tên tệp

Tên tệp nên có cấu trúc:

```text
[Tên sự kiện hoặc mô tả ảnh], [thời gian nếu có], [địa điểm nếu cần].[đuôi]
```

Yêu cầu:

- Không đặt tên kiểu `IMG_001`, `final-final`, `ảnh mới`.
- Không dùng cùng một tên cho hai ảnh khác nhau.
- Giữ nguyên dấu tiếng Việt nếu hệ thống tệp hỗ trợ.
- Tránh ký tự `/`, `\`, `:` trong tên tệp.
- Nếu một nhóm có thứ tự bắt buộc, thêm tiền tố `01_`, `02_`.
- Tên tệp không thay thế việc kiểm chứng nội dung lịch sử.

## 6. Phiếu dữ liệu tối thiểu cho một ảnh

Mỗi ảnh đưa vào bản chính cần có:

| Trường | Bắt buộc | Ghi chú |
|---|---|---|
| Tệp ảnh | Có | Độ phân giải đủ cho modal |
| Tiêu đề/chú thích | Có | Mặc định lấy tên tệp |
| Cụm và phân khu | Có | Xác định vị trí trưng bày |
| Thời gian | Khi biết | Không đoán năm |
| Địa điểm | Khi biết | Ghi đúng tên lịch sử |
| Nhân vật | Khi biết | Họ tên, chức danh |
| Nguồn | Nên có | Sách, lưu trữ, cá nhân, đơn vị |
| Quyền sử dụng | Nên có | Tình trạng cho phép công bố |
| Nội dung dài | Tùy ảnh | Hiển thị trong modal |

## 7. Quy trình duyệt tư liệu

1. Đưa bản gốc vào thư mục đúng cụm.
2. Chuẩn hóa tên tệp nhưng không làm mất thông tin nguồn.
3. Đối chiếu Word/Excel và ghi lại điểm mâu thuẫn.
4. Người phụ trách nội dung duyệt tên, năm, nhân vật và mô tả.
5. Lập trình viên ánh xạ tệp vào data/builder.
6. Kiểm tra ảnh trên tường, modal và thứ tự tham quan.
7. Cập nhật kiểm kê và nhật ký quyết định.

## 8. Các trường hợp không được tự động hóa

- Không tự đổi nội dung trang khi Excel thay đổi.
- Không tự lấy mọi ảnh mới trong thư mục lên tường nếu chưa xác định vị trí và bố cục.
- Không dùng AI tự viết chú thích lịch sử thay dữ liệu gốc.
- Không tự nén/ghi đè ảnh nguồn. Nếu cần tối ưu, tạo bản dẫn xuất riêng và giữ bản gốc.
