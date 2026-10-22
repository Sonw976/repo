import { ZONE2_PANORAMA_EVENTS, ZONE2_LOVE_EVENTS, ZONE2_DOCUMENTS, ZONE2_HISTORICAL_CARDS } from './zone2-content.js';
import { ZONE2_PANORAMA_EVENTS_V2, ZONE2_LOVE_EVENTS_V2 } from './zone2-photo-wall-content.js';

export const ZONE_CONTENT = Object.freeze({
    1: Object.freeze({
        heading: 'YÊU NƯỚC CÁCH MẠNG',
        sections: Object.freeze([
            Object.freeze({
                fraction: 0.23,
                title: 'PHONG TRÀO BA SẴN SÀNG',
                period: '1964',
                infographic: 'infographic/inforgraphic phong trào Ba sẵn sàng.png',
                content: 'Khởi nguồn từ phong trào "Tam bất kỳ" do BCH Đoàn Trường phát động, Ba sẵn sàng trở thành lời hiệu triệu của tuổi trẻ miền Bắc trong những năm kháng chiến chống Mỹ.',
                photos: Object.freeze([
                    Object.freeze({ fraction: 0.31, title: 'LỄ tuyên thệ tại Mai Dịch', year: '30/4/1964', imageUrl: 'Tư liệu cụm 1/Bí thư Đoàn trường Trịnh Ngọc Trình phát biểu tuyên thệ trong Lễ phát động phong trào “Ba sẵn sàng” tại Nghĩa trang Liệt sĩ Mai Dịch - Hà Nội, ngày 30_4_1964. .jpg', content: 'Bí thư Đoàn trường Trịnh Ngọc Trình phát biểu tuyên thệ trong Lễ phát động phong trào Ba sẵn sàng tại Nghĩa trang Liệt sĩ Mai Dịch.' }),
                    Object.freeze({ fraction: 0.39, title: 'Sinh viên Sư phạm hưởng ứng', year: '1964', imageUrl: 'Tư liệu cụm 1/Đoàn viên, sinh viên Trường ĐHSP Hà Nội hưởng ứng phong trào Ba sẵn sàng tại Lễ phát động ngày 30_4_1964..jpg', content: 'Đoàn viên, sinh viên Trường ĐHSP Hà Nội hưởng ứng phong trào tại lễ phát động ngày 30/4/1964.' }),
                    Object.freeze({ fraction: 0.47, title: 'Tuổi trẻ Hà Nội hưởng ứng', year: '1964', imageUrl: 'Tư liệu cụm 1/Ảnh tuổi trẻ Hà Nội hưởng ứng phong trào.jpg', content: 'Từ Trường ĐHSP Hà Nội, tinh thần Ba sẵn sàng lan tỏa trong thanh niên Thủ đô và trên toàn miền Bắc.' })
                ])
            }),
            Object.freeze({
                fraction: 0.68,
                title: 'XẾP BÚT NGHIÊN LÊN ĐƯỜNG RA TRẬN',
                period: '1966–1979',
                infographic: 'infographic/Infographic phong trào Xếp bút nghiên lên đường ra trận.png',
                content: 'Tiếp nối tinh thần Ba sẵn sàng, hàng nghìn cán bộ và sinh viên gác lại giấc mơ giảng đường, lên đường chiến đấu, phục vụ chiến đấu và bảo vệ Tổ quốc.',
                photos: Object.freeze([
                    Object.freeze({ fraction: 0.76, title: 'Phục vụ chiến đấu tại Hàm Rồng', year: '15/8/1966', imageUrl: 'Tư liệu cụm 1/Trận địa pháo có SV ĐHSP Hà Nội tham gia phục vụ chiến đấu tại cầu Tào, Hàm Rồng, Thanh Hoá, 15_8_1966.jpg', content: 'Sinh viên Trường ĐHSP Hà Nội tham gia phục vụ chiến đấu tại trận địa pháo cầu Tào, Hàm Rồng, Thanh Hóa.' }),
                    Object.freeze({ fraction: 0.84, title: 'Đội 146 lên đường', year: '1972', imageUrl: 'Tư liệu cụm 1/Một số hình ảnh của Đội 146 ĐHSP Hà Nội tham gia khắc phục hậu quả chiến tranh tại Hầm Nà Tòng, Đồng Mỏ, Lạng Sơn, 1972/Quang cảnh lễ xuất phát.jpg', content: 'Quang cảnh lễ xuất phát của Đội 146 tham gia khắc phục hậu quả chiến tranh tại Hầm Nà Tòng, Đồng Mỏ, Lạng Sơn.' }),
                    Object.freeze({ fraction: 0.92, title: 'Trung đoàn 32 tại phòng tuyến Sông Cầu', year: '1979', imageUrl: 'Tư liệu cụm 1/Ảnh Đội Thanh niên Xung kích hoạt động tại mặt trận Lạng Sơn; xây dựng phòng tuyến sông Cầu, bảo vệ Thủ đô-20260814T135440Z-1-001/Ảnh Đội Thanh niên Xung kích hoạt động tại mặt trận Lạng Sơn_ xây dựng phòng tuyến sông Cầu, bảo vệ Thủ đô/Lễ xuất phát Trung đoàn 32 đi xây dựng phòng tuyến Sông Cầu năm 1979 - 1.jpg', content: 'Lễ xuất phát Trung đoàn 32 đi xây dựng phòng tuyến Sông Cầu, bảo vệ Thủ đô năm 1979.' })
                ])
            })
        ])
    }),
    2: Object.freeze({
        heading: 'DẤU CHÂN TÌNH NGUYỆN & CHẤT SƯ PHẠM',
        panoramaHeading: 'MÙA HÈ TÌNH NGUYỆN',
        panoramaEvents: ZONE2_PANORAMA_EVENTS_V2,
        panoramaDocuments: ZONE2_DOCUMENTS.panorama,
        panoramaHistoricalCards: ZONE2_HISTORICAL_CARDS.panorama,
        loveHeading: 'SƯ PHẠM TRAO YÊU THƯƠNG',
        loveEvents: ZONE2_LOVE_EVENTS_V2,
        loveDocuments: ZONE2_DOCUMENTS.love,
        loveHistoricalCards: ZONE2_HISTORICAL_CARDS.love
    }),
    3: Object.freeze({
        heading: 'HỌC TẬP & NGHIÊN CỨU KHOA HỌC'
    })
});

export function getZoneContent(zoneId) {
    const content = ZONE_CONTENT[zoneId];
    if (!content) throw new RangeError(`Không có nội dung cho cụm ${zoneId}`);
    return content;
}
