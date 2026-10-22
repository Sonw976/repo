# Đặc tả bản đồ, TV và modal

## Luồng tương tác

```text
Bản đồ Việt Nam
└── Bấm một miền có dữ liệu
    ├── Bản đồ Việt Nam thu nhỏ sang trái
    └── Bản đồ miền xuất hiện
        └── Bấm một tỉnh có dữ liệu
            └── TV hiển thị hoạt động của tỉnh
                ├── Chuyển ảnh trong hoạt động
                ├── Chuyển hoạt động
                └── Bấm TV để mở modal
```

Bấm lại bản đồ Việt Nam khi đang xem miền sẽ đóng bản đồ miền và phục hồi bản đồ Việt Nam.

## Trạng thái tương tác của tỉnh

- Chỉ tỉnh có ít nhất một hoạt động công khai mới được hover và click.
- Tỉnh không có hoạt động dùng màu trung tính trong bản đồ miền.
- Tỉnh không có hoạt động không được đăng ký vào raycast.
- Hoạt động `pending` không được tính là dữ liệu của tỉnh.
- Số lượng hoạt động được tính theo hoạt động, không tính theo số ảnh.

## Bản đồ Việt Nam và bản đồ miền

- Bản đồ Việt Nam dùng một màu đỏ thống nhất và không hiện ranh giới tỉnh.
- Hà Nội được đánh dấu bằng ngôi sao vàng.
- Bản đồ chi tiết miền mới hiện ranh giới và màu tỉnh.
- Khi hover, mesh tương tác được nâng khỏi mặt bản đồ.
- Ngôi sao Hà Nội đi theo mesh bản đồ khi bản đồ thay đổi trạng thái.

## TV khi chưa chọn tỉnh

- TV tự chạy toàn bộ hoạt động công khai.
- Hoạt động một ảnh hoặc không ảnh hiển thị 7,5 giây.
- Hoạt động nhiều ảnh: ảnh đầu 6 giây, ảnh tiếp theo 5 giây.
- Ảnh cuối được cộng thêm 2 giây trước khi đổi hoạt động.
- Phải chiếu hết ảnh của hoạt động trước khi chuyển hoạt động tiếp theo.

## TV khi đã chọn tỉnh

- Chỉ chạy các hoạt động thuộc tỉnh đang chọn.
- Khi có nhiều hoạt động, tự chuyển vòng sau khi chiếu hết gallery hiện tại.
- Hai nút khối đặc nằm ngoài TV dùng để chuyển hoạt động thủ công.
- Nút trong vùng ảnh dùng để chuyển ảnh của cùng hoạt động.
- Chỉ báo ảnh dùng dạng `ẢNH x/y`.

## Tạm dừng và tiếp tục

- Chuyển ảnh hoặc hoạt động thủ công: tạm dừng tự động 15 giây rồi tiếp tục.
- Mở modal: dừng bộ đếm.
- Mở tài liệu hoặc hướng dẫn: dừng bộ đếm.
- Tab trình duyệt bị ẩn: dừng bộ đếm.
- Khi đóng nội dung hoặc quay lại tab: tính lại thời gian từ đầu.

## Bố cục TV

- Gallery: ảnh ở trái, thông tin hoạt động ở phải.
- Article: phần văn bản dùng toàn bộ vùng nội dung; không tạo ô ảnh trống.
- Ảnh dùng `contain`, giữ nguyên tỷ lệ.
- Không hiển thị nguồn nội bộ, số dòng Excel hoặc trạng thái xác minh.
- Dải điều khiển ảnh không phủ lên nội dung ảnh.

## Modal

### Hoạt động có ảnh

- Dùng cùng chế độ `photo-caption` với ảnh Cụm 1.
- Ảnh được phóng lớn và dùng `object-fit: contain`.
- Dải xanh dưới ảnh hiển thị tên ảnh hoặc nhãn trung tính.
- Không hiện tên khu vực, metadata hoặc nguồn nội bộ.
- Gallery nhiều ảnh có nút số để chuyển ảnh.

### Hoạt động văn bản

- Dùng modal thông tin thông thường.
- Tiêu đề và nội dung lấy nguyên văn nguồn.
- Nội dung dài được đọc trong modal, không ép vào TV.

## Các hàm chính

- `handleVietnamMapSelection()` — chọn tỉnh.
- `renderHeatmapActivity()` — kết xuất một hoạt động lên TV.
- `navigateHeatmapImage()` — chuyển ảnh.
- `navigateProvinceActivity()` — chuyển hoạt động thủ công.
- `updateHeatmapOverviewSlideshow()` — điều phối ảnh và hoạt động tự động.
- `openHeatmapActivityModal()` — mở modal.
- `updateHeatmapTV()` — vẽ giao diện TV lên canvas.

