# Đối chiếu nội dung Chủ đề 3 — 04/11/2026

## Phạm vi và nguồn

- Chú thích hai tường: lấy nguyên văn từ MỤC_LỤC.md trong các thư mục 02 và 03; giữ nguyên thứ tự IMG và tỷ lệ ảnh.
- Bản đồ nhiệt: kết hợp 10 nhóm ảnh mới, 5 bộ ảnh cũ và danh sách địa điểm người dùng cung cấp. Không tra cứu hoặc bổ sung từ mạng.
- Khu vực 3, Cụm 3: thay tiêu đề; bản LTR copy dịch đồng bộ ảnh và tiêu đề 0,045 chiều cung (khoảng 0,75 m) về phía nhóm nhân vật Cụm 1.

## Dữ liệu chốt

`scripts/data/province-activities.js` là nguồn dữ liệu runtime. Mỗi tỉnh hiện tại chứa danh sách hoạt động theo thời gian; mỗi hoạt động có:

- `id`: mã ổn định; không dùng tiêu đề làm khóa.
- `date`, `place`, `historicalPlace` nếu cần: thời gian và địa danh theo nguồn.
- `title`, `summary`, `fullText`, `source`: nội dung và nguồn.
- `type`: `gallery` nếu có ảnh, `article` nếu chỉ có chữ.
- `mediaStatus`: `available` hoặc `text-only`.
- `media`: danh sách `{src, title, sha256}`, giữ chú thích riêng từng ảnh.

26 mục thuộc 12 tỉnh hiện tại; 66 ảnh và 8 mục chỉ có chữ. Mục lớp học tình thương Hà Nội là nội dung chữ có sẵn; 7 mục chữ còn lại bổ sung theo danh sách người dùng.

### Tách sự kiện sau rà soát

- Hà Giang 2025: tách lễ ra quân ngày 08/07/2025 (3 ảnh) và công trình tủ sách tại Phú Linh (5 ảnh). Công trình chỉ có năm 2025, không kế thừa ngày ra quân.
- Tân Lạc 2026: tách lễ xuất quân, hỗ trợ hành chính công, tiếp sức mùa thi, trải nghiệm năng lực số (mỗi sự kiện 1 ảnh). Ba ảnh chú thích chung được đặt trong mục tư liệu tổng hợp, trạng thái `needs-event-identification`; không tự gán vào bốn hoạt động trên.
- `parentCampaignId` liên kết các sự kiện thuộc cùng chiến dịch, không sử dụng làm khóa gộp ảnh.
- Giữ nguyên toàn bộ 66 ảnh và chú thích nguồn. Không tách thêm các bộ ảnh chỉ có chú thích chung khi chưa đủ bằng chứng để phân biệt sự kiện.

3 ảnh trùng byte trong các nhóm bổ sung được loại khỏi danh sách hiển thị theo SHA-256; không xóa file nguồn. Danh sách chi tiết trong JSON đi kèm. Các ảnh khác cùng hoạt động được gộp thành một bộ ảnh, không tạo hoạt động trùng. Tư liệu chưa đủ căn cứ là cùng sự kiện được giữ riêng (ví dụ Yên Khê và Con Cuông).

39 chú thích tường thay đổi; đã kiểm tra đủ 52 ảnh Panorama và 50 ảnh Trao yêu thương tồn tại.

## Đối chiếu danh sách 11 địa điểm

| Mục | Hoạt động | Trạng thái |
|---|---|---|
| 1 | Phương Độ, Hà Giang, 2014 | Chỉ chữ; gắn tỉnh Tuyên Quang trên bản đồ hiện tại |
| 2 | Minh Đài 2017; Trí thức trẻ Phú Thọ 2026 | Có ảnh cả hai hoạt động |
| 3 | Sân chơi Bắc Kạn 2018 | Có ảnh; gắn Thái Nguyên, giữ Bắc Kạn trong địa danh |
| 4 | Khắc phục lũ Văn Chấn, Yên Bái 2018 | Có ảnh; gắn Lào Cai, giữ địa danh trong nội dung |
| 5 | Tủ sách Phú Lương, Thái Nguyên 2018 | Chỉ chữ |
| 6 | Thư viện Lý Sơn, Quảng Ngãi 2018 | Chỉ chữ |
| 7 | Tân Bình, Như Xuân, Thanh Hóa 2024 | Có 5 ảnh |
| 8 | Công tác xã hội, Hà Giang 2025 | Có ảnh; gộp ảnh mới vào hoạt động đã có |
| 9 | Chuyển giao KHKT Con Cuông, Nghệ An 2026 | Có ảnh; giữ riêng bộ Yên Khê đã có |
| 10 | Thuận Thành và Tân Yên 2011 | Hai hoạt động chỉ chữ, gắn Bắc Ninh |
| 11 | Duy Tiên 2010; tiếng Anh tiểu học 2025; Phù Vân 2026 | Hai mục đầu chỉ chữ; Phù Vân có ảnh |

Mục 11 được gắn vào Ninh Bình theo tên tỉnh trong bộ ảnh Phù Vân và địa danh Hà Nam cũ. Không dùng nhãn “Nam Định (Hà Nam cũ)” như thể Hà Nam là tên cũ của Nam Định. Mục dạy tiếng Anh 2025 chưa có xã/điểm trường cụ thể nên ghi rõ hạn chế này trong nội dung.

## Kiểm tra dữ liệu

Chạy từ thư mục gốc dự án:

```sh
node 'Chủ đề 3/scripts/audit-content-update.mjs'
```

Lệnh kiểm tra id trùng, file thiếu, ảnh đổi nội dung và ảnh trùng byte trong cùng hoạt động. Không thay đổi hay xóa các file ảnh.
