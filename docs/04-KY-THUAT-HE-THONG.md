# Kiến trúc kỹ thuật

## 1. Công nghệ

- HTML5, CSS3 và JavaScript ES module.
- Three.js `0.185.1` tải qua jsDelivr import map.
- WebGL 2, `renderer.setAnimationLoop()`.
- Texture từ ảnh/canvas/video, âm thanh vị trí 3D và raycasting.
- Không có bước build bắt buộc; chạy qua HTTP server tĩnh.

Trang cần Internet nếu vẫn dùng Three.js CDN hoặc tài nguyên ngoài. Để triển khai ngoại tuyến phải tải dependency về cục bộ và sửa import map.

## 2. Cấu trúc mã

```text
Chủ đề 3/
├── cd3_1.html
├── styles/chu-de-3.css
├── scripts/
│   ├── main.js
│   ├── config/
│   │   ├── assets.js
│   │   └── scene-config.js
│   ├── data/
│   │   ├── zone-content.js
│   │   ├── zone2-content.js
│   │   ├── zone2-photo-wall-content.js
│   │   └── province-activities.js
│   ├── geometry/radial-geometry.js
│   ├── collision/radial-collision.js
│   ├── interaction/
│   ├── exhibits/
│   ├── runtime/
│   └── tools/
├── styles/
├── infographic/
└── Tư liệu .../
```

`main.js` vẫn là entry điều phối và còn chứa nhiều builder chuyên biệt. Khi tách tiếp, phải giữ nguyên metadata `userData`, danh sách `interactiveObjects` và quy tắc tọa độ cực.

## 3. Cấu hình không gian

Các hằng số chính nằm tại `scripts/config/scene-config.js`:

| Hằng số | Giá trị | Ý nghĩa |
|---|---:|---|
| `EYE_Y` | 2.5 | Cao độ mắt/camera |
| `WALL_H` | 10.5 | Chiều cao tường |
| `R_CORE` | 7.75 | Bán kính lõi |
| `R_OUTER` | 18.5 | Bán kính tường ngoài |
| `WALL_THICK` | 0.4 | Độ dày tường |
| `FRAME_DEPTH` | 0.12 | Chiều sâu phần trưng bày |
| `WALL_MOUNT_GAP` | 0.15 | Khe giữa tường và vật treo |

Hệ tọa độ:

```text
x = cos(angle) × radius
z = sin(angle) × radius
y = cao độ tính từ sàn
```

Mọi bảng trên tường cong phải được đặt theo góc và bán kính, sau đó xoay hướng về khu quan sát.

## 4. Luồng khởi tạo

```text
cd3_1.html
  → import Three.js
  → main.js
  → kiểm tra WebGL 2
  → renderer / scene / camera
  → kiến trúc, sàn, tường, trần, ánh sáng
  → nội dung Cụm 1, Cụm 2, Cụm 3
  → input, raycast, modal, audio
  → animation loop
```

## 5. Dữ liệu và builder

- `ZONE_CONTENT`: metadata cấp cụm và nội dung có cấu trúc.
- Cụm 1 `editorial-v2`: builder chuyên biệt trong `buildZone1EditorialV2()` vì bố cục bảo tàng được tinh chỉnh thủ công.
- Cụm 2: dữ liệu ảnh và sự kiện tách tại `zone2-photo-wall-content.js` và `zone2-content.js`.
- Cụm 3: nội dung và cấu hình timeline đọc từ `scripts/data/zone3-content.js`; `zone-content.js` chỉ giữ metadata cấp cụm. Ảnh lấy từ `Tư liệu Cụm 3/`.

Khi thêm hiện vật tương tác, object phải:

1. Có texture/mesh hiển thị.
2. Được thêm vào `interactiveObjects`.
3. Có `userData` gồm loại, tiêu đề, ảnh, nội dung và chế độ modal cần thiết.
4. Có trạng thái hover và khả năng phục hồi material sau hover.

## 6. Modal

`openInfo` đọc metadata của hiện vật và gắn class lên `#info-panel`:

- `photo-caption-mode`: ảnh và chú thích.
- `infographic-mode`: chỉ ảnh infographic.
- Chế độ mặc định: tiêu đề, metadata, nội dung và ảnh.

Ảnh ngoài tường và ảnh modal có thể khác nhau bằng `imageUrl` và `modalImageUrl`, đang dùng cho một số chân dung.

## 7. Điều khiển và va chạm

- Xoay: kéo chuột trái.
- Di chuyển: WASD/phím mũi tên.
- Tương tác: raycast theo vị trí con trỏ.
- Va chạm: `createRadialCollision()` giới hạn camera trong vành tham quan và xử lý trượt theo tường.
- Camera luôn trở về cao độ `EYE_Y` khi di chuyển.

## 8. Âm thanh

Mỗi cụm có một nguồn `PositionalAudio`, cấu hình tại `assets.js` và `scene-config.js`. Audio chỉ được khởi động sau thao tác người dùng do chính sách autoplay. UI cung cấp mute và điều chỉnh âm lượng.

## 9. URL kiểm tra

Các tham số hỗ trợ kiểm tra nhanh:

| URL parameter | Mục đích |
|---|---|
| `?ceilingPreview=1` | Xem tổng thể trần |
| `?ceilingPreview=zone1` | Xem trần Cụm 1 |
| `?ceilingPreview=zone2` | Xem trần Cụm 2 |
| `?ceilingPreview=zone3` | Xem trần Cụm 3 |
| `?contentPreview=zone1` | Đặt camera kiểm tra tường ngoài Cụm 1 |
| `?contentPreview=inner1` | Kiểm tra mặt trong/tường lõi Cụm 1 |
| `?contentPreview=zone2` | Kiểm tra Cụm 2 |
| `?contentPreview=zone3` | Kiểm tra Cụm 3 |
| `?contentPreview=overview1` | Góc tổng quan Cụm 1 |

Một số chế độ có thể nhận thêm `previewFraction` tùy logic hiện hành. Khi dùng URL kiểm thử phải xác nhận trong console rằng chế độ được nhận đúng.

## 10. Quy tắc chỉnh mã an toàn

- Không đổi bán kính/góc cụm riêng lẻ nếu chưa kiểm tra va chạm, trần, cột và lối cửa.
- Không hard-code đường dẫn mới ở nhiều nơi; ưu tiên data/config hoặc hằng gốc của phân khu.
- Không scale mesh chứa chữ để “fit”; vẽ lại canvas với font/kích thước phù hợp.
- Sau khi đổi ảnh, tăng query version ở entry nếu cần phá cache.
- Giữ URL tiếng Việt được mã hóa đúng; kiểm tra HTTP 200 cho từng asset.
- Không xóa tư liệu nguồn chỉ vì ảnh chưa được sử dụng trên tường.
