# Cấu trúc dữ liệu và thư mục

## Vị trí tư liệu

```text
Thuộc 1_Bản đồ nhiệt_Sư phạm đi và yêu/
├── 2025-07-18_Mùa hè xanh - Dạy kỹ năng sống tại Hà Giang/
│   ├── Thông tin.md
│   └── 4 ảnh
├── 2025-08-10_Bình dân học vụ số - Chuyển đổi số tại Yên Lãng/
│   ├── Thông tin.md
│   └── 3 ảnh thực tế
├── 2025_Tập huấn tình nguyện viên phục vụ Lễ diễu binh và Quốc khánh/
│   ├── Thông tin.md
│   └── 3 ảnh
├── Đội Tri thức trẻ với chương trình Tiếp sức mùa thi...2026.jpg
├── Đội chuyển giao kĩ thuật nông nghiệp với công trình vườn cây thanh niên .jpg
├── GHI_CHU_TRIEN_KHAI_BAN_DO_NHIET.md
└── Tài liệu triển khai/
```

## Dữ liệu chạy thật

Tệp: `Chủ đề 3/scripts/data/province-activities.js`.

```js
{
  id,
  type: 'gallery' | 'article',
  date,
  place,
  historicalPlace,
  title,
  summary,
  fullText,
  media: [
    { src, title }
  ]
}
```

`historicalPlace` chỉ dùng khi địa danh tại thời điểm diễn ra khác đơn vị hành chính hiện dùng trên bản đồ.

## Quy tắc thư mục

- Một thư mục tương ứng một hoạt động hoặc một nhóm ảnh đã có nội dung chung.
- Hoạt động nhiều ảnh phải giữ tất cả ảnh trong `media` của cùng một hoạt động.
- Không tạo một hoạt động mới chỉ vì bổ sung một ảnh.
- `Thông tin.md` phải ghi tiêu đề, thời gian, địa điểm, nội dung nguyên văn và danh sách ảnh.
- Nếu xóa ảnh, phải đồng thời sửa `Thông tin.md` và `province-activities.js`.
- Nếu bổ sung ảnh, phải thêm tệp vào đúng thư mục và thêm một phần tử `{ src, title }` vào `media`.

## Quy tắc tên tệp

- Giữ tên có dấu tiếng Việt; trình duyệt phải chạy qua HTTP server.
- Không dùng `copy`, `(1)`, `(2)` làm nội dung hiển thị.
- Số thứ tự tệp có thể dùng `01`, `02`, `03`.
- Nếu tên tệp không mô tả rõ, tiêu đề modal dùng tên hoạt động kèm `Ảnh x/y`.
- Không đổi tên hàng loạt khi chưa cập nhật toàn bộ đường dẫn trong dữ liệu.

## Ảnh trên TV và modal

- Hiện chưa có mô hình “ảnh chân dung treo ngoài/ảnh đầy đủ trong modal” riêng cho thành phần này.
- TV và modal đang dùng cùng tệp ảnh gốc.
- Ảnh được hiển thị bằng `contain`, không crop.
- Nếu sau này tạo thumbnail, phải bổ sung trường riêng; không ghi đè tệp ảnh gốc.

## Thêm hoạt động mới

1. Bổ sung và xác minh bản ghi trong Excel.
2. Tạo thư mục hoạt động và `Thông tin.md` nếu có ảnh.
3. Đặt ảnh vào thư mục.
4. Xác định tỉnh hiện hành dùng làm `province_slug`.
5. Giữ địa danh lịch sử trong `place` hoặc `historicalPlace`.
6. Thêm hoạt động vào `PROVINCE_ACTIVITIES`.
7. Kiểm tra tỉnh đã trở thành đối tượng tương tác.
8. Cập nhật CSV, tài liệu nguồn, checklist và nhật ký.

