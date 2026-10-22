const PANORAMA_ROOT = 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 2_Bức tường Panorama/Ảnh đẩy lên phòng/02_Bức tường Panorama_Chiến dịch hè/';
const LOVE_ROOT = 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 3_Bức tường trao yêu thương/Ảnh đẩy lên phòng/Thuộc 03_Bức tường trao yêu thương/';

const series = (base, count, suffix = index => `(${index})`) =>
    Array.from({ length: count }, (_, index) => `${base}${index === 0 ? '' : suffix(index)}.jpg`);

const numberedSeries = (base, from, to) =>
    Array.from({ length: to - from + 1 }, (_, index) => `${base} (${from + index}).jpg`);

function event({ id, title, year, location = '', description, category, files, root }) {
    return Object.freeze({
        id, title, year, location, description, category,
        photos: Object.freeze(files.map((file) => Object.freeze({
            title,
            year,
            location,
            content: description,
            source: 'Tư liệu Đoàn TN – Hội SV Trường ĐHSP Hà Nội',
            imageUrl: `${root}${file}`
        })))
    });
}

export const ZONE2_PANORAMA_EVENTS = Object.freeze([
    event({
        id: 'he-2016', title: 'CHIẾN DỊCH TÌNH NGUYỆN HÈ 2016', year: '2016', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Những hình ảnh từ chiến dịch tình nguyện hè và lễ ra quân của tuổi trẻ Trường ĐHSP Hà Nội năm 2016.',
        files: [
            'Chiến dịch tình nguyện hè 2016. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN.jpg',
            ...series('Lễ ra quân chiến dịch tình nguyện hè 2016. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN', 2)
        ]
    }),
    event({
        id: 'mhx-2019', title: 'TIẾP SỨC ĐẾN TRƯỜNG · MÙA HÈ XANH', year: '2019', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Đội thanh niên tình nguyện hỗ trợ học tập và tiếp sức đến trường trong Chiến dịch Mùa hè xanh 2019.',
        files: [
            'Đội TNTN tiếp sức đến trường Mùa hè xanh 2019 Đội TNTN tiếp sức đến trường Mùa hè xanh 2019. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN.jpg',
            'Đội TNTN tiếp sức đến trường Mùa hè xanh 2019. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN.jpg'
        ]
    }),
    event({
        id: 'he-2020', title: 'CHIẾN DỊCH TÌNH NGUYỆN HÈ 2020', year: '2020', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Dấu ấn chiến dịch Thanh niên tình nguyện hè và lễ ra quân năm 2020.',
        files: [
            'Chiến dịch Thanh niên Tình nguyện hè 2020. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội.jpg',
            'Lễ ra quân chiến dịch tình nguyện hè năm 2020.jpg'
        ]
    }),
    event({
        id: 'he-2022', title: 'TỔNG KẾT CHIẾN DỊCH HÈ', year: '2022', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Hội nghị tổng kết, ghi nhận hoạt động và những đóng góp trong chiến dịch tình nguyện hè năm 2022.',
        files: series('Hội nghị tổng kết chiến dịch tình nguyện hè 2022. Nguồn_ Đoàn TN - Hội SV trường ĐHSPHN', 2)
    }),
    event({
        id: 'mhx-2023', title: 'CHIẾN DỊCH MÙA HÈ XANH', year: '2023', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Hoạt động của tuổi trẻ Trường ĐHSP Hà Nội trong Chiến dịch Mùa hè xanh năm 2023.',
        files: ['Chiến dịch Mùa hè Xanh 2023.jpg', 'Chiến dịch Mùa hè xanh 2023.jpg']
    }),
    event({
        id: 'mhx-2024', title: 'MÙA HÈ XANH · ĐỘI HÌNH CHUYÊN MÔN', year: '2024', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Các đội hình môi trường, thư viện, dạy học tiếng Anh và giáo dục kỹ năng cùng tham gia Mùa hè xanh 2024.',
        files: [
            ...series('Chiến dịch Thanh niên Tình nguyện hè 2024. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 2),
            ...series('Chiến dịch mùa hè xanh Đội Vì Môi Trường 2024. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN', 3),
            'Đội SVTN dạy kĩ năng sống cho trẻ em Mùa hè xanh 2024. Nguồn_ Đoàn TN - Hội SV trường ĐHSPHN.jpg',
            ...series('Đội Tình nguyện Hỗ trợ Thư viện - Mùa hè xanh 2024', 2),
            'Đội hỗ trợ dạy học tiếng Anh cho sinh viên Mùa hè xanh 2024. Nguồn_ Đoàn TN - Hội SV trường ĐHSPHN(1).jpg',
            'Đội hỗ trợ dạy học tiếng anh cho sinh viên Mùa hè xanh 2024. Nguồn_ Đoàn TN - Hội SV trường ĐHSPHN.jpg'
        ]
    }),
    event({
        id: 'mhx-2025', title: 'RA QUÂN CHIẾN DỊCH HÈ', year: '2025', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Lễ ra quân và các đội hình tình nguyện bắt đầu hành trình Mùa hè xanh, Giao thông xanh năm 2025.',
        files: [
            'Lễ ra quân chiến dịch Thanh niên Tình nguyện hè 2025. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội.jpg',
            ...series('Lễ ra quân chiến dịch tình nguyện hè 2025', 3),
            ...series('Ngày ra quân chiến dịch tình nguyện Mùa hè xanh 2025. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 4),
            'Đội Giao thông xanh tham gia chiến dịch Thanh niên Tình nguyện hè 2025.jpg'
        ]
    }),
    event({
        id: 'mhx-2026', title: 'MÙA HÈ XANH · CHUYỂN GIAO KỸ THUẬT', year: '2026', category: 'timeline', root: PANORAMA_ROOT,
        description: 'Lễ ra quân và hoạt động của Đội chuyển giao kỹ thuật nông nghiệp trong Chiến dịch Mùa hè xanh 2026.',
        files: [
            ...series('Lễ ra quân chiến dịch Thanh niên Tình nguyện hè 2026. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 3),
            'Đội Chuyển giao Kỹ thuật nông nghiệp - Chiến dịch Mùa hè xanh 2026.jpg',
            ...series('Đội chuyển giao kĩ thuật nông nghiệp Mùa hè xanh 2026. Nguồn_ Page Đoàn TN - Hội SV trường ĐHSPHN', 2)
        ]
    }),
    event({
        id: 'tsmt', title: 'TIẾP SỨC MÙA THI', year: 'Nhiều năm', category: 'team', root: PANORAMA_ROOT,
        description: 'Sinh viên HNUE đồng hành, hướng dẫn và hỗ trợ thí sinh cùng gia đình trong các kỳ thi.',
        files: series('Chiến dịch Tiếp sức mùa thi. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 9)
    }),
    event({
        id: 'nghe-tinh', title: 'ĐỘI SVTN ĐỒNG HƯƠNG NGHỆ TĨNH', year: '2001–nay', category: 'team', root: PANORAMA_ROOT,
        description: 'Hình ảnh hoạt động của Đội SVTN Đồng hương Nghệ Tĩnh và chiến dịch Xuân Yêu Thương 2026 – Đơm.',
        files: [
            ...numberedSeries('Đội SVTN Đồng hương Nghệ Tĩnh Trường ĐHSP Hà Nội', 1, 13),
            ...series('Đội SVTN Đồng hương Nghệ Tĩnh Trường ĐHSP Hà Nội tổ chức chiến dịch _Xuân Yêu Thương_ 2026 - Đơm. Nguồn_ Fanpage', 3)
        ]
    })
]);

export const ZONE2_LOVE_EVENTS = Object.freeze([
    event({ id: 'sac-vang', title: 'SẮC VÀNG HOÀNG YẾN', year: '2024–2026', category: 'blood', root: LOVE_ROOT,
        description: 'Các chương trình và lễ ra quân hiến máu Sắc vàng Hoàng Yến của sinh viên Trường ĐHSP Hà Nội.',
        files: [
            '(HA-03-08) Chương trình hiến máu Sắc vàng hoàng yến 2025. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội.jpg',
            ...series('(HA-03-08) Lễ ra quân chương trình hiến máu Sắc vàng hoàng yến 2026. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội', 2),
            'Chương trình hiến máu Sắc vàng hoàng yến 2024. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội.jpg',
            ...series('Chương trình hiến máu Sắc vàng hoàng yến 2026. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội', 4)
        ] }),
    event({ id: 'huong-duong', title: 'ĐIỂM HIẾN MÁU HƯỚNG DƯƠNG', year: '2026', category: 'blood', root: LOVE_ROOT,
        description: 'Sinh viên Trường ĐHSP Hà Nội tham gia và hỗ trợ hoạt động hiến máu tình nguyện tại Điểm Hướng Dương.',
        files: series('(HA-03-10) Sinh viên tham gia hoạt động tại Điểm hiến máu Hướng Dương. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội', 3) }),
    event({ id: 'mua-he-nhan-ai', title: 'MÙA HÈ NHÂN ÁI', year: '2026', category: 'blood', root: LOVE_ROOT,
        description: 'Sinh viên HNUE tham gia hiến máu tình nguyện tại Ngày hội Mùa hè nhân ái 2026.',
        files: series('(HA-03-15) Sinh viên Trường ĐHSP Hà Nội tại Ngày hội hiến máu _Mùa hè nhân ái_ 2026, tham gia hiến máu tình nguyện. Nguồn_ CLB Thanh niên vận động hiến máu trường ĐHSP Hà Nội', 2) }),
    event({ id: 'phat-chao', title: 'SUẤT ĂN YÊU THƯƠNG', year: '2025', location: 'Viện Huyết học – Truyền máu Trung ương', category: 'patients', root: LOVE_ROOT,
        description: 'Top 21 Miss HNUE 2025 hỗ trợ phát cháo từ thiện, sẻ chia cùng người bệnh và gia đình.',
        files: series('Top 21 Miss HNUE 2025 tại Viện Huyết học - Truyền máu Trung ương, hỗ trợ phát cháo từ thiện cho bệnh nhân. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 7) }),
    event({ id: 'tham-benh', title: 'THĂM HỎI NGƯỜI BỆNH', year: '2025', location: 'Viện Huyết học – Truyền máu Trung ương', category: 'patients', root: LOVE_ROOT,
        description: 'Đoàn Thanh niên Trường ĐHSP Hà Nội thăm hỏi, động viên người bệnh tại Viện Huyết học – Truyền máu Trung ương.',
        files: series('Đoàn Thanh niên trường ĐHSP Hà Nội đến thăm hỏi bệnh nhân tại Viện Huyết học - Truyền máu Trung ương. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 3) }),
    event({ id: 'benh-vien-e', title: 'TRAO QUÀ BỆNH NHI', year: '2026', location: 'Bệnh viện E', category: 'patients', root: LOVE_ROOT,
        description: 'Đội sinh viên tình nguyện trao quà và động viên bệnh nhi tại Bệnh viện E nhân dịp Quốc tế Thiếu nhi.',
        files: [...series('(HA-03-16) Đội Sinh viên tình nguyện trường ĐHSP Hà Nội tại Bệnh viện E, trao quà cho bệnh nhi Nguồn_ Đoàn TN - Hội SV Trường ĐHSP Hà Nội', 3), '(HA-03-16) Đội Sinh viên tình nguyện.jpg'] }),
    event({ id: 'chuyen-xe-tet', title: 'CHUYẾN XE VỀ QUÊ ĐÓN TẾT', year: '2026', category: 'students', root: LOVE_ROOT,
        description: 'Đoàn Trường hỗ trợ sinh viên trở về quê sum họp cùng gia đình trong dịp Tết Bính Ngọ 2026.',
        files: series('(HA-03-11) Đoàn Trường ĐHSP Hà Nội, tổ chức “Chuyến xe về quê đón Tết Bính Ngọ 2026”, hỗ trợ sinh viên về quê đón Tết. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 3) }),
    event({ id: 'ho-tro-sinh-vien', title: 'TRAO GỬI HỖ TRỢ SINH VIÊN', year: '2025', category: 'students', root: LOVE_ROOT,
        description: 'Ban Thường vụ Đoàn trường trao gửi những hỗ trợ thiết thực, đồng hành cùng sinh viên.',
        files: ['Ban Thường vụ Đoàn trường ĐHSP Hà Nội, trao gửi hỗ trợ thiết thực cho sinh viên. Nguồn Đoàn TN - Hội SV trường ĐHSP Hà Nội. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội.jpg', 'Ban Thường vụ Đoàn trường ĐHSP Hà Nội, trao gửi hỗ trợ thiết thực cho sinh viên. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội.jpg'] }),
    event({ id: 'phuong-tien', title: 'PHƯƠNG TIỆN ĐỒNG HÀNH', year: '2026', category: 'students', root: LOVE_ROOT,
        description: 'Lễ tiếp nhận 15 xe máy điện và 150 xe đạp hỗ trợ điều kiện học tập, sinh hoạt của sinh viên.',
        files: series('(HA-03-17) Lễ tiếp nhận 15 xe máy điện, 150 xe đạp hỗ trợ sinh viên. Nguồn_ Đoàn TN - Hội SV Trường ĐHSP Hà Nội', 4) }),
    event({ id: 'hoc-bong', title: 'HỌC BỔNG ĐỒNG HÀNH', year: '2024–2026', category: 'students', root: LOVE_ROOT,
        description: 'Trường ĐHSP Hà Nội trao học bổng đồng hành cùng học sinh, sinh viên có hoàn cảnh khó khăn.',
        files: series('Trường ĐHSP Hà Nội trao học bổng đồng hành với học sinh, sinh viên vùng khó khăn. Nguồn_ Đoàn TN - Hội SV Trường ĐHSP Hà Nội', 2) }),
    event({ id: 'ninh-binh', title: 'TRI ÂN NGƯỜI CÓ CÔNG', year: '', location: 'Ninh Bình', category: 'community', root: LOVE_ROOT,
        description: 'Đoàn Thanh niên thăm hỏi và tặng quà gia đình người có công với cách mạng tại Ninh Bình.',
        files: ['Đoàn TN trường ĐHSP Hà Nội thăm hỏi và tặng quà gia đình người có công với cách mạng tại Ninh Bình.jpg'] }),
    event({ id: 'tu-sach', title: 'TỦ SÁCH NHỎ – GIẤC MƠ LỚN', year: '', location: 'Tuyên Quang', category: 'community', root: LOVE_ROOT,
        description: 'Đội sinh viên tình nguyện dạy kỹ năng sống và xây dựng công trình Tủ sách nhỏ – Giấc mơ lớn cho trẻ em.',
        files: ['Đội SV tình nguyện dạy kĩ năng sống cho trẻ em, Tuyên Quang, công trình Tủ sách nhỏ - Giấc mơ lớn.jpg'] }),
    event({ id: 'chu-nhat-xanh', title: 'CHỦ NHẬT XANH', year: '2026', category: 'community', root: LOVE_ROOT,
        description: 'Đội Tình nguyện Vì Môi trường chung tay làm sạch cảnh quan và lan tỏa lối sống xanh.',
        files: series('Đội TN Vì Môi Trường tổ chức hoạt động _Chủ nhật Xanh lần thứ III” năm 2026. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 6) }),
    event({ id: 'clean-up', title: 'CLEAN UP VIỆT NAM', year: 'Lần thứ 8', category: 'community', root: LOVE_ROOT,
        description: 'Đội Vì Môi trường tham gia chiến dịch Clean Up Việt Nam lần thứ 8.',
        files: series('Đội Vì Môi trường tham gia chiến dịch Clean up Việt Nam lần thứ 8. Nguồn_ Đoàn TN - Hội SV trường ĐHSP Hà Nội', 4) })
]);

export const ZONE2_DOCUMENTS = Object.freeze({
    panorama: Object.freeze([
        Object.freeze({
            id: 'anh-sang-van-hoa-he', title: 'ÁNH SÁNG VĂN HÓA HÈ', pageCount: 9,
            pdfUrl: 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 2_Bức tường Panorama/Chiến dịch _Ánh sáng văn hóa hè_.pdf'
        }),
        Object.freeze({
            id: 'mhx-tsmt-lich-su', title: 'MÙA HÈ XANH & TIẾP SỨC MÙA THI', pageCount: 16,
            pdfUrl: 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 2_Bức tường Panorama/Chiến dịch Mùa hè xanh và Tiếp sức mùa thi.pdf'
        })
    ]),
    love: Object.freeze([
        Object.freeze({
            id: 'hien-mau-lich-su', title: 'CHIẾN DỊCH HIẾN MÁU NHÂN ĐẠO', pageCount: 9,
            pdfUrl: 'Tư liệu cụm 2 - Dấu chân tình nguyện/Thuộc 3_Bức tường trao yêu thương/Chiến dịch Hiến máu nhân đạo.pdf'
        })
    ])
});

export const ZONE2_HISTORICAL_CARDS = Object.freeze({
    panorama: Object.freeze([
        Object.freeze({
            id: 'tinh-nguyen-1956',
            placement: 'start',
            title: 'TỪ GIẢNG ĐƯỜNG ĐẾN CỘNG ĐỒNG',
            period: '1956',
            summary: 'Sinh viên Sư phạm kiến thiết Thủ đô, tham gia Ngày Chủ nhật lao động và dạy Bình dân học vụ.',
            content: 'Hưởng ứng lời kêu gọi của Thành Đoàn, sinh viên hai trường Đại học Sư phạm Khoa học và Đại học Sư phạm Văn khoa tích cực tham gia phong trào “Thanh niên xung phong kiến thiết Thủ đô”, “Ngày Chủ nhật lao động”. Đầu năm 1956, đông đảo sinh viên xung phong làm giáo viên Bình dân học vụ ở nội và ngoại thành Hà Nội, góp phần xóa nạn mù chữ cho thanh thiếu niên và nhi đồng.',
            source: 'Lịch sử Đoàn TNCS Hồ Chí Minh Trường ĐHSP Hà Nội',
            editorialRef: 'Excel dòng 70'
        }),
        Object.freeze({
            id: 'tinh-nguyen-dong-huong',
            beforeEvent: 'nghe-tinh',
            title: 'MÔ HÌNH TÌNH NGUYỆN ĐỒNG HƯƠNG',
            period: '2001–nay',
            summary: 'Khởi lập năm 2001, các đội sinh viên trở về quê hương tình nguyện và dần lan rộng tới nhiều tỉnh.',
            content: 'Năm 2001, từ sáng kiến của một số đoàn viên Trường Đại học Sư phạm Hà Nội, mô hình Tình nguyện Đồng hương được thành lập tại Tuyên Quang, Hòa Bình, Yên Bái, Nghệ An rồi lần lượt mở rộng ra nhiều tỉnh khác. Mô hình đưa sinh viên về hoạt động tại quê nhà và sau đó được Thành Đoàn Hà Nội triển khai rộng trong các trường đại học, cao đẳng trên địa bàn.',
            source: 'Lịch sử Đoàn TNCS Hồ Chí Minh Trường ĐHSP Hà Nội',
            editorialRef: 'Excel dòng 69'
        })
    ]),
    love: Object.freeze([])
});

export const ZONE2_MEDIA_COUNTS = Object.freeze({
    panorama: ZONE2_PANORAMA_EVENTS.reduce((sum, item) => sum + item.photos.length, 0),
    love: ZONE2_LOVE_EVENTS.reduce((sum, item) => sum + item.photos.length, 0)
});
