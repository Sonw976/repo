# Triển khai độc lập Chủ đề 3

Copy **toàn bộ nội dung** thư mục này vào gốc repository triển khai, bao gồm
`index.html`, `.nojekyll`, `scripts`, `styles`, `vendor`, `media`, `json_map`,
`image`, `infographic` và tất cả các thư mục tư liệu, nhạc MP3.
Không chỉ copy các file HTML. Giữ nguyên chữ hoa/thường và dấu trong tên tệp.

GitHub Settings → Pages → Deploy from a branch → chọn nhánh và thư mục root.
`index.html` mở bản `cd3_1_ltr copy.html` (bản đồ xanh, có biên tỉnh).
Có thể mở bản chính qua `cd3_1_ltr.html`.

Nếu giữ nguyên thư mục `Chủ đề 3` bên trong một repository lớn, truy cập
`/tên-repository/Chủ%20đề%203/`. Đặt thêm `.nojekyll` ở gốc repository nếu
không dùng quy trình build riêng. Không cần thư mục của chủ đề khác.

Three.js r185, font Roboto, nhạc và video đã được đóng gói cục bộ.
Các liên kết bài viết tham khảo vẫn mở website bên ngoài khi người xem bấm.
Cửa chính trở về trang đầu Chủ đề 3 trong chế độ triển khai độc lập.

Video mẫu bên ngoài trả về 403 đã được thay bằng bản tư liệu `18.mp4`
có sẵn trong dự án, lưu tại `media/lobby.mp4`. Nhạc Mozart vẫn là chương I
Giao hưởng số 40, tải từ Wikimedia Commons (tệp gốc thuộc phạm vi công cộng):
https://commons.wikimedia.org/wiki/File:Wolfgang_Amadeus_Mozart_-_Symphony_40_g-moll_-_1._Molto_allegro.ogg

Giấy phép thư viện và font nằm tại `vendor/three/LICENSE`, `vendor/fonts/OFL.txt`.
Chạy bằng HTTP/HTTPS; mở trực tiếp bằng `file://` không hỗ trợ ES modules.

Kiểm tra đường dẫn tư liệu trước khi upload:

```sh
node scripts/check-deployment.mjs
```

Kết quả kiểm thử độc lập ngày 02/11/2026: 164 tham chiếu tư liệu hợp lệ;
trình duyệt tải 157 nguồn ảnh không thất bại, không lỗi JavaScript và
không yêu cầu tài nguyên từ domain bên ngoài trong quá trình khởi tạo.
Ảnh Nguyễn Nguyên Phú đã được xác nhận hiển thị trên tường giữa Cụm 3.
